const APP_URL = 'https://pschur.github.io/happy-new-year/';

const fireworkContainer = document.querySelector('.fireworks-container')
const daysSpan = document.querySelector('#days')
const hoursSpan = document.querySelector('#hours')
const minutesSpan = document.querySelector('#minutes')
const secondsSpan = document.querySelector('#seconds')
const now = new Date()

const queryString = window.location.search;
const url = new URLSearchParams(queryString);

const newYear =  parseInt(url.has('year') ? url.get('year') : now.getFullYear()) + 1


if (url.has('utm_source') && localStorage.getItem("seo") != 'OK'){
    let seo = 'https://paul-schur.000webhostapp.com/seo.php?utm_source=' + url.get('utm_source') + '&utm_target=happy-new-year';
    if (url.has('from')) {
        seo += '&from=' + url.get('from')
    }

    fetch(seo);
    localStorage.setItem("seo", "OK");

    window.location.href = 'https://pschur.github.io/happy-new-year/?year=' + (newYear - 1)
}

if ((now.getFullYear() + 1) != newYear) {
    document.getElementById('back').innerHTML = `<a href="./?year=${now.getFullYear()}">Zurück</a>`
}

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
        end();
    }
}

function end(){
    fireworks.start()
    document.getElementById('head-title').innerHTML = '<b>Willkommen im Jahr ...</b>'
    clearInterval(countdownInterval)
    
    daysSpan.innerHTML = 0
    hoursSpan.innerHTML = 0
    minutesSpan.innerHTML = 0
    secondsSpan.innerHTML = 0
    sec = 1800 // 30min
    //sec = 36000 // 1h

    const wait = setInterval(function(){
        sec--;
        
        //secondsSpan.innerHTML = sec
        
        if (sec == 0){
            next();
        }
    }, 1000);
}

function next(){
    window.location.href = APP_URL + '?year=' + newYear
}

countdown()

const countdownInterval = setInterval(function(){
    countdown()
}, 500)
