// Start and create an audio instance
const audioContext = window.AudioContext || webkitAudioContext
const audioCTX = new audioContext()

// catch audio tag, btn and volumeSlider
const audio = document.querySelector('audio')
const btn = document.querySelector('.paused')
const volumeSlider = document.querySelector('.volume')

// create a audioSource for the audio
const audioSource = audioCTX.createMediaElementSource(audio)

// Play or Pause
btn.addEventListener('click', function () {
    if(audioCTX.state === 'suspended') audioCTX.resume()
    
    // Stop to Start
    if(this.getAttribute('class') === 'paused'){
        audio.play()
        this.setAttribute('class', 'playing')
        this.textContent = 'Pause'
    }
    // Start to Stop
    if(this.getAttribute('class') === 'playing'){
        audio.pause()
        this.setAttribute('class', 'paused')
        this.textContent = 'Play'
    }
})