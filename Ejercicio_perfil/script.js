const tema = document.getElementById('temaToggle');
const body = document.body;

tema.addEventListener('change', () => {
    if (tema.checked) {
      body.classList.remove('claro');
      body.classList.add('oscuro');
    } else {
      body.classList.remove('oscuro');
      body.classList.add('claro');
    }
  });

  // Si quieres que arranque con tema claro por defecto
  window.addEventListener('DOMContentLoaded', () => {
    body.classList.add('oscuro');
  });