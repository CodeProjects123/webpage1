//variable
var slideIndex = 1;
//call to function
showSlides(slideIndex);
//functions
function plusSlides(n) {
  //calls function
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  //calls function
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  //for loop withing funtion
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" active2", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active2";
}
	
