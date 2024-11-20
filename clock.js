let hr = document.querySelector('#hrs')
let min = document.querySelector('#min')
let sec = document.querySelector('#sec')

setInterval(() => {
    let day = new Date();
    let hh = new Date().getHours() * 30;
    let mm = new Date().getMinutes() * 6;
    let ss = new Date().getSeconds() * 6;

    hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
    min.style.transform = `rotateZ(${mm}deg)`
    sec.style.transform = `rotateZ(${ss}deg)`


//digital clock

let h = document.getElementById('hours')
let m = document.getElementById('minutes')
let s = document.getElementById('seconds')
let time = document.getElementById('ampm')



let hour = new Date().getHours();
let minu = new Date().getMinutes();
let seco = new Date().getSeconds();


let pm = hour >= 12 ? 'PM' : 'AM';


if (hour > 12) {
    hour = hour - 12
}

h.innerHTML = hour;
m.innerHTML = minu;
s.innerHTML = seco;
time.innerHTML = pm;
})
