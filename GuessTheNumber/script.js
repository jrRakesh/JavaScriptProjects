const randomNumber = parseInt(Math.random()*100 + 1)
const submit = document.querySelector("#subt")
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector(".guesses")
const remaining = document.querySelector(".lastResult")
const lowOrHigh = document.querySelector(".lowOrHi")
const startOver = document.querySelector(".resultParas")

const p = document.createElement("p")

let prevGuess = []
let numGuess = 1 

let playGame = true
 
if(playGame){
    submit.addEventListener("click", (e) =>{
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}
function validateGuess(guess) {
    if(guess < 1){
        alert("please enter number more than 1")
    } else if(guess > 100){
        alert("please enter number less than 100")
    } else if(isNaN(guess)){
        alert("please enter valid number")
    } else {
        prevGuess.push(guess)
        if(numGuess === 10){
            displayGuess(guess)
            displayMessage(`Game Over. Random Number was ${randomNumber}`)
            endGame()
        } else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`You guessed it right`);
        endGame();
    } else if(guess < randomNumber){
        displayMessage(`Number is TOOO High`);
    } else if (guess > randomNumber){
        displayMessage(`Number is TOOO Low`);
    }
}

function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess} `;
    numGuess++
    remaining.innerHTML = `${11-numGuess}`;
}

function displayMessage(message){
lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}
function endGame(){
    userInput.value = ''
    userInput.setAttribute("disabled", "" )
    p.classList.add("button")
    p.innerHTML = `<h2 id="newGame"> Start a new Game</h2>`;
    startOver.appendChild(p);
    playGame = false
    newGame()
}

function newGame(){
    
    const newGameButton = document.querySelector("#newGame")
    newGameButton.addEventListener("click",(e) => {
    const randomNumber = parseInt(Math.random()*100 + 1)
    prevGuess = []
    numGuess = 1
    guessSlot.innerHTML = ''
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute("disabled")
    startOver.removeChild(p)
    playGame = true
    })
}