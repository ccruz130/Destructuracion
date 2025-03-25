const jugador = {
    nombre: "Steve",
    experiencia: 15,
    inventario: {
        herramienta: "Pico de diamante",
        comida: "Manzana dorada",
        bloques: 64
    }
};

const { nombre, inventario: { herramienta } } = jugador;

console.log(`Nombre del jugador: ${nombre}, su herramienta principal es ${herramienta}`);


const nuevoObjeto = {herramienta_adicional : "Piedra"};

const nuevoInventario = { ...jugador.inventario, ...nuevoObjeto };

console.log("Nuevo inventario:", nuevoInventario);