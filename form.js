// Selección de elementos
const menuHamburguesa = document.querySelector('.menu-hamburguesa');
const navLinks = document.querySelector('.nav-links');

// Evento para el menú hamburguesa
menuHamburguesa.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuHamburguesa.classList.toggle('open');
});





// Seleccionamos todos los botones con la clase .cta-button y los botones de enviar en el formulario
const buttons = document.querySelectorAll('.cta-button, .contact-form button');

// Iteramos sobre cada botón para agregarle eventos
buttons.forEach(button => {
  // Evento mouseover (cuando el cursor pasa por encima del botón)
  button.addEventListener('mouseover', () => {
    button.style.transform = 'scale(1.1)'; // Aumenta el tamaño del botón
    button.style.backgroundColor = '#ff8533'; // Cambia el color de fondo
  });

  // Evento mouseout (cuando el cursor deja de estar encima del botón)
  button.addEventListener('mouseout', () => {
    button.style.transform = 'scale(1)'; // Vuelve al tamaño original
    button.style.backgroundColor = '#ff6600'; // Vuelve al color original
  });

  // Evento click (cuando se hace clic en el botón)
  button.addEventListener('click', () => {
    button.style.transform = 'scale(0.95)'; // Disminuye el tamaño ligeramente
    button.style.transition = 'transform 0.1s'; // Hace la transición suave
    setTimeout(() => {
      button.style.transform = 'scale(1)'; // Vuelve al tamaño original
    }, 100); // Duración de la animación de clic
  });
});