const formulario = document.querySelector('.formUsuarios')
const inputNombreU = document.querySelector('#inputNombreU')
const inputApellidoU = document.querySelector('#inputApellidoU')
const inputNacimiento = document.querySelector('#inputNacimiento')
const btnSubmit = document.querySelector('#submit')

const cajahijueputa = document.querySelector('.cajahijueputa')



formulario.addEventListener('submit', (event) => {
    event.preventDefault()
console.log(inputNombreU, inputApellidoU, inputNacimiento, btnSubmit, cajahijueputa)

    const nombre = inputNombreU.value
    const apellido = inputApellidoU.value
    const nacimiento = inputNacimiento.value

    const tarjeta = document.createElement('div')
    tarjeta.classList.add('tarjeta')
    tarjeta.innerHTML = `
        <h2>${nombre} ${apellido}</h2>
        <p>Fecha de nacimiento: ${nacimiento}</p>
        <p>Edad: ${parseInt(2024 - nacimiento.split("-")[0])}</p>
    `
    cajahijueputa.appendChild(tarjeta)
    
})

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.cajahijueputa');

    function addCard(nombre, apellido, nacimiento) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <h3>${nombre} ${apellido}</h3>
            <p>Fecha de nacimiento: ${nacimiento}</p>
        `;
        container.appendChild(card);
    }
});
