const clock = document.querySelector('h2#clock');
let hour = '';
let minutes = '';
let seconds = '';

function setTime(){
    let now = new Date();
    hour = now.getHours().toString().padStart(2,'0');
    minutes = now.getMinutes().toString().padStart(2,'0');
    seconds = now.getSeconds().toString().padStart(2,'0');
    clock.innerHTML = `${hour}:${minutes}:${seconds}`;
}
setTime();
setInterval(setTime, 1000);
