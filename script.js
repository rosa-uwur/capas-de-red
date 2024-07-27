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
            details: 'La capa de red es crucial para el funcionamiento de las redes de comunicación, ya que se encarga de la entrega y el enrutamiento de paquetes de datos entre dispositivos en diferentes redes. Algunos componentes importantes son el enrutamiento, direccionamiento, encapsulamiento y desencapsulamiento, fragmentacion y reensamblaje, control de congestion y control de calidad de servicio. <br> <b>Enrutamiento: </b> La capa de red determina la ruta óptima para que los datos viajen desde el origen hasta el destino. Los routers (enrutadores) operan en esta capa y utilizan algoritmos de enrutamiento para decidir por qué caminos enviar los paquetes de datos.<br><b>Direccionamiento Lógico: </b>A diferencia del direccionamiento físico (MAC) de la capa de enlace de datos, la capa de red utiliza direcciones lógicas (como las direcciones IP en el caso de TCP/IP) para identificar de manera única a cada dispositivo en una red. <br><b>Encapsulación y Desencapsulación: </b>La capa de red encapsula los segmentos de la capa de transporte en paquetes. Estos paquetes incluyen una cabecera que contiene información necesaria para el enrutamiento, como la dirección IP de origen y destino. En el destino, la capa de red desencapsula el paquete para entregar los datos a la capa de transporte. <br><b>Fragmentación y Reensamblaje: </b>Los datos pueden necesitar ser fragmentados en paquetes más pequeños para ser transmitidos a través de redes con diferentes tamaños de unidad de transmisión máxima (MTU). La capa de red maneja esta fragmentación y el posterior reensamblaje en el destino</b>', 
            img: 'img/capa-red-osi.png' 
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
        { id: 1, name: 'Capa de Enlace', details: 'La capa de enlace en el modelo TCP/IP, también conocida como la capa de acceso a la red, corresponde a la capa de enlace de datos y la capa física en el modelo OSI. Su función principal es manejar las operaciones que se realizan directamente sobre el hardware de la red y proporcionar un enlace fiable para la transmisión de datos entre dos dispositivos en la misma red física. <br> Las funciones principales de este modelo son las siguientes: <br><ul><li>Encapsular datos</li><li>Control de acceso al medio (MAC)</li><li>Direccionamiento fisico</li><li>Deteccion y correccion de errores</li><li>Control de flujo</li><li>Fragmentacion y reensamblaje</li>', img: 'img/capa-enlace-tcp.png' },
        { id: 2, name: 'Capa de Internet', details: 'La Capa de Internet del modelo TCP/IP se encarga de la transmisión de paquetes de datos entre dispositivos a través de diferentes redes y de asegurar que estos paquetes lleguen a su destino a través de la red más adecuada. Esta capa proporciona funciones de direccionamiento y enrutamiento, permitiendo la comunicación entre dispositivos en redes diferentes, como en Internet.<br><br> <b>Funciones Principales:</b><br>- Direccionamiento: Asigna direcciones IP únicas a cada dispositivo en la red para identificar su origen y destino.<br> - Encapsulación: Encapsula los datos en paquetes IP, añadiendo encabezados que incluyen la dirección IP de origen y destino.<br> - Enrutamiento: Determina la mejor ruta para los paquetes a través de múltiples redes para llegar a su destino.<br> - Fragmentación y Reensamblaje: Divide los paquetes grandes en fragmentos más pequeños para su transmisión y luego los vuelve a ensamblar en el destino.<br><br> <b>Ejemplos de Dispositivos:</b><br>  - Routers: Dispositivos que enrutan paquetes de datos entre diferentes redes, tomando decisiones sobre la mejor ruta para cada paquete.<br>  - Gateways: Dispositivos que permiten la comunicación entre redes con diferentes protocolos y formatos de datos.<br><br>  <b>Protocolos:</b><br>  - IP (Internet Protocol): El protocolo principal de la capa de Internet, que proporciona la dirección y el enrutamiento de paquetes de datos.<br>  - IPv4: La versión más común de IP, que utiliza direcciones de 32 bits.<br>  - IPv6: La versión más reciente de IP, que utiliza direcciones de 128 bits para permitir un mayor número de direcciones.<br>   - ICMP (Internet Control Message Protocol): Utilizado para enviar mensajes de error y de diagnóstico, como los mensajes de "Host no alcanzable".<br>  - ARP (Address Resolution Protocol): Resuelve direcciones IP a direcciones MAC en redes locales.<br><br> <b>Puertos:</b><br> - Los dispositivos de la Capa de Internet en sí no tienen puertos físicos específicos, pero los protocolos IP pueden utilizar puertos en la Capa de Transporte (TCP/UDP) para la comunicación entre aplicaciones.<br> - Puertos TCP: 80 (HTTP), 443 (HTTPS), 25 (SMTP), etc.<br>- Puertos UDP: 53 (DNS), 67 (DHCP), 69 (TFTP), etc.<br><br>', img: 'img/capa-internet.png' },
        { 
            id: 3, 
         name: 'Capa de Transporte', 
            details: 'La capa de transporte TCP/IP garantiza que los paquetes lleguen en secuencia y sin errores, al intercambiar la confirmación de la recepción de los datos y retransmitir los paquetes perdidos. Este tipo de comunicación se conoce como transmisión de punto a punto.', 
            img: 'img/capa-transporte-tcp.png'
        },
        { id: 4, name: 'Capa de Aplicación', details: 'La capa de Aplicación en el modelo TCP/IP es responsable de proporcionar servicios de red directamente a las aplicaciones de usuario. Esta capa interactúa directamente con el software de aplicación y es responsable de asegurar que los datos se presenten en un formato que las aplicaciones puedan entender y utilizar. A continuación, se presentan algunas de las funciones y protocolos clave asociados con esta capa:<br><br><b>Funciones:</b><br>Provisión de Servicios de Red: Proporciona servicios para el correo electrónico, transferencia de archivos, acceso remoto, navegación web, etc.<br>Interfaz para Aplicaciones de Usuario: Actúa como un intermediario entre las aplicaciones de usuario y los servicios de red subyacentes.<br>Gestión de Recursos de Red: Facilita el acceso a los recursos de red y administra las conexiones entre aplicaciones en diferentes dispositivos.<br><br><b>Protocolos:</b><br>HTTP/HTTPS (Hypertext Transfer Protocol / Secure): Utilizado para la transferencia de documentos web. HTTPS es la versión segura de HTTP.<br>FTP (File Transfer Protocol): Protocolo estándar para la transferencia de archivos entre computadoras en una red.<br>DNS (Domain Name System): Traduce nombres de dominio a direcciones IP, permitiendo que los usuarios accedan a sitios web mediante nombres de dominio en lugar de direcciones IP numéricas.<br>SSH (Secure Shell): Protocolo seguro para acceso remoto a servidores y dispositivos de red.<br>DHCP (Dynamic Host Configuration Protocol): Asigna dinámicamente direcciones IP a dispositivos en una red.<br>SNMP (Simple Network Management Protocol): Utilizado para la gestión y monitoreo de dispositivos en una red.', img: 'img/capa_aplicacion_tcp.png' }
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
