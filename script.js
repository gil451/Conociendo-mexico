const botones = document.querySelectorAll('.menu button');
const contenido = document.getElementById('contenido');

botones.forEach(boton => {
  boton.addEventListener('click', () => {
    botones.forEach(b => b.classList.remove('activo'));
    boton.classList.add('activo');
    cambiarSeccion(boton.textContent);
  });
});

function cambiarSeccion(seccion) {
  switch (seccion) {
    case 'Home':
      contenido.innerHTML = `
        <h3>Bienvenido</h3>
        <p>Explora los lugares, tradiciones y gastronomía de México.</p>`;
      break;
    case 'Lugares':
      contenido.innerHTML = `
        <h3>Lugares Turísticos</h3>
        <ul>
          <li>Teotihuacán</li>
          <li>Chichén Itzá</li>
          <li>San Cristóbal de las Casas</li>
        </ul>`;
      break;
    case 'Comida':
      contenido.innerHTML = `
        <h3>Comida Típica</h3>
        <p>Tacos, tamales, pozole, mole y más platillos representativos.</p>`;
      break;
    case 'Tradiciones':
      contenido.innerHTML = `
        <h3>Tradiciones</h3>
        <p>Día de Muertos, la Guelaguetza, la Feria de San Marcos, entre otras.</p>`;
      break;
  }
}
