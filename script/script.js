/* this is the function that display the modal in block */
function openModal() {
  document.getElementById("myModal").style.display = "block";
}
/* this is the function that display the modal in none style */
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}
/* this is a slide show that shows pictures in slideshow */
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}
/* this makes picture to enlarge when you tap them */
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
/* this validates the form */
function validate(){
    alert("Your form has been submited")
}