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
            details: 'La capa de red es crucial para el funcionamiento de las redes de comunicación, ya que se encarga de la entrega y el enrutamiento de paquetes de datos entre dispositivos en diferentes redes. Algunos componentes importantes son el enrutamiento, direccionamiento, encapsulamiento y desencapsulamiento, fragmentacion y reensamblaje, control de congestion y control de calidad de servicio. <br> <b>Enrutamiento: </b> La capa de red determina la ruta óptima para que los datos viajen desde el origen hasta el destino. Los routers (enrutadores) operan en esta capa y utilizan algoritmos de enrutamiento para decidir por qué caminos enviar los paquetes de datos.<br><b>Direccionamiento Lógico: </b>A diferencia del direccionamiento físico (MAC) de la capa de enlace de datos, la capa de red utiliza direcciones lógicas (como las direcciones IP en el caso de TCP/IP) para identificar de manera única a cada dispositivo en una red. <br><b>Encapsulación y Desencapsulación: </b>La capa de red encapsula los segmentos de la capa de transporte en paquetes. Estos paquetes incluyen una cabecera que contiene información necesaria para el enrutamiento, como la dirección IP de origen y destino. En el destino, la capa de red desencapsula el paquete para entregar los datos a la capa de transporte. <br><b>Fragmentación y Reensamblaje: </b>Los datos pueden necesitar ser fragmentados en paquetes más pequeños para ser transmitidos a través de redes con diferentes tamaños de unidad de transmisión máxima (MTU). La capa de red maneja esta fragmentación y el posterior reensamblaje en el destino</b>', 
            img: 'img/capa-red-osi.png' 
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
        { id: 1, name: 'Capa de Enlace', details: 'La capa de enlace en el modelo TCP/IP, también conocida como la capa de acceso a la red, corresponde a la capa de enlace de datos y la capa física en el modelo OSI. Su función principal es manejar las operaciones que se realizan directamente sobre el hardware de la red y proporcionar un enlace fiable para la transmisión de datos entre dos dispositivos en la misma red física. <br> Las funciones principales de este modelo son las siguientes: <br><ul><li>Encapsular datos</li><li>Control de acceso al medio (MAC)</li><li>Direccionamiento fisico</li><li>Deteccion y correccion de errores</li><li>Control de flujo</li><li>Fragmentacion y reensamblaje</li>', img: 'img/capa-enlace-tcp.png' },
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
