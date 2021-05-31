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
        console.log('User guess', userGuess.value)
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
    }, 4000)
}

// -------------------------------- Canvas ---------------------------------
const firstCanvas = document.querySelector('#firstCanvas')
const secondCanvas = document.querySelector('#secondCanvas')
const thirdCanvas = document.querySelector('#thirdCanvas')

const firstCTX = firstCanvas.getContext('2d')
firstCTX.moveTo(10, 10)
firstCTX.lineTo(100, 100)
firstCTX.stroke()

const secondCTX = secondCanvas.getContext('2d')
secondCTX.beginPath()
secondCTX.arc(10, 10, 100, 45, 120, false)
secondCTX.stroke()

const thirdCTX = thirdCanvas.getContext('2d')
thirdCTX.fillStyle = 'red'
thirdCTX.fillRect(20, 20, 200, 200)
thirdCTX.stroke()

// -------------------------------- String ---------------------------------

const Mathematics = 95
document.querySelector('#string').textContent = `You got ${Mathematics} in Mathematics`

console.log(Mathematics, typeof Mathematics)

// -------------------------------- String methods ---------------------------------

function stringMethods() {
    let userName = prompt('Enter your name.')
    if (userName && userName.trim()) {
        let trimedUserName = userName.trim()
            console.log('Stringlength', trimedUserName.length)
            console.log(`The first character of the string ${userName} =>`, trimedUserName[0])
            console.log(`The last character of the string ${userName} =>`, trimedUserName[trimedUserName.length - 1])

            console.log('indexOf', trimedUserName.indexOf('Anthony')) // if found return position, if not return -1

            console.log('slice', trimedUserName.slice(trimedUserName.indexOf('Anthony'))) // return Anthony to last
            console.log('slice', trimedUserName.slice(2, trimedUserName.length)) // return ward Anthony Jenner

            console.log('toUpperCase', trimedUserName.toUpperCase())
            console.log('toLowerCase', trimedUserName.toLowerCase())

            console.log('replace', trimedUserName.replace('Anthony', 'Yahoo')) // replace if found, if not return full string
    }
}
stringMethods()

// -------------------------------- String methods - Practice (Filtering greeting messages)---------------------------------
let greetings = [
                 'Happy Birthday!',
                 'Merry Christmas my love',
                 'A happy Christmas to all the family',
                 'You\'re all I want for Christmas',
                 'Get well soon'
                ]
let filteredGreetings = []

function checkChristmasGretting() {
    console.log('Greetings', greetings)
    
    for (let i = 0; i < greetings.length; i++) {
        if(greetings[i].indexOf('Christmas') !== -1){
            filteredGreetings.push(greetings[i])
        }
    }
    
    console.log('Filtered greetings', filteredGreetings)
}
checkChristmasGretting()

// -------------------------------- String methods - Practice (Fixing capitalization)---------------------------------
let cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL']

let capitalizedCities = []

function capitalization() {
    console.log('Cities', cities)
    
    for (let i = 0; i < cities.length; i++) {
        capitalizedCities.push(capitalize(cities[i]))
    }
    console.log('Capitalized cities', capitalizedCities)
}
capitalization()

function capitalize(e) {
    let lowerCase = e.toLowerCase()
    return lowerCase.replace(lowerCase[0], lowerCase.slice(0, 1).toUpperCase())
}

// -------------------------------- String methods - Practice (Making new strings from old parts)---------------------------------
let stations = [
                'MAN675847583748sjt567654;Manchester Piccadilly',
                'GNF576746573fhdg4737dh4;Greenfield',
                'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
                'SYB4f65hf75f736463;Stalybridge',
                'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'
               ]

let newStations = []

function createNewStations() {
    console.log('Stations', stations)
    
    for (let i = 0; i < stations.length; i++) {
        newStations.push(newStation(stations[i]))
    }
    console.log('New stations', newStations)
}
createNewStations()

function newStation(e) {
    return e.slice(0, 3) + ' => ' + e.slice(e.slice(3, e.indexOf(';')).length + 4, e.length)
}

// ------------------------------------ Problem Solving of String -------------------------

// SyntaxError: Unexpected identifier
// let quoteStart = 'Don't judge each day by the harvest you reap'
let quoteStart = "Don't judge each day by the harvest you reap"   // add this line

console.log('Unexpected identifier', quoteStart)


// ReferenceError: quoteLength is not defined
let quote = 'I do not like green eggs and ham. I do not like them, Sam-I-Am.' // add this line
let quoteLength = quote.length

console.log('quoteLength is not defined', quoteLength)