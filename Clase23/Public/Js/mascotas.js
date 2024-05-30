const formulario = document.querySelector('.formMascotas')
const inputNombreM = document.querySelector('#inputNombreM')
const inputTipo = document.querySelector('#inputTipo')
const btnSubmit = document.querySelector('#submit')

const cajahijueputa = document.querySelector('.cajahijueputa')

formulario.addEventListener('submit', (event) => {
    event.preventDefault()
console.log(inputNombreM, inputTipo, btnSubmit, cajahijueputa)

    const nombre = inputNombreM.value
    const tipo = inputTipo.value

    const tarjeta = document.createElement('div')
    tarjeta.classList.add('tarjeta')
    tarjeta.innerHTML = `
        <h2>${nombre}</h2>
        <p>Tipo: ${tipo}</p>
    `
    cajahijueputa.appendChild(tarjeta)
    
})

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.cajahijueputa');

    function addCard(nombre, tipo) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <h3>${nombre}</h3>
            <p>Tipo: ${tipo}</p>
        `;
        container.appendChild(card);
    }
});