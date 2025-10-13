let homeScore = document.getElementById("homescore")

let guestScore = document.getElementById("guestscore")

let counterH = 0

let counterG = 0

function add1PointH(){
    counterH += 1
    homeScore.textContent = counterH
}

function add2PointsH(){
    counterH += 2
    homeScore.textContent = counterH
}

function add3PointsH(){
    counterH += 3
    homeScore.textContent = counterH
}

function add1PointG(){
    counterG += 1
    guestScore.textContent = counterG
}

function add2PointsG(){
    counterG += 2
    guestScore.textContent = counterG
}

function add3PointsG(){
    counterG += 3
    guestScore.textContent = counterG
}

function newGame(){
    counterH = 0
    counterG = 0
    homeScore.textContent = counterH
    guestScore.textContent = counterG
}

if(counterH > counterG){
    
}