const iconoMenu = document.querySelector('#icono-menu'),
      menu = document.querySelector('#menu');

iconoMenu.addEventListener('click', (e) => {

    // Alterna estilos para el menú y body
    menu.classList.toggle('active');
    document.body.classList.toggle('opacity');

    // Alterna su atributo 'src' para el ícono del menú
    const rutaActual = e.target.getAttribute('src');

    if(rutaActual == 'Menu/open-menu.png'){
        e.target.setAttribute('src','Menu/open-menu2.png');
    }else{
        e.target.setAttribute('src','Menu/open-menu.png');
    }
});