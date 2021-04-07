// Bài 2 
function add(x) {
    // khai báo thêm 1 function ở đây nữa 
    function add_(y) {
        return x + y
    }
    // trả về function add_
    return add_
}

add(2) // thứ bạn nhận được là 1 hàm
add(2)(3) // gọi hàm bạn nhận được 


// Bài 1 
function isPrime(x) {
    // Kiểm tra xem thử 1 số có phải là số nguyên tố
    if (x <= 1) return false
    if (x == 2 || x == 3 || x == 5 || x == 7) return true
    for (let i = 2; i <= Math.sqrt(x); i++) {
        if (x % i == 0) return false
    }
    return true
}

function factorial(x) {
    // phân tách thừa số nguyên tố
    if (isPrime(x)) return [x]
    let primes = []
        // tính các số nguyên tố nhỏ hơn số x
    for (let i = 2; i < x; i++) {
        if (isPrime(i)) {
            primes.push(i)
        }
    }
    let factors = []
    for (let i = 0; x != 1;) {
        if (i > factors.length) break
        if (x % primes[i] == 0) {
            x = x / primes[i]
            factors.push(primes[i])
        } else {
            i++;
        }
    }
    return factors
}
// 
function isToN(x) {
    // to n nghĩa là mũ n
    // học toán bằng tiếng anh thì x^2 ; x square
    // x^n : x to n
    // đây chỉ là cách đọc, doesnt matter
    let factors = factorial(x)
    return ((new Set(factors)).size == 1 ? true : false)
}
function filterNumber(array){
    let result = []
    for(let i =0;i<array.length;i++){
        if (isToN(array[i])) result.push(array[i])
    }
    return result
}

console.log(filterNumber([16,32,72,96]))