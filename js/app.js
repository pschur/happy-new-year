const fireworkContainer = document.querySelector('.fireworks-container')
const daysSpan = document.querySelector('#days')
const hoursSpan = document.querySelector('#hours')
const minutesSpan = document.querySelector('#minutes')
const secondsSpan = document.querySelector('#seconds')

const newYear = 2022 // now.getFullYear() + 1

const now = new Date()
const fireworks = new Fireworks(fireworkContainer, {
    speed: 4,
    acceleration: 1.05,
    friction: 1,
    gravity: 4,
    particles: 400,
    explosion: 10
})



document.querySelector('#new-year').innerHTML = newYear

const countToDate = new Date(newYear, 0, 1).getTime()

const countdown = () => {
    const now = new Date().getTime()

    const distance = countToDate - now

    const days = Math.floor(distance / (1000 * 60 * 60 * 24))
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((distance % (1000 * 60)) / 1000)

    daysSpan.innerHTML = days
    hoursSpan.innerHTML = hours
    minutesSpan.innerHTML = minutes
    secondsSpan.innerHTML = seconds

    if (distance < 0) {
        fireworks.start()
        clearInterval(countdownInterval)
    }
}

countdown()

const countdownInterval = setInterval(function(){
    countdown()
}, 500)
