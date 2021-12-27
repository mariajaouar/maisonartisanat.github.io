              //NAVBAR

window.addEventListener("scroll", function(){
    var navbar = document.querySelector("navbar");
    navbar.classList.toggle("sticky",window.scrollY > 0);
})

              //COOKIE
const cookieContainer = document.querySelector(".cookie-container");
const cookieButton = document.querySelector(".cookie-btn");

cookieButton.addEventListener("click",() =>{
    cookieContainer.classList.remove("active");
   
});

setTimeout( () => {
   
    cookieContainer.classList.add("active");
        
}, 2000);

      //SLIDER
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000); // Change image every 4 seconds
}

       //SCROLL BAR

let progressBar = document.querySelector("#progressBar");
let totalPageHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = () => {
    let newProgressHeight = (window.pageYOffset / totalPageHeight) * 100;
    progressBar.style.height = `${newProgressHeight}%`;
     progressBar.style.opacity = `${newProgressHeight}%`;
}