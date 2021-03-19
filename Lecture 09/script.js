function removeDollarSign(text) {
    let str = ""
    for (let i = 0; i < text.length; i++) {
        if (text[i] != '$') {
            str = str + text[i]
        }

    }
    return str
}

function binaryToDecimal(bin_str) {
    let num = 0
    for (let i = 0; i < bin_str.length; i++) {
        if (bin_str[i] == "1") {
            num = num + 2 ** (bin_str.length - 1 - i)
        }
    }
    return num
}

function binaryAgent(str) {
    let message = ""
    let chars = str.split(" ")
    for (let i = 0; i < chars.length; i++) {
        // message = message + String.fromCharCode(binaryToDecimal(chars[i]))
        message = message + String.fromCharCode(parseInt(chars, 2))
    }
    return message;
}

let str = binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
console.log(str)

function isPrime(number) {
    if (number == 2 || number == 3 || number == 5) return true
        // Kiem tra phai so chan hay ko
    if (number % 2 == 0) {
        return false
    }
    // Kiem tra xem tu 3 cho toi n co so nao chia het cho n khong?
    for (let i = 3; i < number / 2; i++) {
        if (number % i == 0) return false
    }

    return true
}

// function semiPrime(number){
//     let primes = []
//     for(let i = 2;i<=number**0.5;i++){
//         if (isPrime(i)) primes.push(i)

//     }
//     for (let i =0;i<primes.length;i++){
//         if(number % primes[i]==0){
//             if ( isPrime(parseInt(number/primes[i])) ){
//                 if(primes[i] == parseInt(number/primes[i])) {
//                     return 'Semiprime'
//                 }else{
//                     return 'Squarefree Semiprime'
//                 }

//             }
//         }
//     }
//     return 'Neither'
// }

function semiPrime(number) {
    let primes = []
    for (let i = 2; i <= number ** 0.5; i++) {
        if (isPrime(i)) primes.push(i)
    }
    for (let i = 0; i < primes.length; i++) {
        if (number % primes[i] == 0 && isPrime(parseInt(number / primes[i]))) {

            if (primes[i] == parseInt(number / primes[i])) {
                return 'Semiprime'
            } else {
                return 'Squarefree Semiprime'
            }


        }
    }
    return 'Neither'
}

// semiPrime = '?'
// console.log(semiPrime)
// semiPrime(100)
// identitier

// an - ngu
// day - di lam


function eat(cuisine, cb, ...cbparams) {

    console.log(`I am eating ${cuisine}`)
    for (let i = 0; i < 10; i++) {
        cb(...cbparams)
        console.log('')
    }
}

function sleep(time) {
    console.log(`I must go to bed at ${time}`)
}

// eat('Com ga', sleep, '22h00')
function sayHi (){
    console.log('Hello')
}
function sayHi2 (){
    console.log('Xin Chao')
}
document.getElementById("btn").addEventListener("click",sayHi2)

document.getElementById("btn").addEventListener("click",sayHi)
