/*SUSANA TIENE UNA VETERINARIA, QUIERE TENER DOS LISTAS DE ATENDIDOS Y NO ATENDIDOS
TODAS LAS MASCOTAS TIENEN UN NOMBRE, UNA RAZA, UN NUMERO DE CONTACTO Y UN DUEÑO*/

/*json = javascript onject notation*/

/*let empleado={nombre:"Juan", apellido:"ramirez", salario:1300000}

empleado.nombre=""*/



let lista_de_atendidos = []
let lista_no_antendidos = []
let mascotas = { nombre: "Rocky Rolando", raza: "Criollo", numeroContc: "232333232", dueño: { nombre: "Juan", apellido: "Oquendo" } }
let mascotas1 = mascotas
let mascotas2 = mascotas
let mascotas3 = mascotas

/*No se encapsulan, cambian todo "mascotas" a los valores de "mascotas1", DEBE ENCAPSULARSE*/

mascotas1.nombre = "Princesa"
mascotas1.raza = "Pitbull"
mascotas1.numeroContc = "12345"
mascotas1.dueño.nombre = "Miguel"
mascotas1.dueño.apellido = "Alvarez"

lista_de_atendidos.push(mascotas)

lista_de_atendidos.push(mascotas1)

lista_de_atendidos.push(mascotas2)

lista_de_atendidos.push(mascotas3)

console.log(mascotas)
console.log(lista_de_atendidos)