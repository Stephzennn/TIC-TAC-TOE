


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


function player (name, sign, color) {
    
    return {
        name: name,
        sign: sign,
        color: color,
        setName: function (newName) {
            this.name = newName
        },
        setSign: function (newSign) {
            this.sign =  newSign
        },
        setColor: function (newColor) {
            this.color =  newColor
        }
    };
}



function Game ( round) {
    let gameArray = Array()
    let finalNumber = ""
    for(let x =0; x <9; x++){
        gameArray.push(x)
    }
    this.round = round;

    function checkNumber(number) {
        let changedNumber = Functions.findCoordinate(3, number)
        console.log(changedNumber)
        //Add diagonals 
        if((number === 0) || (number === 2)){
            numberString = "";
            let diagonal0 = Functions.findNumber(3,(changedNumber.f + 1),(changedNumber.g + 1))
            let diagonal01 = Functions.findNumber(3,(changedNumber.f + 2),(changedNumber.g + 2))
            if ((gameArray[diagonal0] === gameArray[number]) && (gameArray[number] === gameArray[diagonal01])){
                numbers = ([diagonal0, number , diagonal01]).sort()
                
                for(let x = 0; x < numbers.length; x++){
                    numberString = numberString + numbers[x];
                }
                return numberString
            }
            if (number == 2){
                let diagonal2 = Functions.findNumber(3,(changedNumber.f - 1),(changedNumber.g + 1))
            let diagonal21 = Functions.findNumber(3,(changedNumber.f - 2),(changedNumber.g + 2))
            if ((gameArray[diagonal2] === gameArray[number]) && (gameArray[number] === gameArray[diagonal21])){
                numbers = ([diagonal2, number , diagonal21]).sort()
                
                for(let x = 0; x < numbers.length; x++){
                    numberString = numberString + numbers[x];
                }
                return numberString
            }
            }
            
    
        }
    
    
        //left  
        let left = Functions.findNumber(3,(changedNumber.f - 1),(changedNumber.g))
        let left1 = Functions.findNumber(3,(changedNumber.f - 2),(changedNumber.g))
        if(((left >= 0)  && (left <= 8))  && ((left1 >= 0)  && (left1 <= 8)) ) {
            
            if ((gameArray[left] === gameArray[number]) && (gameArray[number] === gameArray[left1])){
                numbers = ([left, number , left1]).sort()
                
                for(let x = 0; x < numbers.length; x++){
                    numberString = numberString + numbers[x];
                }
                return numberString
            }
        }
    
        
        //right
        let right = Functions.findNumber(3,(changedNumber.f + 1),(changedNumber.g))
        let right1 = Functions.findNumber(3,(changedNumber.f + 2),(changedNumber.g))
        if(((right >= 0)  && (right <= 8))  && ((right1 >= 0)  && (right1 <= 8)) ) {
            if ((gameArray[right] === gameArray[number]) && (gameArray[number] === gameArray[right1])){
                numbers = ([right, number , right1]).sort()
                
                for(let x = 0; x < numbers.length; x++){
                    numberString = numberString + numbers[x];
                }
                return numberString
            }
        }
        
        //down
        let down = Functions.findNumber(3,(changedNumber.f ),(changedNumber.g - 1))
        let down1 = Functions.findNumber(3,(changedNumber.f),(changedNumber.g - 2))
        
        if(((down >= 0)  && (down <= 8))  && ((down1 >= 0)  && (down1 <= 8)) ) {
            if ((gameArray[down] === gameArray[number]) && (gameArray[number] === gameArray[down1])){
                
                numbers = ([down, number , down1]).sort()
                
                for(let x = 0; x < numbers.length; x++){
                    numberString = numberString + numbers[x];
                }
                return numberString
            }
        }
        //up
        let up = Functions.findNumber(3,(changedNumber.f ),(changedNumber.g + 1))
        let up1 = Functions.findNumber(3,(changedNumber.f),(changedNumber.g + 2))
        if(((up >= 0)  && (up <= 8))  && ((up1 >= 0)  && (up1 <= 8)) ) {
            if ((gameArray[up] === gameArray[number]) && (gameArray[number] === gameArray[up1])){
                numbers = ([up, number , up1]).sort()
                
                for(let x = 0; x < numbers.length; x++){
                    numberString = numberString + numbers[x];
                }
                return numberString
                
            }
        }
    
        return numberString
    }
    function check(number) {
        let changedNumber = Functions.findCoordinate(3, number)
        console.log("Here is the changed number",changedNumber)
        //Add diagonals 
        if((number === 0) || (number === 2)){
            numberString = "";
            let diagonal0 = Functions.findNumber(3,(changedNumber.f + 1),(changedNumber.g + 1))
            let diagonal01 = Functions.findNumber(3,(changedNumber.f + 2),(changedNumber.g + 2))
            if ((gameArray[diagonal0] === gameArray[number]) && (gameArray[number] === gameArray[diagonal01])){
                numbers = ([diagonal0, number , diagonal01]).sort()
                
                for(let x = 0; x < numbers.length; x++){
                    numberString = numberString + p[x];
                }
                return true
            }

            if(number == 2) {

                console.log(changedNumber)
                console.log(changedNumber.f - 1)
                console.log(changedNumber.f + 1)

                let diagonal2 = Functions.findNumber(3,(changedNumber.f - 1),(changedNumber.g + 1))
                let diagonal21 = Functions.findNumber(3,(changedNumber.f - 2),(changedNumber.g + 2))
                console.log("Diagonals")
                console.log(diagonal2, diagonal21)
                if(((diagonal2 >= 0)  && (diagonal2 <= 8))  && ((diagonal21 >= 0)  && (diagonal21 <= 8)) ) {
                    if ((gameArray[diagonal2] === gameArray[number]) && (gameArray[number] === gameArray[diagonal21])){
                    
                        return true
                    }
                }
            }
            
            

        }


        //left  
        let left = Functions.findNumber(3,(changedNumber.f - 1),(changedNumber.g))
        let left1 = Functions.findNumber(3,(changedNumber.f - 2),(changedNumber.g))
        if(((left >= 0)  && (left <= 8))  && ((left1 >= 0)  && (left1 <= 8)) ) {
            
            if ((gameArray[left] === gameArray[number]) && (gameArray[number] === gameArray[left1])){
                
                return true
            }
        }

        
        //right
        let right = Functions.findNumber(3,(changedNumber.f + 1),(changedNumber.g))
        let right1 = Functions.findNumber(3,(changedNumber.f + 2),(changedNumber.g))
        if(((right >= 0)  && (right <= 8))  && ((right1 >= 0)  && (right1 <= 8)) ) {
            if ((gameArray[right] === gameArray[number]) && (gameArray[number] === gameArray[right1])){
                
                return true
            }
        }
        
        //down
        let down = Functions.findNumber(3,(changedNumber.f ),(changedNumber.g - 1))
        let down1 = Functions.findNumber(3,(changedNumber.f),(changedNumber.g - 2))
        
        if(((down >= 0)  && (down <= 8))  && ((down1 >= 0)  && (down1 <= 8)) ) {
            if ((gameArray[down] === gameArray[number]) && (gameArray[number] === gameArray[down1])){
                
                return true
            }
        }
        //up
        let up = Functions.findNumber(3,(changedNumber.f ),(changedNumber.g + 1))
        let up1 = Functions.findNumber(3,(changedNumber.f),(changedNumber.g + 2))
        if(((up >= 0)  && (up <= 8))  && ((up1 >= 0)  && (up1 <= 8)) ) {
            if ((gameArray[up] === gameArray[number]) && (gameArray[number] === gameArray[up1])){
                
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
                    finalNumber = checkNumber(f)
                    return true
                }
            }
            return false;
        },

        getArray: function() {
            return gameArray;
        }
        ,
        getFinalNumber: function() {
            return finalNumber;
        }
    }
    
    

}


