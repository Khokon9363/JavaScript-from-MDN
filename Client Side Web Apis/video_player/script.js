// ---------- Build a video player ------------

let media = document.querySelector('video')
let controls = document.querySelector('.controls')

let play = document.querySelector('.play')
let stop = document.querySelector('.stop')
let rwd = document.querySelector('.rwd')
let fwd = document.querySelector('.fwd')

let timerWrapper = document.querySelector('.timer')
let timer = document.querySelector('.timer span')
let timerBar = document.querySelector('.timer div')
let intervalFwd, intervalRwd

media.removeAttribute('controls') // remove the default video controls from the video element

play.addEventListener('click', playPauseMedia) // play or pause
stop.addEventListener('click', stopMedia) // stop video
media.addEventListener('ended', stopMedia) // stop video
rwd.addEventListener('click', mediaBackward) // back
fwd.addEventListener('click', mediaForward) // forward
media.addEventListener('timeupdate', setTime) // update in in second using timeupdate event

function playPauseMedia() {
  rwd.classList.remove('active') // change icon
  fwd.classList.remove('active') // change icon
  clearInterval(intervalRwd)
  clearInterval(intervalFwd)
  if(media.paused) { // play if paused
    play.setAttribute('data-icon','u')
    media.play()
  } else { // paused if play
    play.setAttribute('data-icon','P')
    media.pause()
  }
}

function stopMedia() { // stop the video when ended or click on stop button
  media.pause()
  media.currentTime = 0
  rwd.classList.remove('active')
  fwd.classList.remove('active')
  clearInterval(intervalRwd)
  clearInterval(intervalFwd)
  play.setAttribute('data-icon','P')
}

function mediaBackward() { // Backward
  clearInterval(intervalFwd)
  fwd.classList.remove('active')

  if(rwd.classList.contains('active')) {
    rwd.classList.remove('active')
    clearInterval(intervalRwd)
    media.play()
  } else {
    rwd.classList.add('active')
    media.pause()
    intervalRwd = setInterval(windBackward, 200)
  }
}

function mediaForward() { // Forward
  clearInterval(intervalRwd)
  rwd.classList.remove('active')

  if(fwd.classList.contains('active')) {
    fwd.classList.remove('active')
    clearInterval(intervalFwd)
    media.play()
  } else {
    fwd.classList.add('active')
    media.pause()
    intervalFwd = setInterval(windForward, 200)
  }
}

function windBackward() { // minus duration of the video element on forward
  if(media.currentTime <= 3) {
    stopMedia()
  } else {
    media.currentTime -= 3
  }
}

function windForward() { // plus duration of the video element on forward
  if(media.currentTime >= media.duration - 3) {
    stopMedia()
  } else {
    media.currentTime += 3
  }
}

function setTime() {
  let minutes = Math.floor(media.currentTime / 60)
  let seconds = Math.floor(media.currentTime - minutes * 60)
  let minuteValue, secondValue

  if (minutes < 10) {
    minuteValue = '0' + minutes
  } else {
    minuteValue = minutes
  }

  if (seconds < 10) {
    secondValue = '0' + seconds
  } else {
    secondValue = seconds
  }

  let mediaTime = minuteValue + ':' + secondValue
  timer.textContent = mediaTime

  let barLength = timerWrapper.clientWidth * (media.currentTime/media.duration)
  timerBar.style.width = barLength + 'px'
}