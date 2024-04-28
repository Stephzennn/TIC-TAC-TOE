


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
/*
let ar1 = [0,1,2,3,4,5,6,7,8,9]
let ar2 = [0,1,2,3,4,5,6,7,8,9]






let g = Functions.findCoordinate(3,8)
console.log(g.g)



player1 = player("Joah", "o")

player1.setName("katrina")
console.log(player1.name)
player2 = player("Barbra", "x")
console.log(player2.name)

newGame = Game(player1, player2, 1)

newGame.move(4, player1)

newGame.move(0, player1)
newGame.move(8, player1)




console.log(newGame.getArray())
console.log(newGame.checkWin())


*/
//=================================================================================================================



function generalFunctions () {
    return {
        findCoordinate:
        function (initialNumber, index) {
            let f = index  % initialNumber
            let g = (index - f) / initialNumber ;
            return {f, g};
        }
        ,
        findNumber:
        function (initialNumber,x,y){
            return ((initialNumber * y ) + x);
        }
        
    };
}
let Functions = generalFunctions();


function player (name, sign) {
    
    return {
        name: name,
        sign: sign,
        setName: function (newName) {
            this.name = newName
        },
        setSign: function (newSign) {
            this.sign =  newSign
        }
    };
}



function Game ( round) {
    let gameArray = Array()
    for(let x =0; x <9; x++){
        gameArray.push(x)
    }
    this.round = round;

    function check(number) {
        let changedNumber = Functions.findCoordinate(3, number)
        console.log(changedNumber)
        //Add diagonals 
        if((number === 0) || (number === 2)){
            let diagonal0 = Functions.findNumber(3,(changedNumber.f + 1),(changedNumber.f + 1))
            let diagonal01 = Functions.findNumber(3,(changedNumber.f + 2),(changedNumber.f + 2))
            if ((gameArray[diagonal0] === gameArray[number]) && (gameArray[number] === gameArray[diagonal01])){
                console.log(gameArray[diagonal0])
                console.log(gameArray[number])
                console.log(gameArray[diagonal01])
                console.log(gameArray[diagonal0],gameArray[number],gameArray[diagonal01])
                return true
            }

            let diagonal2 = Functions.findNumber(3,(changedNumber.f - 1),(changedNumber.f + 1))
            let diagonal21 = Functions.findNumber(3,(changedNumber.f - 2),(changedNumber.f + 2))
            if ((gameArray[diagonal2] === gameArray[number]) && (gameArray[number] === gameArray[diagonal21])){
                console.log(gameArray[diagonal2])
                console.log(gameArray[number])
                console.log(gameArray[diagonal21])
                console.log(gameArray[diagonal2],gameArray[number],gameArray[diagonal21])
                return true
            }
        }


        //left  
        let left = Functions.findNumber(3,(changedNumber.f - 1),(changedNumber.g))
        let left1 = Functions.findNumber(3,(changedNumber.f - 2),(changedNumber.g))
        if(((left >= 0)  && (left <= 8))  && ((left1 >= 0)  && (left1 <= 8)) ) {
            
            if ((gameArray[left] === gameArray[number]) && (gameArray[number] === gameArray[left1])){
                console.log(gameArray[left])
                console.log(gameArray[number])
                console.log(gameArray[left1])
                console.log(gameArray[left],gameArray[number],gameArray[left1])
                return true
            }
        }

        
        //right
        let right = Functions.findNumber(3,(changedNumber.f + 1),(changedNumber.g))
        let right1 = Functions.findNumber(3,(changedNumber.f + 2),(changedNumber.g))
        if(((right >= 0)  && (right <= 8))  && ((right1 >= 0)  && (right1 <= 8)) ) {
            if ((gameArray[right] === gameArray[number]) && (gameArray[number] === gameArray[right1])){
                console.log(gameArray[right])
                console.log(gameArray[number])
                console.log(gameArray[right1])
                return true
            }
        }
        
        //down
        let down = Functions.findNumber(3,(changedNumber.f ),(changedNumber.g - 1))
        let down1 = Functions.findNumber(3,(changedNumber.f),(changedNumber.g - 2))
        
        if(((down >= 0)  && (down <= 8))  && ((down1 >= 0)  && (down1 <= 8)) ) {
            if ((gameArray[down] === gameArray[number]) && (gameArray[number] === gameArray[down1])){
                console.log(gameArray[down])
                console.log(gameArray[number])
                console.log(gameArray[down1])
                return true
            }
        }
        //up
        let up = Functions.findNumber(3,(changedNumber.f ),(changedNumber.g + 1))
        let up1 = Functions.findNumber(3,(changedNumber.f),(changedNumber.g + 2))
        if(((up >= 0)  && (up <= 8))  && ((up1 >= 0)  && (up1 <= 8)) ) {
            if ((gameArray[up] === gameArray[number]) && (gameArray[number] === gameArray[up1])){
                console.log(gameArray[up])
                console.log(gameArray[number])
                console.log(gameArray[up1])
                return true
            }
        }

        return false
    }
    return {
        move: function (number, player){
            let h = gameArray[number]
            if(typeof h ==  "string"){

            }
            else {
                gameArray[number] = player.sign
            }
            
        }
        ,
        checkWin: function () {
            let g;
            for(let f = 0; f < gameArray.length ; f++){
                
                g = check(f)
                if(g == true){
                    return true
                }
            }
            return false;
        },

        getArray: function() {
            return gameArray;
        }
        
    }
    
    

}


function PCplayer(){
    let pcplayer = player("PC", "o")
    
    return {
        pcplayer:pcplayer,
        move: function(Game) {
            let randomNum = Math.floor(Math.random() * 9);
            let arr = Game.getArray();
            while((typeof arr[randomNum])==="string"){
                randomNum = Math.floor(Math.random() * 9);
            }
            return randomNum
        }
    }
}

pcplayer = PCplayer()
newgame = Game(1)

console.log(pcplayer.move(newgame))
newgame.move(pcplayer.move(newgame),pcplayer.pcplayer)
newgame.move(pcplayer.move(newgame),pcplayer.pcplayer)
newgame.move(pcplayer.move(newgame),pcplayer.pcplayer)
newgame.move(pcplayer.move(newgame),pcplayer.pcplayer)
newgame.move(pcplayer.move(newgame),pcplayer.pcplayer)
newgame.move(pcplayer.move(newgame),pcplayer.pcplayer)
console.log(newgame.getArray())


