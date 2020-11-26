const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');
const progress = document.getElementById('progress');

function showCurrentTime() {
    let date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    hour.textContent = hr;
    minute.textContent = min;
    second.textContent = sec;

    progress.style.width = (sec / 60) * 100 + '%'
}

setInterval(showCurrentTime, 1000)