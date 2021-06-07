document.querySelector('.checkbox').addEventListener("click", function (e) {
    if(e.target.checked) console.log('Checked')
    else console.log('Unchecked')
})

// --------------------- Select -----------------------

document.querySelector('.select').addEventListener("change", function (e){
    if(e.target.value.trim().length == 0) return

    // Same
    if(e.target.value == 'sunny') console.log('Sunny selected')
    else if(e.target.value == 'rainy') console.log('Rainy selected')
    else if(e.target.value == 'snowing') console.log('Snowing selected')
    else if(e.target.value == 'overcast') console.log('Overcast selected')

    // Same
    switch (e.target.value) {
        case 'sunny':
            console.log('Sunny selected')
            break;
        case 'rainy':
            console.log('Rainy selected')
            break;
        case 'snowing':
            console.log('Snowing selected')
            break;
        case 'overcast':
            console.log('Overcast selected')
            break;
    }

    // Same
    console.log(ucfirst(e.target.value) + ' selected')
})
function ucfirst(value) {
    return value.slice(0, 1).toUpperCase() + value.slice(1, value.length)
}

// ------------------- Select BG -------------------------

document.querySelector('.change-bg').addEventListener('change', function (e) {
    if(e.target.value.trim().length == 0) return

    (e.target.value == 'black') ? updateBg(e.target.value, 'lime') : updateBg(e.target.value, 'red')
})
function updateBg(bg, color) {
    document.querySelector('body').style.backgroundColor = bg
    document.querySelector('.change-bg').style.color = color
}

// ------------------ CALENDER APP ---------------------
const calenderOutput = document.querySelector('.calender-output')
const month = document.querySelector('#month')
const monthSelected = document.querySelector('.month-selected')
const calenderInfo = [
    { month : 'January', days  : 31 },
    { month : 'February', days  : leapYear() }, // It can be leap year (29)
    { month : 'March', days  : 31 },
    { month : 'April', days  : 30 },
    { month : 'May', days  : 31 },
    { month : 'June', days  : 30 },
    { month : 'July', days  : 31 },
    { month : 'August', days  : 31 },
    { month : 'September', days  : 30 },
    { month : 'October', days  : 31 },
    { month : 'November', days  : 30 },
    { month : 'December', days  : 31 }
]

function leapYear(){
    let year = new Date().getFullYear()
    if(((year % 4 == 0) && (year % 100 !== 0)) || (year % 400 == 0)) return 29
    else return 28
}

month.addEventListener('change', function (e){
    calender(e.target.value)
})

function calender(month) {
    calenderOutput.innerHTML = ''
    calenderInfo.forEach(e => {
        if(e.month == month) {
            for (let i = 0; i <= (e.days - 1); i++) { // we need to put i =0; best practice I think
                calenderOutput.innerHTML += `<li>${i+1}</li>`
            }
        }
    });
    monthSelected.textContent = month
}
calender(month.value)

// ------------------------------- Canvas -------------------------------------------------------

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
const WIDTH = document.documentElement.clientWidth // screen width
const HEIGHT = document.documentElement.clientHeight // screen height

setInterval(() => {
    draw()
}, 50);

function draw() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT)
        for (let i = 0; i < 100; i++) {
            ctx.beginPath()
            ctx.fillStyle = 'red'
            ctx.arc(random(WIDTH), random(HEIGHT), random(5), 0, 2 * Math.PI)
            ctx.fill()
        }
}

function random(number) {
    return Math.floor( Math.random() * number )
}

// ---------------------------- FOR ----------------------------------------------------------

const cats = ['Bill', 'Jeff', 'Pete', 'Biggles', 'Jasmin']
let text = ''

for (let i = 0; i < cats.length; i++) {
    let comma = ', '

        if(i == (cats.length - 1)) comma = '.'
        
        text += cats[i] + comma
}
console.log(text)

// ---------------------------------- Search -----------------------------------------------------
const contacts = ['Chris:2232322', 'Sarah:3453456', 'Bill:7654322', 'Mary:9998769', 'Dianne:9384975']
const searchBtn = document.querySelector('.search-btn')
const search = document.querySelector('#search')

search.addEventListener('keyup', searchContact)

function searchContact() {
    if(search.value.trim().length == 0) return

    for (let i = 0; i < contacts.length; i++) {
        let splitedContact = contacts[i].split(':')

        if(splitedContact[0].toLowerCase() == search.value.toLowerCase()) {
            result = contacts[i]
            break
        }
        else result = `Contact not found`
    }
    console.log(result)
}
// --------------------------------------- WHILE -------------------------------------------------

let whileI = 0
let text2 = ''

while (whileI < cats.length) {
    let comma = ', '
    
        if(whileI == (cats.length - 1)) comma = '.'

        text2 += cats[whileI] + comma

        whileI++
}
console.log(text2)

// ---------------------------------- Do While -----------------------------------------------

let whileJ = 0
let text3 = ''

do {
    let comma = ', '
    
        if(whileJ == (cats.length - 1)) comma = '.'

        text3 += cats[whileJ] + comma

        whileJ++

} while (whileJ < cats.length)

console.log(text3)

// ------------------------------------ Countdown ------------------------------------------

let myInterval = setInterval(() => {
    countdown()
}, 1000);

let countdownShow = document.querySelector('.countdown')
function countdown() {
    let countdownShowNumber = Number(countdownShow.innerHTML)

        if(countdownShowNumber == 0) clearInterval(myInterval)

        else countdownShow.innerHTML = countdownShowNumber - 1
}

// -------------------------------- Build in functions ------------------------------------
/*
    1) string.replace()
    2) array.join('-')
    3) Math.random()

    ----------------------------------- Invoking functions ---------------------------
    function myFunction() {
        alert('Hello')
    }
    myFunction()
    
    ----------------------------------- Anonymous functions ---------------------------
    window.onload = function () {
        alert('Hello')
    }

    const anFunction = function () {
        alert('Hello')
    }
    anFunction()

    let anotherName = anFunction
        anotherName()

    ### Functions are generally return something
    ### Inline event handlers (onClick) — don't use these
*/

// ---------------------- addEventListener vs removeEventListener ---------------------

window.addEventListener('click', test)

setTimeout(() => {
    window.removeEventListener('click', test)
}, 2000)

function test() {
    console.log('heyy !!')
}

// ---------------------------- FUN with events ---------------------------------------------

function makeSomeDivs() {
    for (let i = 0; i < 30; i++) {
        document.querySelector('.event-fun-wrapper').innerHTML += `<div class="event-fun"></div>`
    }
}
makeSomeDivs()

const divs = document.querySelectorAll('.event-fun')

for (let i = 0; i < divs.length; i++) {
    divs[i].addEventListener('mousemove', function (e) {
        e.target.style.backgroundColor = randomColor()
    })
}

function randomColor() {
    return 'rgb(' + randomNumber() + ', ' + randomNumber() + ', ' + randomNumber() + ')'
}
function randomNumber() {
    return Math.floor( Math.random() * 255 )
}

// ---------------------- Play with video -------------------------------

const video = document.querySelector('video')

video.onclick = function (e) {
    e.target.play()
}
video.ondblclick = function (e) {
    e.target.pause()
}

// ----------------------- Image Gallary -----------------------------------

const displayedImg = document.querySelector('.displayed-img')
const thumbImg = document.querySelectorAll('.thumb-image')

for (let i = 0; i < thumbImg.length; i++) {
    thumbImg[i].onclick = function (e) {
        displayedImg.setAttribute('src', e.target.getAttribute('src'))
    }
}