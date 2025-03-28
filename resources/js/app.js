import './bootstrap';
import QRCode from 'qrcode';

document.addEventListener('DOMContentLoaded', function() {
    const botonesTipoQR = document.querySelectorAll('.qr-type-btn');
    const botonGenerar = document.getElementById('generate-btn');
    const botonDescargar = document.getElementById('download-btn');
    const vistaPreviaQR = document.getElementById('qr-preview');
    const inputCampo = document.getElementById('website-url');
    const prefijoSpan = document.getElementById('input-prefix');

    let tipoSeleccionado = 'url'; // Tipo de QR seleccionado (por defecto URL)

    botonesTipoQR.forEach(boton => {
        boton.addEventListener('click', function() {
            // Quitar estilos de selección a todos los botones
            botonesTipoQR.forEach(btn => {
                btn.classList.remove('bg-indigo-100', 'text-indigo-700', 'border-indigo-300');
                btn.classList.add('bg-gray-100', 'hover:bg-indigo-50');
            });

            // Agregar estilos al botón seleccionado
            this.classList.remove('bg-gray-100', 'hover:bg-indigo-50');
            this.classList.add('bg-indigo-100', 'text-indigo-700', 'border-indigo-300');

            // Actualizar tipo seleccionado y modificar el campo de entrada
            tipoSeleccionado = this.dataset.type;
            actualizarPrefijoYPlaceholder();
        });
    });

    function actualizarPrefijoYPlaceholder() {
        if (!prefijoSpan || !inputCampo) return;

        switch (tipoSeleccionado) {
            case 'url':
                prefijoSpan.textContent = 'https://';
                inputCampo.placeholder = 'www.ejemplo.com';
                inputCampo.type = 'url';
                break;
            case 'text':
                prefijoSpan.textContent = 'Texto:';
                inputCampo.placeholder = 'Escribe un mensaje';
                inputCampo.type = 'text';
                break;
            case 'phone':
                prefijoSpan.textContent = 'tel:';
                inputCampo.placeholder = 'Ejemplo: +1234567890';
                inputCampo.type = 'tel';
                break;
            case 'email':
                prefijoSpan.textContent = 'mailto:';
                inputCampo.placeholder = 'Ejemplo: correo@ejemplo.com';
                inputCampo.type = 'email';
                break;
            default:
                prefijoSpan.textContent = '';
                inputCampo.placeholder = 'Ingrese un valor';
                inputCampo.type = 'text';
        }

        // Limpiar el campo de entrada al cambiar de tipo
        inputCampo.value = '';
    }

    botonGenerar.addEventListener('click', function() {
        let valor = inputCampo.value.trim();
        if (!valor) {
            alert('Por favor, ingrese un valor válido.');
            return;
        }

        let contenidoQR = '';
        switch (tipoSeleccionado) {
            case 'url':
                contenidoQR = `https://${valor.replace(/^https?:\/\//, '')}`;
                break;
            case 'text':
                contenidoQR = valor;
                break;
            case 'phone':
                contenidoQR = `tel:${valor.replace(/\s+/g, '')}`;
                break;
            case 'email':
                contenidoQR = `mailto:${valor}`;
                break;
            default:
                contenidoQR = valor;
        }

        vistaPreviaQR.innerHTML = '';

        const canvas = document.createElement('canvas');
        vistaPreviaQR.appendChild(canvas);

        QRCode.toCanvas(canvas, contenidoQR, { width: 256 }, function(error) {
            if (error) {
                console.error(error);
                alert('Ocurrió un error al generar el código QR.');
            } else {
                botonDescargar.disabled = false;
            }
        });
    });

    botonDescargar.addEventListener('click', function() {
        const canvas = vistaPreviaQR.querySelector('canvas');
        if (!canvas) {
            alert('Primero genera un código QR.');
            return;
        }

        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'codigo_qr.png';
        link.click();
    });

    // Inicializar correctamente el campo de entrada
    actualizarPrefijoYPlaceholder();
});
