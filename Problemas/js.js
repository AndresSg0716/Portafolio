let empleados = ["Jhon", "Maicol", "Alejandra", "Darmarys"]
let salarios = [1000, 1250, 2000, 2000]
const cesantias = 0.04
const seguridad = 0.04
let resultado = []
for (let i = 0; i < empleados.length; i++) {
    resultado[i] = salarios[i]-(salarios[i] * cesantias + seguridad * salarios[i])
}

for (let i = 0; i < resultado.length; i++) {
    console.log("valor a pagar a " + empleados[i] + " " + resultado[i])
}
