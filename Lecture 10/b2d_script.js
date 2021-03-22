
// Chọn element
let input_element = document.getElementById("text")
let result_element = document.getElementById("result")

input_element.addEventListener("input", (ee)=>{

    let user_input = ee.target.value 
    if (  !isNaN(parseInt(user_input,2))  ){
        result_element.innerHTML = parseInt(user_input,2)
    } else{
        result_element.innerHTML = "where magic happens"
    }
    console.log(parseInt(user_input,2))
})