let inp = document.getElementById('inp')
let out = document.getElementById('out')

inp.addEventListener('input', function(event) {
    out.value = decimal2roman(inp.value)
    
})

function decimal2roman(inputStr) {
    let units = ['' ,'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX']
    let tens = [ '','X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC']
    let hundreds = ['','C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM']
    let thousands = ['','M', 'MM', 'MMM']
    let result = ''
    let arrs = []
    // trick
    switch (inputStr.length) {
        case 4:
            arrs.push(thousands)
        case 3:
            arrs.push(hundreds)
        case 2:
            arrs.push(tens)
        case 1:
            arrs.push(units)
    }
    for (let i = 0; i < inputStr.length; i++) {
        result = result + arrs[i][inputStr[i]]
    }
    console.log(result)
}