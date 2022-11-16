const burger = document.querySelector('.nav-icon');
const navMenu = document.querySelector('.nav-menu');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.querySelector("body").classList.toggle("scroll-hide");
    document.querySelector("html").classList.toggle("scroll-hide");

})

document.querySelectorAll(".nav-link").forEach((link) =>
  link.addEventListener("click", () => {
    burger.classList.remove("active");
    navMenu.classList.remove("active");
    document.querySelector("body").classList.remove("scroll-hide");
    document.querySelector("html").classList.remove("scroll-hide");

  })
 
);

$(document).ready(function() {
  $(".nav-icon").on("click", function() {
    $(this).toggleClass("closed");
  })
})



