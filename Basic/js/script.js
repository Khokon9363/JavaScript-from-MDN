document.querySelector('h1').textContent = 'I change the text content of h1 tag using JavaScript'

let iceCream = 'ice-cream'

if (iceCream) {
    console.log('I love ice-cream from defiend variable')
} else {
    console.log('I love chocolate from defiend variable')
}
if (iceCream === 'ice-cream') {
    console.log('I love ice-cream from === conditional operator')
} else {
    console.log('I love chocolate from === conditional operator')
}

function multiply(num1, num2){
    return num1 * num2
}
console.log(multiply(10, 5))
console.log(multiply(0.5, 5))

document.querySelector('.btn-event').addEventListener('click', function(){
    alert('alert from addEventListener')
})

// --------------------------------------------------------------------------------------------

let img = document.querySelector('img')

img.addEventListener('mouseenter', function () {
    img.setAttribute('src', 'img/php.png')
})
img.addEventListener('mouseleave', function () {
    img.setAttribute('src', 'img/JavaScript.jpg')
})

// --------------------------------------------------------------------------------------------

function setName() {
    let name = prompt('What is your name ?')
    if(name && name.trim()){
        localStorage.setItem('name', name)
    }
    getName()
}

function getName() {
    if (!localStorage.getItem('name')) {
        setName()
        return
    }
    document.querySelector('.user-name').textContent = localStorage.getItem('name')
}
getName()

document.querySelector('.change-user-name-btn').addEventListener('click', function () {
    if(localStorage.getItem('name')){
        localStorage.removeItem('name')
        getName()
    }
})