function PCplayer(){
    let pcplayer = player("PC", "O","Brown")
    
    return {
        
        move: function(Game) {
            let randomNum = Math.floor(Math.random() * 9);
            let arr = Game.getArray();
            while((typeof arr[randomNum])==="string"){
                randomNum = Math.floor(Math.random() * 9);
            }
            return randomNum
        }
        ,
        setSign: function (newSign) {
            this.pcplayer.setSign(newSign)
            this.sign = pcplayer.sign
        }
        ,
        setColor: function (newColor) {
            this.pcplayer.setColor(newColor)
            this.color = pcplayer.color
        },
        name:pcplayer.name,
        sign:pcplayer.sign,
        color:pcplayer.color,
        pcplayer:pcplayer
        
     }
}

newgame = Game(1)
let player1 = player()
let player2 = player()

let playerType = "player"
let focusedPlayer;



document.getElementById("O").addEventListener("click" ,()=> {
    
    if(document.getElementById("O").checked == true){
        document.getElementById("X").checked = false
    }
    
})


document.getElementById("X").addEventListener("click" ,()=> {
    
    if(document.getElementById("X").checked == true){
        document.getElementById("O").checked = false
    }
   
})


document.getElementById("O1").addEventListener("click" ,()=> {
    
    if(document.getElementById("O1").checked == true){
        document.getElementById("X1").checked = false
    }
    
})


