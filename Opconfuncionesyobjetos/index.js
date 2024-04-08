function empleado (nombre, salario, cargo){
    return{"nombre":nombre, "salario":salario, "cargo":cargo}
}

let carlos = empleado("John", 1000000, "operario")

function persona (nombres, edad, identificacion){
    if (edad > 18) {
        return{
            "nombres": nombres,
            "edad": edad,
            "mayoredad": true,
            "id": identificacion
        }
    } else {
        return{
            "nombres": nombres,
            "edad": edad,
            "mayoredad": false,
            "id": identificacion
        }
    }
}

let maicol = persona ("maicol", 18, "10009")
let chamo = persona ("amañe", 15, "10007")

let lista=[]
lista.push(maicol)
lista.push(chamo)
console.log(lista) 

function chevrolet (modelo, numero, año_de_fabricacion, color, cilindrada){
    if (año_de_fabricacion < 2007) {
        return {
            "modelo": modelo,
            "numero": numero,
            "color": color,
            "cilindrada": cilindrada,
            "año de fabricacion": año_de_fabricacion,
            "repuestos": false
        }
        
    } else {
        return {
            "modelo": modelo,
            "numero": numero,
            "color": color,
            "cilindrada": cilindrada,
            "año de fabricacion": año_de_fabricacion,
            "repuestos": true
        }
    }
}

let camaro17 = chevrolet ("Camaro ZL1", "2812", 2017, "Rojo", "5598cc")
let chevelle69 = chevrolet ("Chevelle ss", "989", 1969, "Negro", "4598cc")
let listacarros = []
listacarros.push(chevelle69)
listacarros.push(camaro17)
console.log(listacarros);

function restaurante (nombre, dirreccion, hora_apertura, hora_cierre, abierto_Mañana, Abierto_tarde){
    if (hora_cierre <= 12 && hora_apertura == 7) {
        return{
            "nombre": nombre,
            "direccion": dirreccion,
            "hora apertura": hora_apertura,
            "hora cierre": hora_cierre,
            "Abierto en la mañana": true,
            "Abierto en la tarde": false
        }        
    } else {
        return{
            "nombre": nombre,
            "direccion": dirreccion,
            "hora apertura": hora_apertura,
            "hora cierre": hora_cierre,
            "Abierto en la mañana": false,
            "Abierto en la tarde": false
        }   
    }

    if (hora_cierre >= 18 && hora_apertura == 12) {
        return{
            "nombre": nombre,
            "direccion": dirreccion,
            "hora apertura": hora_apertura,
            "hora cierre": hora_cierre,
            "Abierto en la mañana": false,
            "Abierto en la tarde": true
        }        
    } else {
        return{
            "nombre": nombre,
            "direccion": dirreccion,
            "hora apertura": hora_apertura,
            "hora cierre": hora_cierre,
            "Abierto en la mañana": false,
            "Abierto en la tarde": false
        }   
    }
}

let baconburger = restaurante ("bacon burger", "no se que pereza", 12, 20,)
let losfabios = restaurante ("los Fabios", "tampoco se", 7, 12)
let listares=[]
listares.push(losfabios)
listares.push(baconburger)
console.log(listares);
