function showslidebar(){
var slidebar=document.querySelector('.sidebar');
slidebar.style.display="flex";
}
function closeslidebar(){
    var closebar=document.querySelector('.sidebar');
    closebar.style.display="none";
    }
let slideIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slides img').length;

function moveSlide() {
            slideIndex++;
            if (slideIndex >= totalSlides) slideIndex = 0;
            slides.style.transform = `translateX(${-slideIndex * 100}%)`;
        }

setInterval(moveSlide, 2000);