document.getElementById("X1").addEventListener("click" ,()=> {
    
    if(document.getElementById("X1").checked == true){
        document.getElementById("O1").checked = false
    }
   
})

let stri = "";
let p = ([2,3,1].sort())
for(let x = 0; x < p.length; x++){
    stri = stri + p[x];
}
console.log(stri)

console.log(("123" == stri) )

document.getElementById("O1").addEventListener("click" ,()=> {
    
    if(document.getElementById("O1").checked == true){
        document.getElementById("O").checked = false
        document.getElementById("X").checked = true
    }
    
})


document.getElementById("X1").addEventListener("click" ,()=> {
    
    if(document.getElementById("X1").checked == true){
        document.getElementById("X").checked = false
        document.getElementById("O").checked = true
    }
   
})



document.getElementById("O").addEventListener("click" ,()=> {
    
    if(document.getElementById("O").checked == true){
        document.getElementById("O1").checked = false
        document.getElementById("X1").checked = true
    }
    
})


document.getElementById("X").addEventListener("click" ,()=> {
    
    if(document.getElementById("X").checked == true){
        document.getElementById("X1").checked = false
        document.getElementById("O1").checked = true
    }
   
})

document.getElementById("Brown").addEventListener("click" ,()=> {
    
    if(document.getElementById("Brown").checked == true){
        document.getElementById("Black").checked = false
        document.getElementById("Brown1").checked = false
        document.getElementById("Black1").checked = true
    }
    
})


document.getElementById("Black").addEventListener("click" ,()=> {
    
    if(document.getElementById("Black").checked == true){
        document.getElementById("Brown").checked = false
        document.getElementById("Black1").checked = false
        document.getElementById("Brown1").checked = true
    }
   
})


document.getElementById("Brown1").addEventListener("click" ,()=> {
    
    if(document.getElementById("Brown1").checked == true){
        document.getElementById("Black1").checked = false
        document.getElementById("Brown").checked = false
        document.getElementById("Black").checked = true
    }
    
})


document.getElementById("Black1").addEventListener("click" ,()=> {
    
    if(document.getElementById("Black1").checked == true){
        document.getElementById("Brown1").checked = false
        document.getElementById("Black").checked = false
        document.getElementById("Brown").checked = true
    }
   
})
console.log(document.getElementById("O").checked )

let g = document.querySelector(".playGame>button")
let body = document.querySelector("body")

g.addEventListener("click", () => {
    body.classList.remove("State1")
    body.classList.remove("State2_1")
    body.classList.add("State2")
})

let AgainstPlayer = document.querySelector(".playervspc>button:nth-child(1)")
let AgainstPC = document.querySelector(".playervspc>button:nth-child(2)")

AgainstPlayer.addEventListener("click", ()=>{
    body.classList.remove("State2")
    body.classList.remove("State1")
    body.classList.add("State2_1")
})

AgainstPC.addEventListener("click", ()=>{
    body.classList.remove("State2")
    body.classList.remove("State1")
    body.classList.add("State2_2")
})

