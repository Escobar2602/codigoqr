import './bootstrap';

document.addEventListener('DOMContentLoaded', function() {
    const botonesTipoQR = document.querySelectorAll('.qr-type-btn');
    const formulariosContenido = document.querySelectorAll('.content-form');
    const botonGenerar = document.getElementById('generate-btn');
    const botonDescargar = document.getElementById('download-btn');
    const vistaPreviaQR = document.getElementById('qr-preview');

    botonesTipoQR.forEach(boton => {
        boton.addEventListener('click', function() {
            botonesTipoQR.forEach(btn => {
                btn.classList.remove('bg-indigo-100', 'text-indigo-700', 'border-indigo-300');
                btn.classList.add('bg-gray-100', 'hover:bg-indigo-50');
            });

            this.classList.remove('bg-gray-100', 'hover:bg-indigo-50');
            this.classList.add('bg-indigo-100', 'text-indigo-700', 'border-indigo-300');

            formulariosContenido.forEach(formulario => {
                formulario.classList.add('hidden');
            });

            const idFormulario = `${this.dataset.type}-form`;
            const formularioSeleccionado = document.getElementById(idFormulario);
            if (formularioSeleccionado) {
                formularioSeleccionado.classList.remove('hidden');
            } else {
                document.getElementById('website-form').classList.remove('hidden');
            }
        });
    });

    botonGenerar.addEventListener('click', function() {
        const inputURL = document.getElementById('website-url');
        const url = inputURL.value.trim();

        if (url) {
            vistaPreviaQR.innerHTML = '';

            const marcador = document.createElement('div');
            marcador.className = 'text-center p-4';

            const qrCodigo = document.createElement('div');
            qrCodigo.className = 'mx-auto mb-2 text-4xl';
            qrCodigo.textContent = '⬜⬛⬛⬜⬛⬜⬛⬜';

            const textoURL = document.createElement('div');
            textoURL.className = 'text-xs text-gray-500 break-all';
            textoURL.textContent = url;

            marcador.appendChild(qrCodigo);
            marcador.appendChild(textoURL);
            vistaPreviaQR.appendChild(marcador);

            botonDescargar.disabled = false;
        } else {
            alert('Por favor, ingrese una URL válida');
        }
    });

    botonDescargar.addEventListener('click', function() {
        alert('En una aplicación real, esto descargaría la imagen del código QR.');
    });
});

