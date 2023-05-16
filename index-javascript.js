// Create the observer
const observer = new IntersectionObserver(entries => {
    // We will fill in the callback later...
    entries.forEach(entry => {
        if (entry.isIntersecting) {
          // It's visible. Add the animation class here!
          entry.target.classList.add('fade-in');
          
        }
      });
  });
  
  // Tell the observer which elements to track
  observer.observe(document.querySelector('.hero-wrapper'));

  // Create the observer
const fade2 = new IntersectionObserver(entries => {
    // We will fill in the callback later...
    entries.forEach(entry => {
        if (entry.isIntersecting) {
          // It's visible. Add the animation class here!
          entry.target.classList.add('fade-in-2');
          
        }
      });
  });
  
  // Tell the observer which elements to track
  fade2.observe(document.querySelector('.hero-wrapper-2'));

    // Create the observer
const fade3 = new IntersectionObserver(entries => {
    // We will fill in the callback later...
    entries.forEach(entry => {
        if (entry.isIntersecting) {
          // It's visible. Add the animation class here!
          entry.target.classList.add('fade-in-3');
          
        }
      });
  });
  
  // Tell the observer which elements to track
  fade3.observe(document.querySelector('.hero-wrapper-3'));


    // Create the observer
const fade4 = new IntersectionObserver(entries => {
    // We will fill in the callback later...
    entries.forEach(entry => {
        if (entry.isIntersecting) {
          // It's visible. Add the animation class here!
          entry.target.classList.add('fade-in-4');
          
        }
      });
  });
  
  // Tell the observer which elements to track
  fade4.observe(document.querySelector('.hero-wrapper-4'));

    // Create the observer
const fade5 = new IntersectionObserver(entries => {
    // We will fill in the callback later...
    entries.forEach(entry => {
        if (entry.isIntersecting) {
          // It's visible. Add the animation class here!
          entry.target.classList.add('fade-in-5');
          
        }
      });
  });
  

  fade5.observe(document.querySelector('.hero-wrapper-5'));

  // Create the observer
const welcomeTransition = new IntersectionObserver(entries => {
  // We will fill in the callback later...
  entries.forEach(entry => {
      if (entry.isIntersecting) {
        // It's visible. Add the animation class here!
        entry.target.classList.add('welcome-container-transition');
        
      }
    });
});

welcomeTransition.observe(document.querySelector('.welcome-container'));


 // Create the observer
 const aboutImgTransition = new IntersectionObserver(entries => {
    // We will fill in the callback later...
    entries.forEach(entry => {
        if (entry.isIntersecting) {
          // It's visible. Add the animation class here!
          entry.target.classList.add('about-us-image-wrapper-transition');
          
        }
      });
  });
  
  aboutImgTransition.observe(document.querySelector('.about-us-image-wrapper'));




 // Create the observer // this is to trigger about us text wrapper animation
 const aboutTextTransition = new IntersectionObserver(entries => {
    // We will fill in the callback later...
    entries.forEach(entry => {
        if (entry.isIntersecting) {
          // It's visible. Add the animation class here!
          entry.target.classList.add('about-us-text-wrapper-transition');
          
        }
      });
  });
  
  aboutTextTransition.observe(document.querySelector('.about-us-text-wrapper'));



  const testimonialsTransition = new IntersectionObserver(entries => {
    // We will fill in the callback later...
    entries.forEach(entry => {
        if (entry.isIntersecting) {
          // It's visible. Add the animation class here!
          entry.target.classList.add('testimonials-container-transition');
          
        }
      });
  });
  
  testimonialsTransition.observe(document.querySelector('.testimonials-container'));








const navMenuHamburgerButton = document.getElementById("hamburger-button");
const navMenuExitButton = document.getElementById("exit-button");
const navMenu = document.getElementById("nav-menu");








navMenuHamburgerButton.addEventListener('click', () => {
    if (navMenu.style.display ===
        'none') {
            navMenu.style.display = 'block'
        } else {
            navMenu.style.display = 'none'
        } 
});


navMenuExitButton.addEventListener('click', () => {
    if (navMenu.style.display ===
        'none') {
            navMenu.style.display = 'block'
        } else {
            navMenu.style.display = 'none'
        } 
});











const contactButton = document.getElementById("contact-button");
const contactForm = document.getElementById("contact-form");


contactButton.addEventListener('click', () => {
    if (contactForm.style.display ===
        'none') {
            contactForm.style.display = 'block'
        } else {
            contactForm.style.display = 'none'
        } 
});






