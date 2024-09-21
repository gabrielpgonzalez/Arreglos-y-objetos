//Rents properties
const propiedades_alquiler = [
  {
    nombre: "Apartamento Central Park",
    src: "",
    descripcion:
      "Hermoso apartamento con vista al parque, cerca de tiendas y restaurantes.",
    ubicacion: "Nueva York, EE.UU.",
    habitaciones: 2,
    costo: 2500,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Casa de Playa Malibu",
    src: "",
    descripcion:
      "Casa de lujo frente al mar, ideal para disfrutar de atardeceres increíbles.",
    ubicacion: "Malibu, California, EE.UU.",
    habitaciones: 4,
    costo: 4500,
    smoke: false,
    pets: false,
  },
  {
    nombre: "Apartamento Moderno en Tokio",
    src: "",
    descripcion:
      "Apartamento moderno con diseño minimalista y acceso a transporte público.",
    ubicacion: "Tokio, Japón",
    habitaciones: 1,
    costo: 1800,
    smoke: true,
    pets: false,
  },
  {
    nombre: "Casa en la Montaña",
    src: "",
    descripcion:
      "Casa acogedora en la montaña, perfecta para relajarse y disfrutar de la naturaleza.",
    ubicacion: "Aspen, Colorado, EE.UU.",
    habitaciones: 3,
    costo: 3200,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Departamento en Ciudad de México",
    src: "",
    descripcion:
      "Departamento amplio en el corazón de la ciudad, cerca de todo tipo de servicios.",
    ubicacion: "Ciudad de México, México",
    habitaciones: 2,
    costo: 1500,
    smoke: true,
    pets: false,
  },
  {
    nombre: "Loft Artístico en París",
    src: "",
    descripcion:
      "Loft de estilo industrial con un ambiente artístico, ubicado en un barrio bohemio.",
    ubicacion: "París, Francia",
    habitaciones: 1,
    costo: 2800,
    smoke: false,
    pets: true,
  },
];

//Sells properties
const propiedades_venta = [
  {
    nombre: "Villa Mediterránea",
    src: "",
    descripcion:
      "Espectacular villa con vistas al mar, jardines amplios y piscina privada.",
    ubicacion: "Ibiza, España",
    habitaciones: 5,
    costo: 1200000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Casa Colonial en Cartagena",
    src: "",
    descripcion:
      "Casa de estilo colonial, ubicada en el centro histórico de la ciudad.",
    ubicacion: "Cartagena, Colombia",
    habitaciones: 4,
    costo: 850000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Penthouse en Manhattan",
    src: "",
    descripcion:
      "Lujoso penthouse con vistas panorámicas a la ciudad y acabados de primera calidad.",
    ubicacion: "Nueva York, EE.UU.",
    habitaciones: 3,
    costo: 2500000,
    smoke: true,
    pets: false,
  },
  {
    nombre: "Chalet en los Alpes Suizos",
    src: "",
    descripcion:
      "Chalet acogedor en la montaña, ideal para los amantes del esquí y la naturaleza.",
    ubicacion: "Zermatt, Suiza",
    habitaciones: 6,
    costo: 3300000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Casa Moderna en Los Ángeles",
    src: "",
    descripcion:
      "Casa de diseño moderno con techos altos, ventanales amplios y tecnología inteligente.",
    ubicacion: "Los Ángeles, California, EE.UU.",
    habitaciones: 4,
    costo: 1750000,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Departamento Histórico en Roma",
    src: "",
    descripcion:
      "Departamento en edificio histórico, restaurado con toques modernos.",
    ubicacion: "Roma, Italia",
    habitaciones: 2,
    costo: 920000,
    smoke: false,
    pets: false,
  },
];

//
function insertarPropiedades(propiedades, contenedorID, limite = 3) {
  const contenedor = document.getElementById(contenedorID);

  // Insertamos solo hasta el límite definido
  propiedades.slice(0, limite).forEach((propiedad) => {
    const fumarPermitido = propiedad.smoke
      ? "Fumar permitido"
      : "No se permite fumar";
    const mascotasPermitidas = propiedad.pets
      ? "Mascotas permitidas"
      : "No se permiten mascotas";

    contenedor.innerHTML += `
      <div class="col-md-4 mb-4">
        <div class="card">
          <img src="${propiedad.src}" alt="${
      propiedad.nombre
    }" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title">${propiedad.nombre}</h5>
            <p class="card-text">${propiedad.descripcion}</p>
            <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
            <p><i class="fas fa-bed"></i> ${
              propiedad.habitaciones
            } Habitaciones</p>
            <p><i class="fas fa-dollar-sign"></i> $${propiedad.costo}</p>
            <p class="${
              propiedad.smoke ? "text-success" : "text-danger"
            }"><i class="fas fa-smoking"></i> ${fumarPermitido}</p>
            <p class="${
              propiedad.pets ? "text-success" : "text-danger"
            }"><i class="fas fa-paw"></i> ${mascotasPermitidas}</p>
          </div>
        </div>
      </div>
    `;
  });
}

// Insertar en index.html
if (document.getElementById("venta-lista")) {
  insertarPropiedades(propiedades_venta, "venta-lista", 3);
}

if (document.getElementById("alquiler-lista")) {
  insertarPropiedades(propiedades_alquiler, "alquiler-lista", 3);
}

// Funcion para insertar a sus paginas
if (document.getElementById("alquiler-lista")) {
  insertarPropiedades(propiedades_alquiler, "alquiler-lista");
} else if (document.getElementById("venta-lista")) {
  insertarPropiedades(propiedades_venta, "venta-lista");
}
