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
            details: 'INFORMACIÓN', 
            img: 'Imagenes'
        },
        { 
            id: 6, 
            name: 'Capa de Presentación', 
            details: 'INFORMACIÓN', 
            img: 'Imagenes'
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