let startGame = document.querySelector(".startGame>button")
focusedPlayer = player1
startGame.addEventListener("click", ()=>{
    body.classList.remove("State2")
    body.classList.remove("State1")
    body.classList.remove("State2_1")
    body.classList.remove("State2_2")
    body.classList.add("StateGame")
    
    document.querySelector(".turn").innerText = "PLAYER ONE"
    document.querySelector(".turnName").innerText = (focusedPlayer.name).toUpperCase()
    let boards = document.querySelectorAll(".boards")

    
    for (let x = 0; x < 9 ; x++){
        
        
        let g = boards[x]
        
        g.addEventListener("click", (event)=>{
            
            event.stopPropagation();
            
            let turn = ""
            newgame[x] = focusedPlayer.sign
            let s = focusedPlayer.color
            g.innerText = focusedPlayer.sign
            g.classList.remove("Black")
            g.classList.remove("Brown")
            g.classList.add(s)
            
            newgame.move(x,focusedPlayer)
            console.log(newgame.getArray())
            
            if (newgame.checkWin() === true){
                console.log(newgame.getFinalNumber())
                console.log("Someone won")
                lineString = ""
                switch(newgame.getFinalNumber()) {
                    case '012':
                        lineString = "line1"
                        break;
                    case '345':
                        lineString = "line2"
                        break;
                    case '678':
                        lineString = "line3"
                        break;
                    case '036':
                        lineString = "line4"
                        break;
                    case '147':
                        lineString = "line5"
                        break;
                    case '258':
                        lineString = "line6"
                        break;
                    case '048':
                        lineString = "line7"
                        break;
                    case '246':
                        lineString = "line8"
                        break;
                    default:
                        break;
                } 
                console.log(lineString)
                let line = document.querySelector("." + lineString)
                line.classList.add("active")

            }
            if (focusedPlayer === player1){
                focusedPlayer = player2
                turn = "PLAYER TWO"
            }
            else if (focusedPlayer === player2){
                focusedPlayer = player1
                turn = "PLAYER ONE"
            }
            document.querySelector(".turn").innerText = turn
            document.querySelector(".turnName").innerText = (focusedPlayer.name).toUpperCase()
            if (document.querySelector(".turn").textContent =="PLAYER TWO"){
                if (playerType == "pc"){
                    randomnumber = focusedPlayer.move(newgame)
                    newgame.move(randomnumber,focusedPlayer)
                    let g = boards[randomnumber]
                    let s = focusedPlayer.color
                    g.classList.remove("Black")
                    g.classList.remove("Brown")
                    g.classList.add(s)
                    let h = focusedPlayer.sign
                    setTimeout(function() {
                        
                        g.innerText = h
                        
                      }, 1000);
                    
                    console.log(newgame.getArray())
                    if (newgame.checkWin() === true){
                        console.log(newgame.getFinalNumber())
                        console.log("Someone won")
                        lineString = ""
                        switch(newgame.getFinalNumber()) {
                            case '012':
                                lineString = "line1"
                                break;
                            case '345':
                                lineString = "line2"
                                break;
                            case '678':
                                lineString = "line3"
                                break;
                            case '036':
                                lineString = "line4"
                                break;
                            case '147':
                                lineString = "line5"
                                break;
                            case '258':
                                lineString = "line6"
                                break;
                            case '048':
                                lineString = "line7"
                                break;
                            case '246':
                                lineString = "line8"
                                break;
                            default:
                                break;
                        } 
                        console.log(lineString)
                        let line = document.querySelector("." + lineString)
                        line.classList.add("active")
        
                    }
                    if (focusedPlayer === player1){
                        focusedPlayer = player2
                        turn = "PLAYER TWO"
                    }
                    else if (focusedPlayer === player2){
                        focusedPlayer = player1
                        turn = "PLAYER ONE"
                    }
                    document.querySelector(".turn").innerText = turn
                    document.querySelector(".turnName").innerText = (focusedPlayer.name).toUpperCase()
                }
            }
            
            
        })
    }
    

})

let submitPlayer2 = document.querySelector("#submitPlayerInfosubmit2")
submitPlayer2.addEventListener('click', function(e) {
    e.preventDefault();
    
});


let submitPlayer1 = document.querySelector("#submitPlayerInfosubmit1")
submitPlayer2.addEventListener('click', function(e) {
    e.preventDefault();
    
});




