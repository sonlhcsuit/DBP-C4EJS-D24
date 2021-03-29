let btn = document.getElementById("btn")
let input = document.getElementById("user_id")
let output = document.getElementById('out')
const host = 'https://6061c450ac47190017a719f7.mockapi.io'
let endpoint = 'users'
btn.addEventListener("click", function(event) {
    let id = input.value
    console.log(input.value)
    makeRequest(host + '/' + endpoint + '/' + id + '/product')

})

async function makeRequest(url) {
    console.log('Make request')
    let response = await fetch(url)
    let data = await response.json()


    let out_str = []
    for(let i = 0;i<data.length;i++){
        out_str.push(data[i].name)
    }
    output.innerHTML = out_str.join('<br/>')
    
    //     // show ra man hinh
}