const formulario = document.querySelector('.form')
const ImputNombre = document.querySelector('#nombre')
const ImputApellido = document.querySelector('#apellido')
const ImputEmail = document.querySelector('#email')
const ImputPassword = document.querySelector('#password')
const ImputEdad = document.querySelector('#edad')
const btnSubmit = document.querySelector('#submit')

formulario.addEventListener('submit', (event) => {
    event.preventDefault()
    const nombre = ImputNombre.value;
    const apellid = ImputApellido.value;
    const email = ImputEmail.value;
    const password = ImputPassword.value;
    const edad = ImputEdad.value;
    alert(`Nombre: ${nombre.toLowerCase()}
    Apellido: ${apellid.toLowerCase()}
    Email: ${email}
    Password: ${password}
    Edad: ${ edad > 18 ? "Mayor" : "Menor"}`)
})