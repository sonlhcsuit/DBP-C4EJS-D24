let result_box = document.getElementById('result')
let inp = document.getElementById('text')
let btn = document.getElementById('btn')
const apiKey = 'f0aa160b7976192a9b0fa68a380eacbf'
const host = 'http://api.openweathermap.org/data/2.5/weather'

btn.addEventListener("click", async function(event) {
    let city = inp.value
    let component = await makeRequest(`${host}?q=${city}&appid=${apiKey}`)
    result_box.insertAdjacentHTML("beforeend", component)
})

document.addEventListener("keydown", async function(event) {
    if (event.key == 'Enter') {
        event.preventDefault()
        let city = inp.value
        let component = await makeRequest(`${host}?q=${city}&appid=${apiKey}`)
        result_box.insertAdjacentHTML("beforeend", component)

    }
})

async function makeRequest(url) {
    let data = await (await fetch(url)).json()
    console.log(data)
    let cityname = data.name
    let country = data.sys.country
    let temperature = Math.floor(data.main.temp - 272)
    let shortDescription = data.weather[0].description
    let icon = data.weather[0].icon

    return create_result_box(cityname, country, temperature, shortDescription, icon)
}

function create_result_box(cityname, country, temperature, shortDescription, icon) {
    return `
    <div class="forecast__city border">
        <div class="forecast__city__header">
            <h1 class="forecast__city__header__cityname">
                ${cityname}
            </h1>
            <p class="forecast__city__header__country ">
                ${country}
            </p>
        </div>
        <div class="forecast__city__body ">
            <div class="forecast__city__body__temperature ">
                <h1>${temperature}</h1>
            </div>
            <div class="forecast__city__body__icon">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${icon}.svg" alt="icon"/>
            </div>
            <div class="forecast__city__body__short-description ">
                <h1>${shortDescription}</h1>
            </div>
        </div>
    </div>
    `
}

document.getElementById('ckb').addEventListener("click",function (e){
    e.preventDefault()
    console.log(`check box toggle ${e.target.checked}`)
})