// console.log('Hello World')

// //  Branching - cấu trúc rẽ nhánh 

// // rẽ 1 nhánh, cấu trúc if

// // rẽ 2 nhánh, thì cấu trúc if else

// // rẽ n nhánh, kết hợp nhiều if-else, hoặc switch case

// let num = prompt("Enter a number!")

// switch (parseInt(num)) {
//     case 0:
//         console.log('Zero!!!!!!')
//         console.log('more zero')
//         break;
//     case 1:
//         console.log('One!!!!!!!')
//         break;

//     case 2:
//         console.log('Two!!!!!!!')
//         break;

//     case 3:
//         console.log('Three!!!!!')
//     case 4:
//     case 5:
//     case 6:
//     case 7:
//     case 8:
//         console.log('Greater than 3')
//         break
// }
function special2digit(number) {
    let unit = number % 10; // chữ số hàng đơn vị
    let ten = parseInt(number / 10)
    return unit + ten + ten * unit == number

    // if (unit + ten + ten*unit == number) {
    //     return true
    // }else{
    //     return false
    // }
}
// div chia lay du 

function narcissistic(number) {
    let unit = number % 10
    let hundred = parseInt(number / 100)
    let ten = parseInt((number - hundred * 100) / 10)

    return unit ** 3 + hundred ** 3 + ten ** 3 == number
}

function quadeq(a, b, c) {
    // ax^2 + bx + c = 0
    let delta = b ** 2 - 4 * a * c
    if (delta < 0) {
        return 'No solution'
    } else if (delta == 0) {
        let x = (-b) / (2 * a)
        return x
            // return (-b) / (2*a)
    } else if (delta > 0) {
        let x1 = (-b + delta ** (0.5)) / (2 * a)
        let x2 = (-b - delta ** (0.5)) / (2 * a)
        return x1 + ' and ' + x2
    }

}

function areaShape(base, height, shape) {

    if (shape == 'triangle') {
        return base * height * 0.5
    } else if (shape == 'parallelogram') {
        return base * height
    }

    // return base * height * (shape == 'triangle' ? 0.5 : 1)
}

function pH(phValue){
    if (phValue < 0 || phValue >14){
        return 'invalid'
    } else if (phValue >=0 && phValue <7){
        return 'acidic'
    } else if (phValue >7 && phValue <=14){
        return 'alkaline'
    } else return 'neutral'
}
