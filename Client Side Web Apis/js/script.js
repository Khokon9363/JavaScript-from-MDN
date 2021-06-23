// --------------------- Audio API ----------------------------------
// Start and create an audio instance
const audioContext = window.AudioContext || webkitAudioContext
const audioCTX = new audioContext()

// Catch audio tag, btn and volumeSlider
const audio = document.querySelector('audio')
const btn = document.querySelector('.paused')
const volumeSlider = document.querySelector('.volume')

// Create a audioSource for the audio
const audioSource = audioCTX.createMediaElementSource(audio)

// Play or Pause
btn.addEventListener('click', function () {

    // Check if context is in suspended state (autoplay policy)
    if(audioCTX.state == 'suspended') audioCTX.resume()
    
    // Stop to Start || Start to Stop
    if(this.getAttribute('class') === 'paused'){
        audio.play()
        this.setAttribute('class', 'playing')
        this.textContent = 'Pause'
    }else if(this.getAttribute('class') === 'playing'){
        audio.pause()
        this.setAttribute('class', 'paused')
        this.textContent = 'Play'
    }
})

// Paused if ended
audio.addEventListener('ended', function () {
    btn.setAttribute('class', 'paused')
    btn.textContent = 'Play'
})

// Create Volume Slider
const gainNode = audioCTX.createGain()

volumeSlider.addEventListener('input', function () {
    gainNode.gain.value = this.value
})

// Make ready to run the audio in the computer
audioSource.connect(gainNode).connect(audioCTX.destination)

// ------------------------- JS DOM | CRUD -------------------------
let userInput = document.querySelector('.user-input'), ol = document.querySelector('.book-wrapper'), li, 
    delBtn, editMode = false, editableLi, text, newLi, submitBtn = document.querySelector('.submit-btn')

document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault()
    if(!userInput.value.trim()) return

    if (editMode) {
        update()
    }else if(!editMode){
        store()
    }
    userInput.value = ''
})

function deleteLi(e) {
    ol.removeChild(e)
}

function editLi(e) {
    editMode = true
    submitBtn.textContent = 'Update'
    editableLi = e
    userInput.value = e.textContent.replace('EditDelete', '')
}

function update() {
    text = editableLi.textContent.replace('EditDelete', '')
    newLi = editableLi.innerHTML.replace(text, userInput.value)
    editableLi.innerHTML = newLi
    editMode = false
    submitBtn.textContent = 'Store'
}

function store() {
    li = document.createElement('li')
    li.textContent = userInput.value

    editBtn = document.createElement('button')
    editBtn.textContent = 'Edit'
    editBtn.style.marginLeft = '10px'
    editBtn.style.marginTop = '10px'
    editBtn.setAttribute('onclick', 'editLi(this.parentElement)')

    delBtn = document.createElement('button')
    delBtn.textContent = 'Delete'
    delBtn.style.marginLeft = '10px'
    delBtn.style.marginTop = '10px'
    delBtn.setAttribute('onclick', 'deleteLi(this.parentElement)')

    li.appendChild(editBtn)
    li.appendChild(delBtn)
    ol.appendChild(li)
}