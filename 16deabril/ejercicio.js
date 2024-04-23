function FactoryComida(nombre, tipo, estado, precio, cliente) {
    return{
        nombre,
        tipo,
        estado,
        precio,
        cliente
    }
}

function FactoryCliente(nombre, apellido, contacto) {
    return{
        nombre,
        apellido,
        contacto
    }
}

let orden = FactoryComida("Messironaldo","Salchipapas", true, 15000, 
FactoryCliente("Ana", "perez", "381979828"))

let orden2 = FactoryComida("La peligrosa","Hamburguesa", true, 35000, 
FactoryCliente("Julian", "Reina", "386347274"))

let orden3 = FactoryComida("El Diarreoso","Burrito", false, 12500, 
FactoryCliente("Adrian", "Herrera", "312412412"))

let orden4 = FactoryComida("Nagasaki","Sushi", false, 15000, 
FactoryCliente("Daniel", "Scarface", "334567890"))

function restaurante(orden) {
    let Disponibilidad = []
    let Nodisponible = []

    if (orden.estado) {
        Disponibilidad.push(orden)
    } else {
        Nodisponible.push(orden)
    }

    return{
        Disponibilidad,
        Nodisponible
    }
}
console.log(restaurante(orden).Disponibilidad);
console.log(restaurante(orden2).Disponibilidad);
console.log(restaurante(orden3).Disponibilidad);
console.log(restaurante(orden4).Disponibilidad);