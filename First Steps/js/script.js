let p = document.querySelector('p')

p.addEventListener('click', function () {
    let userName = prompt('What is your name ?') ?? 'Edward'
    if(userName){
        p.textContent = 'Player name is ' + userName
    }
})

// ------------------------------------------

/*
    1) The DOMContentLoaded event fires (createParagraph) function 
    when the initial of HTML document has been completely loaded and parsed,
    without waiting for stylesheets, images, and subframes to finish loading.

    2) It need's when we append someting into body.

    3) There will be some problem if we will try to append something in the body 
    before load the body tag

    4) defer attribute in script tag is an alternative of DOMContentLoaded structure (It's standard).

    5) async attribute in script tag is an alternative of DOMContentLoaded structure
*/
document.addEventListener("DOMContentLoaded", function() {
    function createHeadline() {
        let h1 = document.createElement('h1')
            h1.textContent = 'You clicked the button and I created!'
            h1.setAttribute('onClick', 'removeHeadline(this)')
            document.querySelector('.append-h1').appendChild(h1)
    }
    document.querySelector('.create-h1-tag').addEventListener('click', createHeadline)
})

function removeHeadline(e) {
    e.style.display = 'none'
}


// ----------- Guess Number Game ----------------------

let userGuess, previousGuesses, wrongOrRight, lowOrHigh, randomGuess, submitBtn
    howManyTry = 10, tried = 0, myPoint = howManyTry - tried,        // try 10 times
    previousGuessesArray = []

function startGame() { // start the game with generating the Random number
    alert(`
            We have selected a random number between 1 and 100. 
            See if you can guess it in 10 turns or fewer. 
            We'll tell you if your guess was too high or too low.
        `)
    randomGuess = (Math.floor(Math.random() * 100)) + 1  // a number between 0 - 100
    setvariables()
    userGuess.focus()
}
startGame()

function checkGuess() { // check the values, validations and user input with random number
    submitBtn.disabled = true
    if(userGuess.value >= 0 && userGuess.value !== '' && userGuess.value <= 100){
        checkRandom()
        console.log('User guess', userGuess.value);
        console.log('Random guess', randomGuess)
        console.log('Tried', tried)
        userGuess.value = ''
    }
    submitBtn.disabled = false
}

function setvariables() { // set the variables
    userGuess = document.querySelector('#userGuess')
    previousGuesses = document.querySelector('.previous-guesses')
    wrongOrRight = document.querySelector('.wrong-or-right')
    point = document.querySelector('.point')
    lowOrHigh = document.querySelector('.low-or-high')
    submitBtn = document.querySelector('.submit-btn')
}

function checkRandom() { // check the user input with the random number
    if (Number(userGuess.value) === randomGuess) {
        wrongOrRight.textContent = 'Congratulations! You got it right!'
        wrongOrRight.style.color = '#8adc8a'
        previousGuesses.textContent = ''
        lowOrHigh.textContent = ''
        resetGame()
    }else{
        wrongOrRight.textContent = 'Your answer is wrong! Try again!'
        wrongOrRight.style.color = 'red'
        previousGuessesArray.push(' ' + userGuess.value)
        previousGuesses.textContent = 'Previous guesses are : ' + previousGuessesArray
        checkLowOrHigh()
        tried++
        myPoint--
        point.textContent = 'Your point is : ' + myPoint
        checkTried()
    }
}

function checkLowOrHigh() { // check user input is greater or less than from the random number
    if (randomGuess < userGuess.value) {
        lowOrHigh.textContent = 'Last guess was too high!'
    } else if(randomGuess > userGuess.value) {
        lowOrHigh.textContent = 'Last guess was too low!'
    }
}

function checkTried() { // check how many times user tried
    if(tried === howManyTry){
        wrongOrRight.textContent = 'Your answer is wrong! You tried 10 times. So reset the game'
        wrongOrRight.style.color = 'red'
        resetGame()
    }
}

function resetGame() { // reset the game after success or failed
    userGuess.disabled = true
    setTimeout(() => {
        window.location.reload()
    }, 4000);
}