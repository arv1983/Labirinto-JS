const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
];

// cria parede caminho, entrada e saida com divs
for (let i = 0; i < map.length; i++) {
    for (let a = 0; a < map[i].length; a++) {
        var torre = document.createElement('div');
        if (map[i][a] == ' ') {
            torre.setAttribute("id", 'C');
        } else {
            torre.setAttribute("id", map[i][a]);
        }
        document.getElementById('lab').appendChild(torre);
    }
}

'use strict';

let boxTop = 36;
let boxLeft = 8;
let x = 9;
let y = 0;
document.addEventListener('keydown', (event) => {
    start();
    const keyName = event.key;
    if (keyName == 'ArrowDown') {
        boxTop += 4;
        mapMove(1, 0);
    }
    if (keyName == 'ArrowUp') {
        boxTop -= 4;
        mapMove(-1, 0);
    }
    if (keyName == 'ArrowLeft') {
        boxLeft -= 4;
        mapMove(0, -1);
    }
    if (keyName == 'ArrowRight') {
        boxLeft += 4;
        mapMove(0, 1);
    }
    document.getElementById("box").style.top = boxTop + "vw";
    document.getElementById("box").style.left = boxLeft + "vw";

});


function mapMove(a, b) {
    x += a;
    y += b;

    switch (map[x][y]) {
        case 'F':
            console.log('ganhou')

            var para = document.createElement("P");
            para.innerText = "Venceu!";
            document.getElementById("resultado").appendChild(para);

            pause();
            break;
        case 'W':
            console.log('deu parede')
            reinicia();
            break;
        case 'S':
            console.log('voltou ao inicio')
            reset();
            break;
        case ' ':
            console.log('caminho')
            break;
        default:
            console.log('fora')
            reinicia();
    }
}

function reinicia() { // reseta a posição
    boxTop = 36;
    boxLeft = 8;
    x = 9;
    y = 0;
}


let minute = 0;
let second = 0;
let millisecond = 0;

let cron;

function timer() {
    if ((millisecond += 10) == 1000) {
        millisecond = 0;
        second++;
    }
    if (second == 60) {
        second = 0;
        minute++;
    }
    if (minute == 60) {
        minute = 0;
        hour++;
    }

    document.getElementById('minute').innerText = returnData(minute);
    document.getElementById('second').innerText = returnData(second);
    document.getElementById('millisecond').innerText = returnData(millisecond);
}

function returnData(input) {
    return input > 10 ? input : `0${input}`
}


function start() {
    pause();
    cron = setInterval(() => { timer(); }, 10);
}

function pause() {
    clearInterval(cron);
}

function reset() {

    minute = 0;
    second = 0;
    millisecond = 0;

    document.getElementById('minute').innerText = '00';
    document.getElementById('second').innerText = '00';
    document.getElementById('millisecond').innerText = '000';
}