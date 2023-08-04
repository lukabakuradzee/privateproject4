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


  const header = document.querySelector('.header');
  let lastScrollPos = 0;

window.addEventListener('scroll', () => {
  const currentScrollPos = window.pageYOffset;

  if (currentScrollPos > lastScrollPos) {
    // Scrolling down, hide the header
    header.style.top = '-100px';
  } 
  else {
    // Scrolling up, show the header
    header.style.top = '0';
  }

  lastScrollPos = currentScrollPos;
});