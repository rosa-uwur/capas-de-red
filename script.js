const layers = {
    osi: [
        { 
            id: 1, 
            name: 'Capa Física', 
           details: 'Esta capa incluye el equipo físico implicado en la transferencia de datos, tal como los cables y los conmutadores de red. Esta también es la capa donde los datos se convierten en una secuencia de bits, es decir, una cadena de unos y ceros. La capa física de ambos dispositivos también debe estar de acuerdo en cuanto a una convención de señal para que los 1 puedan distinguirse de los 0 en ambos dispositivos.', 
            img: 'img/capa-fisica.png' 
        },
        { 
            id: 2, 
            name: 'Capa de Enlace de Datos', 
           details: 'INFORMACIÓN', 
            img: 'Imagenes'
        },
        { 
            id: 3, 
            name: 'Capa de Red', 
            details: 'INFORMACIÓN', 
            img: 'Imagenes' 
        },
        { 
            id: 4, 
            name: 'Capa de Transporte', 
            details: 'INFORMACIÓN', 
            img: 'Imagenes'
        },
        { 
            id: 5, 
            name: 'Capa de Sesión', 
            details: 'Gestiona y controla las conexiones entre aplicaciones, facilitando el intercambio de datos y la comunicación.<br><br><b>Funciones:</b><br>Establecimiento, mantenimiento y terminación de sesiones: La capa de sesión permite que dos dispositivos inicien, mantengan y terminen una comunicación organizada.<br>Sincronización: Proporciona puntos de sincronización en la comunicación para asegurar que los datos sean recibidos de manera coherente, especialmente útil en transferencias de datos largas.<br>Gestión de diálogo: Controla el diálogo entre los dispositivos, determinando cuál dispositivo puede enviar y recibir datos en un momento dado.<br><br><b>Protocolos:</b><br>NetBIOS: Un protocolo que permite que las aplicaciones en diferentes computadoras se comuniquen dentro de una red local.<br>RPC (Remote Procedure Call): Un protocolo que permite que un programa en un dispositivo ejecute código en un dispositivo remoto.', 
            img: 'img/capa-sesion.png'
        },
        { 
            id: 6, 
            name: 'Capa de Presentación', 
            details: 'Traduce los datos entre el formato de la red y el formato que puede procesar una aplicación, actuando como un traductor entre los datos enviados por la red y los datos que pueden ser entendidos por la aplicación.<br><br><b>Funciones:</b><br>Compresión de datos: Reduce el tamaño de los datos para facilitar su transmisión eficiente a través de la red.<br>Cifrado y descifrado de datos: Proporciona seguridad cifrando los datos antes de la transmisión y descifrando los datos al recibirlos, garantizando la privacidad y la integridad.<br>Conversión de formatos de datos: Convierte los datos de un formato a otro, como de texto a binario o de una codificación a otra, asegurando que los datos sean compatibles entre diferentes sistemas.<br><br><b>Protocolos y formatos:</b><br>SSL/TLS: Protocolos que proporcionan comunicación segura a través de una red informática.<br>JPEG, MPEG: Formatos de compresión para imágenes y videos, respectivamente, que permiten la eficiente transmisión de archivos multimedia.', 
            img: 'img/capa-presentacion.png'
        },
        { 
            id: 7, 
            name: 'Capa de Aplicación', 
            details: 'Esta es la única capa que interactúa directamente con los datos del usuario. Las aplicaciones de software, como navegadores web y clientes de correo electrónico, dependen de la capa de aplicación para iniciar comunicaciones. Sin embargo, debe quedar claro que las aplicaciones de software cliente no forman parte de la capa de aplicación; más bien, la capa de aplicación es responsable de los protocolos y la manipulación de datos de los que depende el software para presentar datos significativos al usuario.', 
            img: 'img/capa-aplicacion.png'
        }
    ],
    tcpip: [
        { id: 1, name: 'Capa de Enlace', details: 'Detalles de la capa de enlace...', img: null },
        { id: 2, name: 'Capa de Internet', details: 'Detalles de la capa de internet...', img: 'path/to/image4.jpg' },
        { id: 3, name: 'Capa de Transporte', details: 'Detalles de la capa de transporte...', img: null },
        { id: 4, name: 'Capa de Aplicación', details: 'Detalles de la capa de aplicación...', img: 'path/to/image5.jpg' }
    ]
};

function showLayerDetail(model, layerId) {
    const layer = layers[model].find(l => l.id === layerId);
    const modal = document.getElementById('layerDetail');
    const modalBody = document.getElementById('modalBody');

    modal.style.display = 'block';
    modalBody.innerHTML = `<h2>${layer.name}</h2><p>${layer.details}</p>`;
    if (layer.img) {
        modalBody.innerHTML += `<img src="${layer.img}" alt="Imagen de ${layer.name}">`;
    }
}

function closeModal() {
    const modal = document.getElementById('layerDetail');
    modal.style.display = 'none';
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('layerDetail');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
