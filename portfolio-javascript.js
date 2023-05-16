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

const sectTitleTransition = new IntersectionObserver(entries => {
    // We will fill in the callback later...
    entries.forEach(entry => {
        if (entry.isIntersecting) {
          // It's visible. Add the animation class here!
          entry.target.classList.add('section-title-transition');
          
        }
      });
  });
  
  sectTitleTransition.observe(document.querySelector('.section-title'));


  const sectTitleTextTransition = new IntersectionObserver(entries => {
    // We will fill in the callback later...
    entries.forEach(entry => {
        if (entry.isIntersecting) {
          // It's visible. Add the animation class here!
          entry.target.classList.add('section-title-text-transition');
          
        }
      });
  });
  
  sectTitleTextTransition.observe(document.querySelector('.section-title-text'));


const portfolioImgWrapTransition1 = new IntersectionObserver(entries => {
    // We will fill in the callback later...
    entries.forEach(entry => {
        if (entry.isIntersecting) {
          // It's visible. Add the animation class here!
          entry.target.classList.add('portfolio-image-wrapper-1-transition');
          
        }
      });
  });
  
  portfolioImgWrapTransition1.observe(document.querySelector('.portfolio-image-wrapper-1'));


  const portfolioImgWrapTransition2 = new IntersectionObserver(entries => {
    // We will fill in the callback later...
    entries.forEach(entry => {
        if (entry.isIntersecting) {
          // It's visible. Add the animation class here!
          entry.target.classList.add('portfolio-image-wrapper-2-transition');
          
        }
      });
  });
  
  portfolioImgWrapTransition2.observe(document.querySelector('.portfolio-image-wrapper-2'));


  const portfolioImgWrapTransition3 = new IntersectionObserver(entries => {
    // We will fill in the callback later...
    entries.forEach(entry => {
        if (entry.isIntersecting) {
          // It's visible. Add the animation class here!
          entry.target.classList.add('portfolio-image-wrapper-3-transition');
          
        }
      });
  });
  
  portfolioImgWrapTransition3.observe(document.querySelector('.portfolio-image-wrapper-3'));



  const portfolioImgWrapTransition4 = new IntersectionObserver(entries => {
    // We will fill in the callback later...
    entries.forEach(entry => {
        if (entry.isIntersecting) {
          // It's visible. Add the animation class here!
          entry.target.classList.add('portfolio-image-wrapper-4-transition');
          
        }
      });
  });
  
  portfolioImgWrapTransition4.observe(document.querySelector('.portfolio-image-wrapper-4'));


  const portfolioImgWrapTransition5 = new IntersectionObserver(entries => {
    // We will fill in the callback later...
    entries.forEach(entry => {
        if (entry.isIntersecting) {
          // It's visible. Add the animation class here!
          entry.target.classList.add('portfolio-image-wrapper-5-transition');
          
        }
      });
  });
  
  portfolioImgWrapTransition5.observe(document.querySelector('.portfolio-image-wrapper-5'));



  const portfolioImgWrapTransition6 = new IntersectionObserver(entries => {
    // We will fill in the callback later...
    entries.forEach(entry => {
        if (entry.isIntersecting) {
          // It's visible. Add the animation class here!
          entry.target.classList.add('portfolio-image-wrapper-6-transition');
          
        }
      });
  });
  
  portfolioImgWrapTransition6.observe(document.querySelector('.portfolio-image-wrapper-6'));


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
