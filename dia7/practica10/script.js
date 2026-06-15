var TELEFONO = '595985201299'; // mi numero
var productos = document.querySelectorAll('.producto'); 

productos.forEach(function(producto) {
    producto.addEventListener('click', function() {
        var nombre = producto.getAttribute('data-nombre');
        var mensaje = 'Hola, me interesa: ' + nombre;
        var url = 'https://wa.me/' + TELEFONO + '?text=' + encodeURIComponent(mensaje);
        window.open(url, '_blank');
    });
})