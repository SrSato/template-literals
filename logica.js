var nombre=prompt(`Hola, cómo me llamo?`);

var anonima = (function () {
    alert(`Me llamo ${nombre}`);
})(nombre);