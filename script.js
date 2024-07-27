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
           details: 'La Capa de Enlace de Datos es la segunda capa del modelo OSI y se encarga de la transferencia de datos entre dos dispositivos en la misma red. Su función principal es garantizar que los datos se transfieran de manera libre de errores desde el nodo emisor al nodo receptor. La Capa de Enlace de Datos realiza esto mediante la detección y corrección de errores en la capa física, y proporciona un medio para establecer y controlar el flujo de datos.<br><br><b>Funciones Principales:</b><br> - Encapsulación de Datos: Empaqueta los datos en tramas, que incluyen la dirección física del destinatario y del emisor.<br> - Control de Acceso al Medio (MAC): Determina cómo los dispositivos en la red acceden y utilizan el medio de transmisión.<br>- Detección y Corrección de Errores: Asegura la integridad de los datos mediante el uso de métodos como CRC (Cyclic Redundancy Check).<br>', 
            img: 'img/capa-enlace-datos.png'
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
            details: 'La capa de Transporte es el cuarto nivel del modelo OSI, y está encargado de la transferencia libre de errores de los datos entre el emisor y el receptor, aunque no estén directamente conectados, así como de mantener el flujo de la red. Es la base de toda la jerarquía de protocolo.', 
            img: 'img/capa-transporte.png'
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
        { id: 2, name: 'Capa de Internet', details: 'La Capa de Internet del modelo TCP/IP se encarga de la transmisión de paquetes de datos entre dispositivos a través de diferentes redes y de asegurar que estos paquetes lleguen a su destino a través de la red más adecuada. Esta capa proporciona funciones de direccionamiento y enrutamiento, permitiendo la comunicación entre dispositivos en redes diferentes, como en Internet.<br><br> <b>Funciones Principales:</b><br>- Direccionamiento: Asigna direcciones IP únicas a cada dispositivo en la red para identificar su origen y destino.<br> - Encapsulación: Encapsula los datos en paquetes IP, añadiendo encabezados que incluyen la dirección IP de origen y destino.<br> - Enrutamiento: Determina la mejor ruta para los paquetes a través de múltiples redes para llegar a su destino.<br> - Fragmentación y Reensamblaje: Divide los paquetes grandes en fragmentos más pequeños para su transmisión y luego los vuelve a ensamblar en el destino.<br><br> <b>Ejemplos de Dispositivos:</b><br>  - Routers: Dispositivos que enrutan paquetes de datos entre diferentes redes, tomando decisiones sobre la mejor ruta para cada paquete.<br>  - Gateways: Dispositivos que permiten la comunicación entre redes con diferentes protocolos y formatos de datos.<br><br>  <b>Protocolos:</b><br>  - IP (Internet Protocol): El protocolo principal de la capa de Internet, que proporciona la dirección y el enrutamiento de paquetes de datos.<br>  - IPv4: La versión más común de IP, que utiliza direcciones de 32 bits.<br>  - IPv6: La versión más reciente de IP, que utiliza direcciones de 128 bits para permitir un mayor número de direcciones.<br>   - ICMP (Internet Control Message Protocol): Utilizado para enviar mensajes de error y de diagnóstico, como los mensajes de "Host no alcanzable".<br>  - ARP (Address Resolution Protocol): Resuelve direcciones IP a direcciones MAC en redes locales.<br><br> <b>Puertos:</b><br> - Los dispositivos de la Capa de Internet en sí no tienen puertos físicos específicos, pero los protocolos IP pueden utilizar puertos en la Capa de Transporte (TCP/UDP) para la comunicación entre aplicaciones.<br> - Puertos TCP: 80 (HTTP), 443 (HTTPS), 25 (SMTP), etc.<br>- Puertos UDP: 53 (DNS), 67 (DHCP), 69 (TFTP), etc.<br><br>', img: 'img/capa-internet.png' },
        { 
            id: 3, 
         name: 'Capa de Transporte', 
            details: 'La capa de transporte TCP/IP garantiza que los paquetes lleguen en secuencia y sin errores, al intercambiar la confirmación de la recepción de los datos y retransmitir los paquetes perdidos. Este tipo de comunicación se conoce como transmisión de punto a punto.', 
            img: 'img/capa-transporte-tcp.png'
        },
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
