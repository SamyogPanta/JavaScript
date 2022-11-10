// document.getElementById("count-el").innerText = 5

// change the count-el in the HTML to reflect the new count

// camelCase
let countEl = document.getElementById("count-el") // pass in arguments
let allEntres = document.getElementById("save-el")


let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
}

function decrease(){
    count = count - 1
    countEl.innerText = count
}



function save(){
    allEntres.innerText += count + " - "
    countEl.textContent = 0
    count = 0

}

