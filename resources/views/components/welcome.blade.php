<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>QR.io - Generador de Códigos QR</title>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>

<body class="bg-gray-50 min-h-screen">
    <div class="container mx-auto px-4 py-8">


        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div class="bg-white p-6 rounded-lg shadow-md">
                <h2 class="text-xl font-semibold mb-4 text-gray-800">Tipos de Contenido</h2>

                <div class="space-y-4">
                    <div>
                        <h3 class="font-medium text-gray-700 mb-2">Enlace</h3>
                        <div class="grid grid-cols-2 gap-2">
                            <button class=" qr-type-btn cursor-pointer transition-all
bg-gray-700 text-white px-6 py-2 rounded-lg
border-green-400
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-xl hover:shadow-green-300 shadow-green-300 active:shadow-none"
                                data-type="url">URL</button>
                            <button class="qr-type-btn cursor-pointer transition-all
bg-gray-700 text-white px-6 py-2 rounded-lg
border-green-400
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-xl hover:shadow-green-300 shadow-green-300 active:shadow-none"
                                data-type="text">Texto</button>
                            <button class=" qr-type-btn cursor-pointer transition-all
bg-gray-700 text-white px-6 py-2 rounded-lg
border-green-400
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-xl hover:shadow-green-300 shadow-green-300 active:shadow-none"
                                data-type="phone">Teléfono</button>
                            <button class="qr-type-btn cursor-pointer transition-all
bg-gray-700 text-white px-6 py-2 rounded-lg
border-green-400
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-xl hover:shadow-green-300 shadow-green-300 active:shadow-none"
                                data-type="email">Email</button>

                        </div>
                    </div>

                    <div>
                        <h3 class="font-medium text-gray-700 mb-2">V-card</h3>
                        <div class="grid grid-cols-2 gap-2">
                            <button class="qr-type-btn px-3 py-2 bg-gray-100 hover:bg-indigo-50 rounded text-sm"
                                data-type="whatsapp">WhatsApp</button>
                            <button class="qr-type-btn px-3 py-2 bg-gray-100 hover:bg-indigo-50 rounded text-sm"
                                data-type="wifi">Wi-Fi</button>
                            <button class="qr-type-btn px-3 py-2 bg-gray-100 hover:bg-indigo-50 rounded text-sm"
                                data-type="pdf">PDF</button>
                            <button class="qr-type-btn px-3 py-2 bg-gray-100 hover:bg-indigo-50 rounded text-sm"
                                data-type="app">Aplicación</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md">
                <h2 class="text-xl font-semibold mb-4 text-gray-800">1. Completa el contenido</h2>

                <div id="content-forms">
                    <div id="website-form" class="content-form">
                        <label for="website-url" class="block text-sm font-medium text-gray-700 mb-1">Ingresa tu sitio
                            web</label>
                            <div class="flex">
                                <span id="input-prefix" class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                                    https://
                                </span>
                                <input type="text" id="website-url" class="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500" placeholder="www.ejemplo.com">
                            </div>


                    </div>
                </div>


                <div class="grid grid-cols-3 gap-4 mb-6">


                </div>

                <button id="generate-btn"
                    class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Generar Código QR
                </button>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                <h2 class="text-xl font-semibold mb-4 text-gray-800">Vista previa del Código QR</h2>
                <div id="qr-preview"
                    class="w-64 h-64 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center mb-6">
                    <span class="text-gray-400">Aquí aparecerá el Código QR</span>
                </div>
                <button id="download-btn"
                    class="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                    Descargar Código QR
                </button>
            </div>
        </div>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', function() {});
    </script>
</body>

</html>
