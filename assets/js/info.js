// Function to animate numbers with specific suffixes
function animateNumber(id, start, end, duration, suffix) {
    let startTime = null;
  
    // Animation function
    function animate(currentTime) {
      if (startTime === null) startTime = currentTime;
      let timeElapsed = currentTime - startTime;
      let progress = Math.min(timeElapsed / duration, 1); // Ensuring it doesn't exceed the duration
      let currentNumber = Math.floor(progress * (end - start) + start);
  
      // Update the number in the DOM
      document.getElementById(id).innerText = currentNumber + suffix;
  
      // Continue the animation until duration is complete
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }
  
    // Start the animation
    requestAnimationFrame(animate);
  }
  
  // Function to start animations once the section is in view
  function startAnimationOnScroll() {
    // Set up the intersection observer
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Start the animations for the numbers with the appropriate suffix
          animateNumber("projectsCompleted", 0, 8240, 2000, "+");
          animateNumber("awardsWinning", 0, 100, 2000, "+");
          animateNumber("customerSatisfaction", 0, 99, 2000, "%");
          animateNumber("yearsExperience", 0, 18, 2000, "+");
  
          // Once the animation is triggered, stop observing
          observer.disconnect();
        }
      });
    }, { threshold: 0.5 }); // Trigger animation when 50% of the section is visible
  
    // Target the section with the numbers for observation
    const target = document.querySelector('.row.mt-5'); // Change this selector if needed
    observer.observe(target);
  }
  
  // Call the function to initiate the scroll-based animation
  window.onload = startAnimationOnScroll;
  