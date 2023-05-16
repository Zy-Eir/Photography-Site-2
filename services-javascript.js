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





const servImgTransition1 = new IntersectionObserver(entries => {
    // We will fill in the callback later...
    entries.forEach(entry => {
        if (entry.isIntersecting) {
          // It's visible. Add the animation class here!
          entry.target.classList.add('servimg1-transition');
          
        }
      });
  });
  
  servImgTransition1.observe(document.querySelector('.servimg1'));



  const servInfoTransition1 = new IntersectionObserver(entries => {
    // We will fill in the callback later...
    entries.forEach(entry => {
        if (entry.isIntersecting) {
          // It's visible. Add the animation class here!
          entry.target.classList.add('service-info-wrapper-transition');
          
        }
      });
  });
  
  servInfoTransition1.observe(document.querySelector('.service-info-wrapper'));



  const servImgTransition2 = new IntersectionObserver(entries => {
    // We will fill in the callback later...
    entries.forEach(entry => {
        if (entry.isIntersecting) {
          // It's visible. Add the animation class here!
          entry.target.classList.add('servimg2-transition');
          
        }
      });
  });
  
  servImgTransition2.observe(document.querySelector('.servimg2'));




  const servInfoTransition2 = new IntersectionObserver(entries => {
    // We will fill in the callback later...
    entries.forEach(entry => {
        if (entry.isIntersecting) {
          // It's visible. Add the animation class here!
          entry.target.classList.add('service-info-wrapper2-transition');
          
        }
      });
  });
  
  servInfoTransition2.observe(document.querySelector('.service-info-wrapper2'));


  const servImgTransition3 = new IntersectionObserver(entries => {
    // We will fill in the callback later...
    entries.forEach(entry => {
        if (entry.isIntersecting) {
          // It's visible. Add the animation class here!
          entry.target.classList.add('servimg3-transition');
          
        }
      });
  });
  
  servImgTransition3.observe(document.querySelector('.servimg3'));

  
  const servInfoTransition3 = new IntersectionObserver(entries => {
    // We will fill in the callback later...
    entries.forEach(entry => {
        if (entry.isIntersecting) {
          // It's visible. Add the animation class here!
          entry.target.classList.add('service-info-wrapper3-transition');
          
        }
      });
  });
  
  servInfoTransition3.observe(document.querySelector('.service-info-wrapper3'));


  const servImgDesktopTransition3 = new IntersectionObserver(entries => {
    // We will fill in the callback later...
    entries.forEach(entry => {
        if (entry.isIntersecting) {
          // It's visible. Add the animation class here!
          entry.target.classList.add('servimgdesktop-transition');
          
        }
      });
  });
  
  servImgDesktopTransition3.observe(document.querySelector('.servimgdesktop'));


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

