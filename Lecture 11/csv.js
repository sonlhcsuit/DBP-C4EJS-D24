let csvBtn = document.getElementById('tocsv')
let jsonBtn = document.getElementById('tojson')
let inp = document.getElementById('inp')
let out = document.getElementById('out')

jsonBtn.addEventListener("click",function (){
    // copy data
    out.value = csv2json(inp.value)
    
})
csvBtn.addEventListener("click",function (){
    // copy data
    // out.value = json2csv(inp.value)
    out.value = [{name:1},{role:2},{}]
    
})

function csv2json(inputStr){
    let lines = inputStr.split('\n')
    let keys = lines[0].split(',')

    lines.shift()
    let result = []
    // voi moi hang
    for(let i =0;i<lines.length;i++){
        let data = {}
        let values = lines[i].split(',')
        for (let j = 0;j<keys.length;j++){
            data[keys[j]]=values[j]
        }
        // tao ra object voi cac key tuong ung
        result.push(data)
    }
   
    result = JSON.stringify(result)

    return result
}
function json2csv(inputStr){
    console.log(inputStr)
    let data = JSON.parse(inputStr)
    console.log(data)
}

// name,role
// son,ta
// quang,l