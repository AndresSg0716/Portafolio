const todo = document.querySelector("#todos")
const btnSearch =  document.querySelector("#btnFetch")

const URL = "https://jsonplaceholder.typicode.com/photos"

const tarjetaData = (data) => {
    return `<div class='Tarjeta'>
                <h2>${data.albumId}</h2>
                <p>${data.id}</p>
                <p>${data.title}</p>
                <img src = "${data.url}">
    </div>`
}

async function fetchData(){
    const response = await fetch(URL)
    const data = await response.json()
    console.log(data)
    return data
}

    btnSearch.addEventListener("click", async () => {
        const data = await fetchData()
        const tarjeta = data.map((element) => tarjetaData(element)).join("")
        todo.innerHTML = tarjeta
    })