let btn = document.getElementById("btn")
let input = document.getElementById("user_id")
let output = document.getElementById('out')
const host = 'https://pokeapi.co/api/v2'
let endpoint = 'pokemon'
btn.addEventListener("click", async function(event) {
    let pokemon_name = input.value
    let img_src = await makeRequest(`${host}/${endpoint}/${pokemon_name}`)
    output.insertAdjacentHTML("beforeend", createPokemon(pokemon_name, img_src))

})

async function makeRequest(url) {
    let response = await fetch(url)
    let data = await response.json()
    let img_src = data.sprites.other["official-artwork"].front_default
    return img_src
}

function createPokemon(name, img) {
    return `
        <div>
            <h1>Pokemon: ${name.toUpperCase()}</h1>
            <img class="small" src="${img}"/>
        </div>
    `
}