submitPlayer1.addEventListener("click", ()=>{
    let pass = true;
    let formplayer1 = document.querySelector(".player1>form")
    
    let PlayerName1 = formplayer1.querySelector(".PlayerName1>input")
    if (PlayerName1.value == ""){
        PlayerName1.setCustomValidity('Invalid input'); 
        pass = false
    }
    else{
        PlayerName1.setCustomValidity(''); 
        
    }
    
    let checkedSign;
    if ((formplayer1.querySelector(".PlayerSign>.Ocheck")).querySelector("#O1").checked == true) {
        let input = ((formplayer1.querySelector(".PlayerSign>.Ocheck")).querySelector("#O1"))
        input.setCustomValidity('');
        checkedSign =(formplayer1.querySelector(".PlayerSign>.Ocheck")).querySelector("#O1")
    }
    else if ((formplayer1.querySelector(".PlayerSign>.Xcheck")).querySelector("#X1").checked == true){
        let input2 = ((formplayer1.querySelector(".PlayerSign>.Xcheck")).querySelector("#X1"))
        input2.setCustomValidity('');
        checkedSign =(formplayer1.querySelector(".PlayerSign>.Xcheck")).querySelector("#X1")
    }
    else {
        let input = ((formplayer1.querySelector(".PlayerSign>.Ocheck")).querySelector("#O1"))
        let input2 = ((formplayer1.querySelector(".PlayerSign>.Xcheck")).querySelector("#X1"))
        
        input.setCustomValidity('Invalid input')
        input2.setCustomValidity('Invalid input')
        input2.setCustomValidity(''); 
        pass = false
    }

    
    let checkedColor;
    if ((formplayer1.querySelector(".PlayerColor>div:nth-child(1)")).querySelector("#Brown1").checked == true) {
        let input = ((formplayer1.querySelector(".PlayerColor>div:nth-child(1)")).querySelector("#Brown1"))
        input.setCustomValidity(''); 
        checkedColor =(formplayer1.querySelector(".PlayerColor>div:nth-child(1)")).querySelector("#Brown1")
    }
    else if ((formplayer1.querySelector(".PlayerColor>div:nth-child(2)")).querySelector("#Black1").checked == true){
        let input2 = ((formplayer1.querySelector(".PlayerColor>div:nth-child(2)")).querySelector("#Black1"))
        input2.setCustomValidity(''); 
        checkedColor =(formplayer1.querySelector(".PlayerColor>div:nth-child(2)")).querySelector("#Black1")
    }
    else {
        let input = ((formplayer1.querySelector(".PlayerColor>div:nth-child(1)")).querySelector("#Brown1"))
        let input2 = ((formplayer1.querySelector(".PlayerColor>div:nth-child(2)")).querySelector("#Black1"))
        input.setCustomValidity('Invalid input')
        input2.setCustomValidity('Invalid input')
        pass = false
    }
    if (pass === true){
        checkedSign = checkedSign.value
    checkedColor = checkedColor.value
    
    
    //let PlayerColor = formplayer1.querySelector(".PlayerColor>input")
    //console.log(PlayerColor.value)

    let divInfo = document.createElement("form")
    divInfo.classList.add("alignLeft")
    let labelName = document.createElement("label")
    labelName.innerText = "Name: "
    labelName.classList.add("alignLeft")
    let divName = document.createElement("div")
    divName.innerText = PlayerName1.value
    divName.style.fontWeight = "bold"
    labelName.appendChild(divName)
    let labelSign = document.createElement("label")
    labelSign.innerText = "Sign: "
    labelSign.classList.add("alignLeft")
    let divSign = document.createElement("div")
    divSign.innerText = checkedSign
    divSign.style.fontWeight = "bold"
    labelSign.appendChild(divSign)
    let labelColor = document.createElement("label")
    labelColor.innerText = "Color: "
    labelColor.classList.add("alignLeft")
    let divColor = document.createElement("div")
    divColor.innerText = checkedColor
    divColor.style.fontWeight = "bold"
    labelColor.appendChild(divColor)

    divInfo.appendChild(labelName)
    divInfo.appendChild(labelSign)
    divInfo.appendChild(labelColor)
    let general = document.querySelector(".player1")
    
    
    general.removeChild(formplayer1)
    general.appendChild(divInfo)
    if (body.classList.contains("State2_2")){
        player2 = PCplayer()
        
        playerType = "pc"
        if (checkedSign == "X"){
            player2.setSign("O")
        }
        else{
            player2.setSign("X")
        }
        
        if (checkedColor == "Brown"){
            player2.setColor("Black")
        }
        else{
            player2.setColor("Brown")
        }
        
    }
    player1.setName(PlayerName1.value)
    player1.setSign(checkedSign)
    player1.setColor(checkedColor)
    console.log(player1)

    }
    else {

    }
    
})


