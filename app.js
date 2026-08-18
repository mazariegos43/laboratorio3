// Menú móvil interactivo
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }

  // Desplazamiento suave para los enlaces de la navegación
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      
      if (target) {
        if (navMenu.classList.contains('active')) {
          navMenu.classList.remove('active');
        }
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});