import { propiedades_alquiler, propiedades_venta } from './data/propiedades.js';

const mostrarPropiedades = (propiedades, contenedorId) => {
    const contenedor = document.getElementById(contenedorId);
    const propiedadesMostradas = propiedades.slice(0, 3);

    propiedadesMostradas.forEach(propiedad => {
        contenedor.innerHTML += `
        <div class="col-md-4 card">
            <img src="${propiedad.src}" class="card-img-top" alt="${propiedad.nombre}">
            <div class="card-body">
                <h5 class="card-title">${propiedad.nombre}</h5>
                <p class="card-text">${propiedad.descripcion}</p>
                <p class="card-text">Ubicación: ${propiedad.ubicacion}</p>
                <p class="card-text">Habitaciones: ${propiedad.habitaciones}</p>
                <p class="card-text">Baños: ${propiedad.baños}</p>
                <p class="card-text">Costo: $${propiedad.costo}</p>
            </div>
        </div>
        `;
    });
};

mostrarPropiedades(propiedades_venta, 'contenedor-venta');
mostrarPropiedades(propiedades_alquiler, 'contenedor-alquiler');
