
function scrambleTextEffect(className) {
    const elements = document.querySelectorAll('.' + className);
    
    elements.forEach(element => {
        const originalText = element.innerText;
        const originalLetters = originalText.replace(/[^A-Za-z]/g, '').split(''); // Extract letters only

        function shuffleArray(array) {
            return array.sort(() => Math.random() - 0.5);
        }

        element.addEventListener("mouseenter", () => {
            let interval = setInterval(() => {
                let shuffled = shuffleArray([...originalLetters]).join('');
                let scrambledText = '';
                let letterIndex = 0;

                for (let char of originalText) {
                    scrambledText += /[A-Za-z]/.test(char) ? shuffled[letterIndex++] : char;
                }

                element.innerText = scrambledText;
            }, 100);

            setTimeout(() => {
                clearInterval(interval);
                element.innerText = originalText;
            }, 2000); // Scramble effect for 2 seconds
        });

        element.addEventListener("mouseleave", () => {
            element.innerText = originalText;
        });
    });
}

// Apply the effect to all elements with the class 'hover-effect'
scrambleTextEffect("hover-effect");
