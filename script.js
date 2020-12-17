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
document.addEventListener('keydown', (event) => {
    const keyName = event.key;

    if (keyName == 'ArrowDown') {
        boxTop += 4;

    }
    if (keyName == 'ArrowUp') {
        boxTop -= 4;

    }
    if (keyName == 'ArrowLeft') {
        boxLeft -= 4;

    }
    if (keyName == 'ArrowRight') {
        boxLeft += 4;
        mapMove(1, 0);


    }
    document.getElementById("box").style.top = boxTop + "vw";
    document.getElementById("box").style.left = boxLeft + "vw";

});




function mapMove() {

    console.log(map[9][0])

}