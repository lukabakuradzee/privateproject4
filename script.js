// BurgerMenu

let mobileMenu = document.querySelector(".menu");
let burgmenu = document.querySelector(".burgmenu");
let xmark = document.querySelector(".xmark");

burgmenu.addEventListener("click", () => {
mobileMenu.classList.add("show");
burgmenu.style.display = "none";
xmark.style.display = "block";

});

xmark.addEventListener("click", () => {
  mobileMenu.classList.remove("show");
  burgmenu.style.display = "block";
  xmark.style.display = "none";
  });



  // HEADER

  const header = document.querySelector('.header');
  let lastScrollPos = 0;
  
  window.addEventListener('scroll', () => {
    const currentScrollPos = window.pageYOffset;
  
    if (currentScrollPos > lastScrollPos) {
      // Scrolling down, hide the header
      header.style.top = '-100px';
      header.style.backgroundColor = 'inherit';
    } else {
      // Scrolling up
      if (currentScrollPos === 0) {
        // At the top of the page, show the header with the inherited background color
        header.style.backgroundColor = 'inherit';
      } else if (currentScrollPos <= 100) {
        // Scroll up slightly, transition the background color
        const alpha = (currentScrollPos / 100) * 0.9; // Gradually increase alpha value from 0 to 0.9
      header.style.backgroundColor = `rgba(0, 12, 20, ${alpha})`;
      } else {
        // Scrolling up further, maintain the specified background color
        header.style.backgroundColor = 'rgba(0, 12, 20, 0.9)';
      }
  
      header.style.top = '0';
    }
  
    lastScrollPos = currentScrollPos;
  });
  
  
  


// Why Choose article 

const whyChooseArticle = document.querySelector('.why_choose_article');

const observerOptions = {
  root: null,
  rootMargin: '100px',
  threshold: 0.5, // 50% of the element visible
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // Stop observing after making it visible
    }
  });
}, observerOptions);

observer.observe(whyChooseArticle);


// section2 Why Choose Aritifice?

document.addEventListener("DOMContentLoaded", () => {
  const section2Heading = document.querySelector('.section2_heading');

  const observerOptions = {
    root: null,
    rootMargin: '20px', // Positive rootMargin to start animation earlier
    threshold: 0, // Trigger when even a pixel is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('section2_heading_visible');
        observer.unobserve(entry.target); // Stop observing after making it visible
      }
    });
  }, observerOptions);

  observer.observe(section2Heading);
});


// Transform Your Bussines With AI Technology (heading)


document.addEventListener("DOMContentLoaded", () => {
  const trustedByHeading = document.querySelector('.trusted_by_heading');

  const observerOptions = {
    root: null,
    rootMargin: '50px', // Positive rootMargin to start animation earlier
    threshold: 0.5, // Trigger when even a pixel is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('heading_visible');
        observer.unobserve(entry.target); // Stop observing after making it visible
      }
    });
  }, observerOptions);

  observer.observe(trustedByHeading);
});




document.addEventListener("DOMContentLoaded", () => {
  const section4Heading = document.querySelector('.section4_heading');

  const observerOptions = {
    root: null,
    rootMargin: '20px', // Positive rootMargin to start animation earlier
    threshold: 0, // Trigger when even a pixel is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('section4_heading_visible');
        observer.unobserve(entry.target); // Stop observing after making it visible
      }
    });
  }, observerOptions);

  observer.observe(section4Heading);
});



