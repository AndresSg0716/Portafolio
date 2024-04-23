function FactoryMascota(nombre, raza, numeroContacto,IsAtendidos, dueño) {
    return{
        nombre,
        raza,
        numeroContacto,
        IsAtendidos,
        dueño
    }
    
}

function factoryDueño(nombre, apellido) {
    return {
        nombre,
        apellido
    }
}

let mascotas = FactoryMascota("kjasca", "asda", "123131",
true,
factoryDueño("pepito", "45xd"))

let mascotas1 = FactoryMascota("pepe", "azul", "398213131",
false,
factoryDueño("animal", "45xd"))

function veterinaria(mascotas) {
    let listadeatendidos = []
    let lista_no_antendidos = []
    
    if (mascotas.IsAtendidos) {
        listadeatendidos.push(mascotas)
    } else {
        lista_no_antendidos.push(mascotas)
    }

    return{
        listadeatendidos,
        lista_no_antendidos
    }
}

console.log(veterinaria(mascotas).listadeatendidos)