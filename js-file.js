


/*let buttonBox = document.querySelector(".buttonBox")
//buttonBox.appendChild(newButtons)

let allOperationString = ["÷","CE",")","(","√x","×",9,8,7,"xʸ","-",6,5,4,"10ʸ","+",3,2,1,"log", "=",".",0,"+/-","ln"]
let allClasses = ["÷","CE","rightBraket","leftBracket","Radical","×","nine","eight","seven","power","-","six",
"five","four","tenPower","+","three","two","one","log", "=","point","zero","changeSign","ln"]

   
let operationsPlus = [];
let operationsPlusIndex = [];

let counter = ((allOperationString.length) - 1);
for (let ver = 0 ; ver < 5; ver++){
    let newDiv = document.createElement("div")

    for (let hori = 0; hori < 5; hori++){  
        let newButtons = document.createElement('button')
        newButtons.classList.add("numberButton")
        newButtons.innerText = allOperationString[counter]
        if (["+","-","÷","×", "="].includes(allOperationString[counter])){
            switch (allOperationString[counter]){
                case "+":
                    newButtons.classList.add("plus")
                    break
                case "-":
                    newButtons.classList.add("minus")
                    break
                case "÷":
                    newButtons.classList.add("of")
                    break
                case "×":
                    newButtons.classList.add("multiply")
                    break
                case "=":
                    newButtons.classList.add("equals")
                    break
                default:
                    break

            }
            
        }
        else {
            newButtons.classList.add(allClasses[counter])
        }
        
        
        counter--
        newDiv.appendChild(newButtons)
    }
    buttonBox.appendChild(newDiv)
}



let innerDisplay1 = document.querySelector(".innerwords")
let innerDisplay2 = document.querySelector(".innerDisplay2")

let firstString = innerDisplay1.textContent
let secondString = innerDisplay2.textContent
let switchh = false;
function clear(){
    firstString = ""
    secondString = "0"
    innerDisplay1.textContent = firstString
    innerDisplay2.textContent = secondString
    operationsPlus = []
    operationsPlusIndex = []
}
function replaceAt(string, index, replacement) {
    return string.substr(0, index) + replacement + string.substr(index + replacement.length);
}
let ce = document.querySelector(".CE")
ce.addEventListener('click',clear)

let arr = ["+","-","÷","×","="] 
let arrNumber = [0,1,2,3,4,5,6,7,8,9] 
let classArray = ["zero","one","two","three","four","five","six","seven","eight","nine"]
arr.forEach(function (item){
    let core = ""
    switch (item){
        case "+":
            core = "plus"
            break
        case "-":
            core = "minus"
            break
        case "÷":
            core = "of"
            break
        case "×":
            core = "multiply"
            break
        case "=":
            core = "equals"
            break
        case 4:
            core = "four"
        default:
            break

    }
    core = "." + core;
    let operators = document.querySelector(core)

    //=====

    operators.addEventListener("mouseenter", () => {
        operators.classList.add("hoverStyle")
    })

    operators.addEventListener("mouseleave", () => {
        operators.classList.remove("hoverStyle")
    })
    
    operators.addEventListener("mousedown", () => {
        operators.classList.add("clickStyle")
    })
    operators.addEventListener("mouseup", () => {
        operators.classList.remove("clickStyle")
    })
    operators.addEventListener('click',() => {
    
    if (firstString[((firstString.length) - 2)] != "="){
        if (firstString.length == 0){
            console.log(firstString) 
            firstString += "0 " 
            firstString += operators.textContent
            firstString += " "
        }
        else if (   ["+","-","÷","×"].includes(firstString[((firstString.length) - 2)])){
            operationsPlus.pop()
            operationsPlusIndex.pop()
            operationsPlus.push(operators.textContent)
            operationsPlusIndex.push((firstString.length) - 2)
            console.log("Here is to find the left side")
            console.log(firstString.textContent)
            if(   ["+","-","÷","×","="].includes(operators.textContent)) {
                
                if (firstString[((firstString.length) - 2)] != operators.textContent) {

                    //firstString = replaceAt(firstString, ((firstString.length) - 2),(" "));
                    firstString = replaceAt(firstString, ((firstString.length) - 2),(operators.textContent));
                    
                        
                        
                        
                    }
            } 
            
        }
        else if (   ["="].includes(firstString[((firstString.length) - 2)])){
            switchh == true

        }
        else {

            firstString += operators.textContent
            firstString += " "
            console.log("Here is to find if the click is an operation")
            tempNumberr = leftNumber;
            leftNumber = tempNumberr
            tempNumberr = 0
            operationsPlus.push((firstString.substring(((firstString.length - 2)),(firstString.length - 1))))
            operationsPlusIndex.push((firstString.length) - 2)
            console.log(operationsPlus)
            console.log(operationsPlusIndex)
            if (operationsPlus.length == 2){
                console.log("This is the right")
                console.log(operationsPlusIndex[((operationsPlusIndex.length) - 2)])

                let g = (((operationsPlusIndex[((operationsPlusIndex.length) - 2)])) + 2)
                rightNumber = parseInt(firstString.substring(g,(firstString.length - 3)))
                //leftNumber = rightNumber
                
                console.log(operationsPlus[0])
                
                leftNumber = operate(leftNumber,operationsPlus[0], rightNumber)
                if (leftNumber == Infinity){
                    leftNumber = "Wrong Input"
                }
                console.log(rightNumber)
                console.log(leftNumber)
                operationsPlus.shift()
                operationsPlusIndex.shift()
                console.log(operationsPlus)
                console.log(operationsPlusIndex)
                secondString = leftNumber
                innerDisplay2.textContent = secondString

            }
            else {
                console.log("check operationplus == 1, and check firststring")
                console.log(firstString)
                leftNumber = parseInt(firstString.substring(0, (operationsPlusIndex[0] - 1)))
                secondString = leftNumber
                innerDisplay2.textContent = secondString

            }   
            tempNumberr =  parseInt(firstString.substring(0,(firstString.length - 1)));
        }
    }
    
    innerDisplay1.textContent = firstString
})
})


 

classArray.forEach(function (item){

    let operand = document.querySelector("." + item)
    operand.addEventListener("mousedown", () => {
        operand.classList.add("clickStyle")
    })
    operand.addEventListener("mouseup", () => {
        operand.classList.remove("clickStyle")

    })

    operand.addEventListener("mouseenter", () => {
        operand.classList.add("hoverStyle")
    })

    operand.addEventListener("mouseleave", () => {
        operand.classList.remove("hoverStyle")
    })
    operand.addEventListener('click',() => {
        console.log("item")
        
        
        
        if(firstString.length == 0){
            firstString += operand.textContent 
            firstString += " "
            
        }
        else if (   ["="].includes(firstString[((firstString.length) - 2)])){
            switchh == true
        }   
        else{

            console.log("here")
            if (arr.includes(operand.textContent)){
                leftNumber = parseInt(firstString.substring(0,(firstString.length - 1)))
                
                console.log(leftNumber)
            }
            
            if ((arrNumber.includes(parseInt(operand.textContent))) && (arrNumber.includes(parseInt(firstString[firstString.length - 2] )))){
                
                firstString = firstString.substring(0,(firstString.length - 1))
                console.log(firstString)
                firstString += operand.textContent
                firstString += " "
            }
            else{
                firstString += operand.textContent
                firstString += " "
            }
            
            
        }
        console.log(firstString)
        innerDisplay1.textContent = firstString
        
    })
})



let oper = document.querySelector(".ln")

oper.classList.add("clickStyle")

*/