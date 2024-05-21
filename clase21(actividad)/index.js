const formulario = document.querySelector('.formUsuarios')
const inputNombre = document.querySelector('#inputNombre')
const inputApellido = document.querySelector('#inputApellido')
const inputCedula = document.querySelector('#inputCedula')
const inputFecha = document.querySelector('#inputNacimiento')
const btnSubmit = document.querySelector('#submit')

const usuarios = document.querySelector('.usuarios')

console.log(inputNombre, inputApellido, inputCedula, inputFecha, btnSubmit, usuarios)


formulario.addEventListener('submit', (event) => {
    event.preventDefault()
    const nombre = inputNombre.value
    const apellido = inputApellido.value
    const cedula = inputCedula.value
    const fecha = inputFecha.value

    const usuario = document.createElement('div')
    usuario.classList.add('usuario')
    usuario.innerHTML = `
        <h2>${nombre} ${apellido}</h2>
        <p>Cédula: ${cedula}</p>
        <p>Fecha de nacimiento: ${fecha}</p>
        <p>Edad: ${parseInt(2024 - fecha.split("-")[0])}</p>
    `
    usuarios.appendChild(usuario)
    
})