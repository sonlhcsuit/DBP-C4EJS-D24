function lastDig(a,b,c){
    let last_a = a%10
    let last_b = b%10
    let last_c = c%10
    return (last_a*last_b)%10 == last_c
}

// let result = lastDig(12,12,24)
// console.log(result)
// lastDig(1,2,4,)
// invoke, call a function

function isPlural(word){
    return word[word.length - 1] == 's'
}
// console.log(isPlural('changes'))
function factorial(n){
    // tinh n giai thua
    let product = 1
    for(let i = 1;i<=n;i++){
        product = product*i
    }
    return product
}

function factorialDivisible(n){
    // return (factorial(n-1) + 1) % n == 0
    let result = factorial(n-1)+1
    return result % n == 0
}
// console.log(factorialDivisible(3))

function automorphic(number){
    let square = number ** 2
    let n = number.toString()
    n = n.length
    // // console.log(n)
    // // console.log(number)
    // let result = true
    // square = square - number
    // // 5776 -76 = 5700
    // for (let i =0;i<n;i++){
    //     let remainder = square%10
    //     if (remainder != 0 ) {
    //         result = false
    //     }
    // }
    // return result

    // Cach giai dung so sanh chuoi va cac ham built-in
    square = square.toString()
    return square.slice(square.length - 1 - n,square.length ) == number.toString()
    
}

// automorphic(76)

// Lam quen voi ascii khi xu ly chuoi
// let res = 'abcd'.charCodeAt(0)
// console.log(res)

// let a = [97,98,99,100]
// let str = ''
// for (let i=0;i<a.length;i++){
//     let char = String.fromCharCode(a[i])
//     console.log(char)
//     str = str+ char
// }

// console.log(str)

function reverseCase(str){
    let res = ''
    let upper = str.toUpperCase()
    for(let i = 0;i<str.length;i++){
        // let code = str.charCodeAt(i)
        // if (code >=65 && code<=90) {
        //     code = code + 32
        // } else if (code >=97 && code <=122){
        // code = code - 32
            
        // }
        // res = res + String.fromCharCode(code)

        // Cach cua toan

        if (upper[i]==str[i]){
            res = res + str[i].toLowerCase()
        } else {
            res = res + str[i].toUpperCase()

        }

    }
    return res
}
// console.log(reverseCase('MindX !!!!!a'))

function findMaxConsecutiveOnes(array){
    let max_length = 0
    let tempotary_length = 0
    for (let i =0 ;i<array.length ;i++){
        console.log(array[i])
        if (array[i]== 1 ){
            tempotary_length = tempotary_length + 1
            console.log('i th loop: ',tempotary_length)
        } else {
            tempotary_length = 0
            console.log('i th loop: ',tempotary_length)

        }
        if (max_length < tempotary_length){
            max_length = tempotary_length

        }
        console.log('i th loop, max_length: ',max_length)

    
    }
}

findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])