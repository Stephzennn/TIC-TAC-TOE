



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
                console.log("Here is the winning line Diagonal one " )
                numbers = ([diagonal0, number , diagonal01]).sort()
                
                for(let x = 0; x < numbers.length; x++){
                    numberString = numberString + numbers[x];
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
                        console.log("Here is the winning line Diagonal two " )
                        return true
                    }
                }
            }
            
            

        }


        //left  
        
        if((((changedNumber.f - 1) >= 0)  && ((changedNumber.f - 1) <= 2))  && (((changedNumber.f - 2) >= 0)  && ((changedNumber.f - 2) <= 2)) ) {
            let left = Functions.findNumber(3,(changedNumber.f - 1),(changedNumber.g))
            let left1 = Functions.findNumber(3,(changedNumber.f - 2),(changedNumber.g))
            if ((gameArray[left] === gameArray[number]) && (gameArray[number] === gameArray[left1])){
                console.log("Here is the winning line Diagonal left " )
                return true
            }
        }

        
        //right
        
        if((((changedNumber.f + 1) >= 0)  && ((changedNumber.f + 1) <= 2))  && (((changedNumber.f + 2) >= 0)  && ((changedNumber.f + 2) <= 2)) ) {
            let right = Functions.findNumber(3,(changedNumber.f + 1),(changedNumber.g))
            let right1 = Functions.findNumber(3,(changedNumber.f + 2),(changedNumber.g))
            if ((gameArray[right] === gameArray[number]) && (gameArray[number] === gameArray[right1])){
                console.log(right1)
                console.log("Here is the winning line Diagonal right " )
                return true
            }
        }
        
        //down
        if((((changedNumber.g - 1) >= 0)  && ((changedNumber.g - 1) <= 2))  && (((changedNumber.g - 2) >= 0)  && ((changedNumber.g - 2) <= 2)) ) {
        let down = Functions.findNumber(3,(changedNumber.f ),(changedNumber.g - 1))
        let down1 = Functions.findNumber(3,(changedNumber.f),(changedNumber.g - 2))
        
        
            if ((gameArray[down] === gameArray[number]) && (gameArray[number] === gameArray[down1])){
                console.log("Here is the winning line Diagonal down " )
                return true
            }
        }
        //up
        
        if((((changedNumber.g + 1) >= 0)  && ((changedNumber.g + 1) <= 2))  && (((changedNumber.g + 2) >= 0)  && ((changedNumber.g + 2) <= 2)) ) {
            let up = Functions.findNumber(3,(changedNumber.f ),(changedNumber.g + 1))
            let up1 = Functions.findNumber(3,(changedNumber.f),(changedNumber.g + 2))
            if ((gameArray[up] === gameArray[number]) && (gameArray[number] === gameArray[up1])){
                console.log("Here is the winning line Diagonal up " )
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

let  initialise = function(boody) {
    newgame = Game(1)
    let player1 = player()
    let player2 = player()

    let playerType = "player"
    let focusedPlayer;
    let elementO = boody.querySelector("#O")
    elementO.addEventListener("click" ,()=> {
    
    if(boody.querySelector("#O").checked == true){
        boody.querySelector("#X").checked = false
    }
    
})


boody.querySelector("#X").addEventListener("click" ,()=> {
    
    if(boody.querySelector("#X").checked == true){
        boody.querySelector("#O").checked = false
    }
   
})


boody.querySelector("#O1").addEventListener("click" ,()=> {
    
    if(boody.querySelector("#O1").checked == true){
        boody.querySelector("#X1").checked = false
    }
    
})


boody.querySelector("#X1").addEventListener("click" ,()=> {
    
    if(boody.querySelector("#X1").checked == true){
        boody.querySelector("#O1").checked = false
    }
   
})



boody.querySelector("#O1").addEventListener("click" ,()=> {
    
    if(boody.querySelector("#O1").checked == true){
        boody.querySelector("#O").checked = false
        boody.querySelector("#X").checked = true
    }
    
})


boody.querySelector("#X1").addEventListener("click" ,()=> {
    
    if(boody.querySelector("#X1").checked == true){
        boody.querySelector("#X").checked = false
        boody.querySelector("#O").checked = true
    }
   
})



boody.querySelector("#O").addEventListener("click" ,()=> {
    
    if(boody.querySelector("#O").checked == true){
        boody.querySelector("#O1").checked = false
        boody.querySelector("#X1").checked = true
    }
    
})


boody.querySelector("#X").addEventListener("click" ,()=> {
    
    if(boody.querySelector("#X").checked == true){
        boody.querySelector("#X1").checked = false
        boody.querySelector("#O1").checked = true
    }
   
})

boody.querySelector("#Brown").addEventListener("click" ,()=> {
    
    if(boody.querySelector("#Brown").checked == true){
        boody.querySelector("#Black").checked = false
        boody.querySelector("#Brown1").checked = false
        boody.querySelector("#Black1").checked = true
    }
    
})


boody.querySelector("#Black").addEventListener("click" ,()=> {
    
    if(boody.querySelector("#Black").checked == true){
        boody.querySelector("#Brown").checked = false
        boody.querySelector("#Black1").checked = false
        boody.querySelector("#Brown1").checked = true
    }
   
})


boody.querySelector("#Brown1").addEventListener("click" ,()=> {
    
    if(boody.querySelector("#Brown1").checked == true){
        boody.querySelector("#Black1").checked = false
        boody.querySelector("#Brown").checked = false
        boody.querySelector("#Black").checked = true
    }
    
})


boody.querySelector("#Black1").addEventListener("click" ,()=> {
    
    if(boody.querySelector("#Black1").checked == true){
        boody.querySelector("#Brown1").checked = false
        boody.querySelector("#Black").checked = false
        boody.querySelector("#Brown").checked = true
    }
   
})


let g = boody.querySelector(".playGame>button")
let body = boody.querySelector(".body")






g.addEventListener("click", () => {
    body.classList.remove("State1")
    body.classList.remove("State2_1")
    body.classList.add("State2")
})

let AgainstPlayer = boody.querySelector(".playervspc>button:nth-child(1)")
let AgainstPC = boody.querySelector(".playervspc>button:nth-child(2)")

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

let startGame = boody.querySelector(".startGame>button")
focusedPlayer = player1
startGame.addEventListener("click", ()=>{
    body.classList.remove("State2")
    body.classList.remove("State1")
    body.classList.remove("State2_1")
    body.classList.remove("State2_2")
    body.classList.add("StateGame")
    
    boody.querySelector(".turn").innerText = "PLAYER ONE"
    boody.querySelector(".turnName").innerText = (focusedPlayer.name).toUpperCase()
    let boards = boody.querySelectorAll(".boards")

    
    for (let x = 0; x < 9 ; x++){
        
        
        let gg = boards[x]
        let clonedG = gg.cloneNode(true)
        gg.parentNode.replaceChild(clonedG, gg)
        boards = boody.querySelectorAll(".boards")
        gg = boards[x]
        
        gg.addEventListener("click", (event)=>{
            
            event.stopPropagation();
            
            let turn = ""
            newgame[x] = focusedPlayer.sign
            let s = focusedPlayer.color
            gg.innerText = focusedPlayer.sign
            gg.classList.remove("Black")
            gg.classList.remove("Brown")
            gg.classList.add(s)
            
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
                
                let boardss = boody.querySelectorAll(".boards")
                        for(let d = 0 ; d < 9; d++){
                            let gr = boardss[d]
                            let clonedG = gr.cloneNode(true)
                            gr.parentNode.replaceChild(clonedG, gr)
                        }
                console.log(lineString)
                let line = boody.querySelector("." + lineString)
                line.classList.add("active")
                boody.querySelector(".turn").innerText = "WINNER"
                boody.querySelector(".turnName").innerText = (focusedPlayer.name).toUpperCase()
            }
            else {
                if (focusedPlayer === player1){
                    focusedPlayer = player2
                    turn = "PLAYER TWO"
                }
                else if (focusedPlayer === player2){
                    focusedPlayer = player1
                    turn = "PLAYER ONE"
                }
                boody.querySelector(".turn").innerText = turn
                boody.querySelector(".turnName").innerText = (focusedPlayer.name).toUpperCase()
            }
            
            
            if (boody.querySelector(".turn").textContent =="PLAYER TWO"){
                if (playerType == "pc"){
                    randomnumber = focusedPlayer.move(newgame)
                    newgame.move(randomnumber,focusedPlayer)
                    let ge = boards[randomnumber]
                    let clonedG = ge.cloneNode(true)
                    ge.parentNode.replaceChild(clonedG, ge)
                    boards = boody.querySelectorAll(".boards")
                    ge = boards[randomnumber]
                    let s = focusedPlayer.color
                    ge.classList.remove("Black")
                    ge.classList.remove("Brown")
                    ge.classList.add(s)
                    let h = focusedPlayer.sign
                    setTimeout(function() {
                        
                        ge.innerText = h
                        
                      }, 500);
                    
                    console.log(newgame.getArray())
                    if (newgame.checkWin() === true){
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
                        
                        
                        for(let d = 0 ; d < 9; d++){
                            let element = boards[d]
                            let clonedG = element.cloneNode(true)
                            element.parentNode.replaceChild(clonedG, element)
                        }
                        let boardss = boody.querySelectorAll(".boards")
                        let gth = boardss[randomnumber]
                        let h = focusedPlayer.sign
                        setTimeout(function() {
                        
                            gth.innerText = h
                            
                          }, 1);
                        console.log(lineString)
                        
                        let line = boody.querySelector("." + lineString)
                        line.classList.add("active")
                        
                        boody.querySelector(".turn").innerText = "WINNER"
                        boody.querySelector(".turnName").innerText = (focusedPlayer.name).toUpperCase()
        
                    }
                    else{
                        if (focusedPlayer === player1){
                            focusedPlayer = player2
                            turn = "PLAYER TWO"
                        }
                        else if (focusedPlayer === player2){
                            focusedPlayer = player1
                            turn = "PLAYER ONE"
                        }
                        boody.querySelector(".turn").innerText = turn
                        boody.querySelector(".turnName").innerText = (focusedPlayer.name).toUpperCase()
                    }
                    

                }
            }
            
            
        })
    }
    

})

let submitPlayer2 = boody.querySelector("#submitPlayerInfosubmit2")
submitPlayer2.addEventListener('click', function(e) {
    e.preventDefault();
    
});


let submitPlayer1 = boody.querySelector("#submitPlayerInfosubmit1")
/*
submitPlayer2.addEventListener('click', function(e) {
    e.preventDefault();
    
});

*/


submitPlayer1.addEventListener("click", function(e) {
    e.preventDefault();
    let pass = true;
    let formplayer1 = boody.querySelector(".player1>form")
    console.log("Here is the going to submit form")
    console.log(formplayer1)
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
    let general = boody.querySelector(".player1")
    
    
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
    let formPlayer2 = boody.querySelector(".player2>form")
    
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
    let general = boody.querySelector(".player2")
    
    
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
}
let player2_ = document.querySelector(".player2>form")
let player1_ = document.querySelector(".player1>form")
let GameBoard = document.querySelector(".GameBoard")
let GameboardKids = document.querySelectorAll(".GameBoard>*")

let containerPlayerini = document.querySelector(".containerPlayer")
let body = document.querySelector(".body")

cloneplayer1 = player1_.cloneNode(true)
cloneplayer2 = player2_.cloneNode(true)





//=================================================
GameBoard = GameBoard.cloneNode(true)
cloneContainer = containerPlayerini.cloneNode(true)
clonebody = body.cloneNode(true)
let firstBody = document.querySelector("body")
initialise(firstBody)


let title = document.querySelector(".title")
title.addEventListener("click", ()=>{
    newgame = Game(1)
    player1 = player()
    player2 = player()

    playerType = "player"
    
    
    /*
    let player1parent = (document.querySelector(".player1"))
    player1parent.replaceChildren()
    let newDiv = document.createElement("div")
    newDiv.textContent = "PLAYER ONE"
    newDiv.classList.add("player_title")
    player1parent.appendChild(newDiv)
    player1parent.appendChild(cloneplayer1,player1_)
    let player2parent = (document.querySelector(".player2"))
    player2parent.replaceChildren()
    let newDiv2 = document.createElement("div")
    newDiv2.textContent = "PLAYER TWO"
    newDiv2.classList.add("player_title")
    
    player2parent.appendChild(newDiv2)
    player2parent.appendChild(cloneplayer2,player2_)
   
    
    
    newboard = document.querySelector(".GameBoard")
    console.log(newboard)
    console.log(GameBoard)
    parentGameBoard.removeChild(newboard)
    parentGameBoard.appendChild(GameBoard)
    let parentGameBoard = (document.querySelector(".containerPlayer"))
    let totalparent = (document.querySelector(".body"))
    totalparent.removeChild(parentGameBoard)
    totalparent.appendChild(cloneContainer)
    */
    let grandBody = (document.querySelector("body"))
    let newBody = (document.querySelector(".body"))
    
    let newtitle = clonebody.querySelector(".title")
    clonebody.replaceChild(title, newtitle)
    clonebody.classList.remove("State2_1")
    clonebody.classList.remove("State2_2")
    clonebody.classList.remove("State2")
    clonebody.classList.remove("StateGame")
    clonebody.classList.add("State1")
    grandBody.replaceChild(clonebody, newBody)
    //=====================================================================================================
    let clonedGameboard = document.createElement("div")
    clonedGameboard.classList.add("GameBoard")
    let classArray1 = ["t1","t2","t3","t4","t5","t6","t7","t8","t9","line1","line2","line3","line4","line5","line6","line7","line8"]
    let classArray2 = ["boards","boards","boards","boards","boards","boards","boards","boards","boards"]
    let index = 0;
    GameboardKids.forEach((x)=>{
        let tempNode = document.createElement("div")
        tempNode.classList.add(classArray1[index])
        
        if (index < 9){
            tempNode.classList.add(classArray2[index])
        }
        console.log(tempNode)
        tempNode.innerHTML = "&nbsp;";
        clonedGameboard.appendChild(tempNode)
        index ++;
        
    })
    //===============================================================================================================
    let newPlayerform1 = grandBody.querySelector(".player1>form")
    let newPlayerform2 = grandBody.querySelector(".player2>form")
    let newGameboard = grandBody.querySelector(".GameBoard")
    let clone1 = createplayer1form (1)
    let clone2 = createplayer1form()
    
    newPlayerform1.parentNode.replaceChild(clone1, newPlayerform1)
    newPlayerform2.parentNode.replaceChild(clone2, newPlayerform2)
    newGameboard.parentNode.replaceChild(clonedGameboard,newGameboard)
    
    //grandBody.removeChild(newBody)
    //grandBody.appendChild(clonebody)
    
    
   
    //console.log((document.querySelector(".player1")))
    //player1_.parentNode.replaceChild(cloneplayer2,player2_)
    
    initialise(grandBody)
    
})

function createplayer1form (number = 0) {
    let xid = "X"
    let oid = "O"
    let brownid = "Brown"
    let blackid = "Black"
    let submitid = "submitPlayerInfosubmit2"
    let playername = "PlayerName"
    if (number == 1) {
        xid = "X1"
        oid = "O1"
        brownid = "Brown1"
        blackid = "Black1"
        submitid = "submitPlayerInfosubmit1"
        playername = "PlayerName1"
    }
    //=========================================================
    //Ocheck div
    let tempDiv1 = document.createElement("div")
    tempDiv1.classList.add("Ocheck")

    let tempinput1 = document.createElement("input")
    tempinput1.type = "checkbox";
    tempinput1.id = oid
    tempinput1.name = "Sign"
    tempinput1.value = "O"


    let tempLabel = document.createElement("label")
    tempLabel.htmlFor = "O"
    tempLabel.innerText = "O"


    tempDiv1.appendChild(tempinput1)
    tempDiv1.appendChild(tempLabel)
    //console.log(tempDiv1)
    let g = document.querySelector(".Ocheck")
    //console.log(g)
    
    //==========================================================


    //================================================================
    //Xcheck div
    let tempDiv2 = document.createElement("div")
    tempDiv2.classList.add("Xcheck")

    let tempinput2 = document.createElement("input")
    tempinput2.type = "checkbox";
    tempinput2.id = xid
    tempinput2.name = "SIGN"
    tempinput2.value = "X"



    let tempLabel2 = document.createElement("label")
    tempLabel2.htmlFor = "X"
    tempLabel2.innerText = "X"


    tempDiv2.appendChild(tempinput2)
    tempDiv2.appendChild(tempLabel2)
    //console.log(tempDiv2)
    let g2 = document.querySelector(".Xcheck")
    

    
    //=================================================

    let labelGeneral1 = document.createElement("label")
    labelGeneral1.classList.add("PlayerSign")
    labelGeneral1.style = "text-align: left;"
    labelGeneral1.htmlFor = "g"
    labelGeneral1.innerText = "SIGN:"
    labelGeneral1.appendChild(tempDiv1)
    labelGeneral1.appendChild(tempDiv2)
    //console.log(labelGeneral1)
    //========================================================
    let labelGeneral2 = document.createElement("label")
    labelGeneral2.classList.add(playername)
    labelGeneral2.htmlFor = "g"
    labelGeneral2.innerText = "Name:"

    let inputName = document.createElement("input")
    inputName.type = "text"
    labelGeneral2.appendChild(inputName)
    //console.log(labelGeneral2)
    

    //========================================================
    let brownDiv = document.createElement("div")

    let inputBrown = document.createElement("input")
    inputBrown.type = "checkbox"
    inputBrown.id = brownid
    inputBrown.name = "color"
    inputBrown.value = "Brown"
    let labelBrown = document.createElement("label")
    labelBrown.id = brownid
    labelBrown.htmlFor = "Brown"
    labelBrown.innerText = "Brown"

    brownDiv.appendChild(inputBrown)
    brownDiv.appendChild(labelBrown)
    //=========================================================
    let BlackDiv = document.createElement("div")


    let inputBlack = document.createElement("input")
    inputBlack.type = "checkbox"
    inputBlack.id = blackid
    inputBlack.name = "color"
    inputBlack.value = "Black"
    let labelBlack = document.createElement("label")
    labelBlack.id = blackid
    labelBlack.htmlFor = "Black"
    labelBlack.innerText = "Black"

    BlackDiv.appendChild(inputBlack)
    BlackDiv.appendChild(labelBlack)
    //===========================================================
    let PlayerColorlabel = document.createElement("label")
    PlayerColorlabel.classList.add("PlayerColor")
    PlayerColorlabel.htmlFor = "g"
    PlayerColorlabel.style =  "text-align: left;"
    
    PlayerColorlabel.innerText = "Color:"
    PlayerColorlabel.appendChild(brownDiv)
    PlayerColorlabel.appendChild(BlackDiv)
    
    //========================================================
    //button
    let PlayerOneButton = document.createElement("button")
    PlayerOneButton.id = submitid
    PlayerOneButton.classList.add("submitPlayerInfo")
    PlayerOneButton.type = "submit"
    PlayerOneButton.innerText = "SUBMIT"
    //=========================================================
    //form
    let topForm = document.createElement("form")
    topForm.action = ""
    topForm.method = "post"
    topForm.appendChild(labelGeneral2)
    topForm.appendChild(labelGeneral1)
    topForm.appendChild(PlayerColorlabel)
    topForm.appendChild(PlayerOneButton)
    


    return topForm
    
}



