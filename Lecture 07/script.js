function rightAngledTriangle(number) {
    let chars = ""
    for (let i = 0; i < number; i = i + 1) {
        chars = chars + "#"
        console.log(chars)
    }
}

function leftAngledTriangle(number) {
    let chars = "#"

    for (let i = 0; i < number; i = i + 1) { // từng hàng 
        // dành cho các khoảng trắng 
        let spaces = ""
        for (let j = 0; j < number - 1 - i; j = j + 1) {
            spaces = spaces + " "
        }
        console.log(spaces + chars)
        chars = chars + '#'
    }

}

function isoscelesTriangle(number) {
    let chars = "#"

    for (let i = 0; i < number; i = i + 1) { // từng hàng 
        // dành cho các khoảng trắng 
        let spaces = ""
        for (let j = 0; j < number - 1 - i; j = j + 1) {
            spaces = spaces + " "
        }
        console.log(spaces + chars)
        chars = chars + '##'
    }

}

function FizzBuzz(number) {
    for (let i = 1; i < number + 1; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log('FizzBuzz')
        } else if (i % 5 == 0) {
            console.log('Buzz')
        } else if (i % 3 == 0) {
            console.log('Fizz')
        } else {
            console.log(i)
        }
    }
}

function firstVowel(string) {
    let answer = -1
    for (let i = 0; i < string.length; i = i + 1) {
        if (string[i]=='a' || string[i]=='A' ||
            string[i]=='u' || string[i]=='U' ||
            string[i]=='i' || string[i]=='I' ||
            string[i]=='e' || string[i]=='E' ||
            string[i]=='o' || string[i]=='O'
        ){
            answer = i
            break;
        }
    }
    return answer
}
// rightAngledTriangle(4)
// leftAngledTriangle(4)
// isoscelesTriangle(4)
// FizzBuzz(31)
let anw = firstVowel('qwytytytwqyi')
console.log(anw)