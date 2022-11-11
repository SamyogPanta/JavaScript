var myList = [1,2,3,4,5,6,7,8,9,10,11,10,10,10]
Math.floor(Math.random() * 14);

let hasBlackCard = false
let isAlive = true

let message = ""

let messageEl= document.getElementById("message-el")
let cardEl = document.querySelector("#card-el")
let sumEl = document.querySelector("#sum-el")



function randomCard(){
    let card = 0
    card = myList[Math.floor(Math.random() * 14)]
    return card
}



function startGame(){

    let firstCard = randomCard()
    let secondCard = randomCard()
    let sum = firstCard + secondCard

    if( sum <= 20){
        message = ("Do you want to draw new card ?")
    
    }
    else if (sum === 21){
        message = ("Wohoo! You've hot Blackjack!")
        hasBlackCard = true
    } 
    else if(sum >= 22) {
        message = ("You're out of the game!")
        isAlive = false
    }
    
    messageEl.textContent = message

    sumEl.textContent = "Sum: " + sum
    cardEl.textContent = "Cards: " + firstCard + " , " + secondCard

}



