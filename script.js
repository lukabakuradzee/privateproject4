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