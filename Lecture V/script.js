// Khai báo 1 hàm
function radiansToDegrees(SomeNumber){
    // Thực hiện việc tính toán chuyển 
    // đổi từ radian sang độ ở đây
    let result = SomeNumber*57.2958
    return result
}
let answer = radiansToDegrees(2)
console.log(answer)
answer = radiansToDegrees(10)
console.log(answer)
console.clear()

function celsiusToFahrenheit(C_number){
    let result = C_number *9/5 + 32
    return result
}
console.log(celsiusToFahrenheit(10))
function PoundToKilogram(pound){
    let result = pound * 0.453592
    return result
}
console.log(PoundToKilogram(80))

function matchHouses(nHouse){
    // 1 house => 6 matches
    // 2 house => 11 matches
    // 3 hoyse => 16 matches
    let result = nHouse*5 + 1
    return result
}
console.log(matchHouses(87))

function sumOfCubes(a,b,c){
    let result = a**3 + b**3 + c**3
    return result
}
console.log(sumOfCubes(1,5,9))

function isTriplet(a,b,c){
    let max_num = Math.max(a,b,c)
    let min_num = Math.min(a,b,c)
    let mid_num = a + b + c - max_num - min_num
    result = max_num**2 == min_num**2 + mid_num**2
    return result
}

console.log(isTriplet(3,4,5))

function max(a,b){
    // Không so sánh, làm trả về số lớn hơn
    
}