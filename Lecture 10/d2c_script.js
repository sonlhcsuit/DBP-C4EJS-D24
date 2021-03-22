

function dollar2cent(usd){
    // usd in float
    usd = parseFloat(usd.toFixed(2))
    // Nhân lên cho 100 => thành số nguyên => máy tính 
    // dễ tính hơn

    usd = Math.floor(usd*100)
    // Mệnh giá mỗi loại
    let coins = {
        quarter:25,
        dime: 10,
        nickel:5,
        penny:1
    }
    // Sau khi đổi tiền thì mỗi loại bao nhiêu đồng
    let result ={
        quarter:0,
        dime: 0,
        nickel:0,
        penny:0
    }
    for(let coin in coins){
        result[coin] = parseInt(usd/coins[coin])
        usd = usd%coins[coin]
    }
    return `${result.quarter} quarter, ${result.dime} dime, ${result.nickel} nickel, ${result.penny} penny!`
 }
let inputElement =  document.getElementById("input")
let resultElement = document.getElementById("result")

inputElement.addEventListener("input",(ev)=>{
    let resultText = dollar2cent(parseFloat(ev.target.value))
    resultElement.innerHTML = resultText
})


