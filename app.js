//Declaring Variables
const imgBx = document.querySelector(".images");
const slides = imgBx.getElementsByTagName("img");
var i = 0;


const secondBox = document.querySelectorAll(".testimonials");
var j = 0;

//Functions

//Changing images
function nextSlide() {
  slides[i].classList.remove("active");
  i = (i + 1) % slides.length;
  slides[i].classList.add("active");
}

function prevSlide() {
  slides[i].classList.remove("active");
  i = (i - 1 + slides.length) % slides.length;
  slides[i].classList.add("active");
}

//Changing Texts
function nextSlideText() {
  secondBox[j].classList.remove("active");
  j = (j + 1) % secondBox.length;
  secondBox[j].classList.add("active");
}

function prevSlideText() {
  secondBox[j].classList.remove("active");
  j = (j - 1 + secondBox.length) %  secondBox.length;
  secondBox[j].classList.add("active");
}
