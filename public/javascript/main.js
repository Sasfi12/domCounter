let result = document.querySelector("#result");
let options = document.querySelector("#options");

options.addEventListener("click", function(e) {
    switch (e.target.value) {
        case "+":
            result.textContent = parseInt(result.textContent) + 1
            break;
        case "-":
            result.textContent = parseInt(result.textContent) - 1
            break; 
        case "reset": 
            result.textContent = 0 ; 
            break; 
        default:
            console.log("HAHA ! you clicked on blanck !")
            break;
    }
    console.log(result.textContent <"0")
    if(result.textContent < "0") {
        result.classList.add("red") 
        result.classList.remove("green" , "black")
    }
    else if(result.textContent > "0") {
        result.classList.add("green")
        result.classList.remove("red" , "black")
    }
    else {
        result.classList.add("black")
        result.classList.remove("green" , "red")
    }
})
