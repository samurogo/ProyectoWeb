document.addEventListener('DOMContentLoaded', function () {

    const formulario = document.querySelector('.formulario');
    const botonEnviar = document.querySelector('.boton');

    botonEnviar.addEventListener('click', function () {
        formulario.style.backgroundColor = '#31061D';
    });
});