submitPlayer2.addEventListener("click", ()=>{
    let pass = true;
    let formPlayer2 = document.querySelector(".player2>form")
    
    let PlayerName = formPlayer2.querySelector(".PlayerName>input")
    if (PlayerName.value == ""){
        PlayerName.setCustomValidity('Invalid input'); 
        pass = false
    }
    else{
        PlayerName.setCustomValidity(''); 
        
    }
    
    let checkedSign;
    if ((formPlayer2.querySelector(".PlayerSign>.Ocheck")).querySelector("#O").checked == true) {
        let input = ((formPlayer2.querySelector(".PlayerSign>.Ocheck")).querySelector("#O"))
        input.setCustomValidity('');
        checkedSign =(formPlayer2.querySelector(".PlayerSign>.Ocheck")).querySelector("#O")
    }
    else if ((formPlayer2.querySelector(".PlayerSign>.Xcheck")).querySelector("#X").checked == true){
        let input2 = ((formPlayer2.querySelector(".PlayerSign>.Xcheck")).querySelector("#X"))
        input2.setCustomValidity('');
        checkedSign =(formPlayer2.querySelector(".PlayerSign>.Xcheck")).querySelector("#X")
    }
    else {
        let input = ((formPlayer2.querySelector(".PlayerSign>.Ocheck")).querySelector("#O"))
        let input2 = ((formPlayer2.querySelector(".PlayerSign>.Xcheck")).querySelector("#X"))
        
        input.setCustomValidity('Invalid input')
        input2.setCustomValidity('Invalid input')
        input2.setCustomValidity(''); 
        pass = false
    }

    
    let checkedColor;
    if ((formPlayer2.querySelector(".PlayerColor>div:nth-child(1)")).querySelector("#Brown").checked == true) {
        let input = ((formPlayer2.querySelector(".PlayerColor>div:nth-child(1)")).querySelector("#Brown"))
        input.setCustomValidity(''); 
        checkedColor =(formPlayer2.querySelector(".PlayerColor>div:nth-child(1)")).querySelector("#Brown")
    }
    else if ((formPlayer2.querySelector(".PlayerColor>div:nth-child(2)")).querySelector("#Black").checked == true){
        let input2 = ((formPlayer2.querySelector(".PlayerColor>div:nth-child(2)")).querySelector("#Black"))
        input2.setCustomValidity(''); 
        checkedColor =(formPlayer2.querySelector(".PlayerColor>div:nth-child(2)")).querySelector("#Black")
    }
    else {
        let input = ((formPlayer2.querySelector(".PlayerColor>div:nth-child(1)")).querySelector("#Brown"))
        let input2 = ((formPlayer2.querySelector(".PlayerColor>div:nth-child(2)")).querySelector("#Black"))
        input.setCustomValidity('Invalid input')
        input2.setCustomValidity('Invalid input')
        pass = false
    }
    if (pass === true){
        checkedSign = checkedSign.value
    checkedColor = checkedColor.value
    
    
    //let PlayerColor = formPlayer2.querySelector(".PlayerColor>input")
    //console.log(PlayerColor.value)

    let divInfo = document.createElement("form")
    divInfo.classList.add("alignLeft")
    let labelName = document.createElement("label")
    labelName.innerText = "Name: "
    labelName.classList.add("alignLeft")
    let divName = document.createElement("div")
    divName.innerText = PlayerName.value
    divName.style.fontWeight = "bold"
    labelName.appendChild(divName)
    let labelSign = document.createElement("label")
    labelSign.innerText = "Sign: "
    labelSign.classList.add("alignLeft")
    let divSign = document.createElement("div")
    divSign.innerText = checkedSign
    divSign.style.fontWeight = "bold"
    labelSign.appendChild(divSign)
    let labelColor = document.createElement("label")
    labelColor.innerText = "Color: "
    labelColor.classList.add("alignLeft")
    let divColor = document.createElement("div")
    divColor.innerText = checkedColor
    divColor.style.fontWeight = "bold"
    labelColor.appendChild(divColor)

    divInfo.appendChild(labelName)
    divInfo.appendChild(labelSign)
    divInfo.appendChild(labelColor)
    let general = document.querySelector(".player2")
    
    
    general.removeChild(formPlayer2)
    general.appendChild(divInfo)
    player2.setName(PlayerName.value)
    player2.setSign(checkedSign)
    player2.setColor(checkedColor)
    console.log(player2)
    }
    else {

    }
    
    
})
