function factoryRol(idrol, rol) {
    return{
        idrol,
        rol
    }
}

function factoryLocacion(idloc, direcion) {
    return{
        idloc,
        direcion
    }
}

function factoryPedido(idpedido, fecha_de_entrega, locacion, producto, producto2) {
    return{
        idpedido,
        fecha_de_entrega,
        locacion,
        producto,
        producto2
    }
}

function factoryProducto(idprod, nombreprod, precioprod) {
    return{
        idprod,
        nombreprod,
        precioprod
    }    
}

function factoryUsuario(nombreU, contraseña, email, rolU, pedido, pedido2,) {
    return{
        nombreU,
        contraseña,
        email,
        rolU,
        pedido,
        pedido2
    }
}

let orden1 = factoryUsuario("Andres", "312312", "jandressg30@gmail.com", factoryRol(1, "cliente"),factoryPedido(1, "12/12/12" , "Envigado", factoryProducto(1, "Play Station 5", 500), factoryProducto(2, "Xbox Series X", 400)), factoryPedido(2, "10/10/10", "Envigado", factoryProducto(3, "Licuadora", 50),factoryProducto(4,"lavadora", 75)))

let orden2 = factoryUsuario("Julian", "123412", "julianperez@gmail.com", factoryRol(1, "cliente"),factoryPedido(3, "12/09/23" , "Itagui", factoryProducto(5, "Televisor Samsung", 700), factoryProducto(2, "Xbox Series X", 400)), factoryPedido(4, "11/09/23", "Envigado", factoryProducto(7, "Audifonos Bluethot", 60),factoryProducto(4,"lavadora", 75)))


console.log(orden1);
console.log(orden2);
