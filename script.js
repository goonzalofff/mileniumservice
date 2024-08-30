let slideIndex = 0;
let timer;

function showSlide(n) {
  const slides = document.querySelectorAll('.slide');
  if (n >= slides.length) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[slideIndex].style.display = 'block';
}

function nextSlide() {
  showSlide(slideIndex += 1);
}

function prevSlide() {
  showSlide(slideIndex -= 1);
}

function startSlider() {
  timer = setInterval(nextSlide, 2000); // Cambia de diapositiva cada 3 segundos (3000 milisegundos)
}

function stopSlider() {
  clearInterval(timer);
}

document.addEventListener("DOMContentLoaded", function() {
  showSlide(slideIndex);
  startSlider();
});

// Agregar eventos para pausar el slider al pasar el mouse sobre él
document.querySelector('.slider-container').addEventListener('mouseenter', stopSlider);
document.querySelector('.slider-container').addEventListener('mouseleave', startSlider);

// Obtener el botón
let mybutton = document.getElementById("btnTop");

// Mostrar el botón cuando el usuario haga scroll hacia abajo 20px desde la parte superior del documento
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// Cuando el usuario haga clic en el botón, volverá a la parte superior del documento
function scrollToTop() {
    document.body.scrollTop = 0; // Para Safari
    document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
}