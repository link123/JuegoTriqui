// Manejo de las casillas
let turno = 0;
const tablero = [];
const nodes = document.getElementsByTagName('button');

function myClick(e, index) {
    const btn = e.target;

    btn.disabled = true;

    turno++;

    pintar(turno, btn, index);


}

function pintar(turno, btn, index) {

    if (turno % 2 === 0) {
        console.log();

        btn.innerHTML = 'O';
        btn.style.fontSize = `${50}px`;
        llenarTablero(index, btn, 'O');
    } else {
        btn.innerHTML = 'X';
        btn.style.fontSize = `${50}px`;
        llenarTablero(index, btn, 'X');
    }


}

function llenarTablero(index, btn, XO) {
    tablero[index] = XO;
    console.log(index + ' ' + XO);
    validarGanador();
}

function validarGanador() {

    if (tablero[0] == tablero[1] && tablero[1] == tablero[2] && tablero[0]) {
        nodes[0].style.backgroundColor = 'red';
        nodes[1].style.backgroundColor = 'red';
        nodes[2].style.backgroundColor = 'red';
        setTimeout(function mostrar() { alert('gano'); }, 1000);
    }
    if (tablero[3] == tablero[4] && tablero[4] == tablero[5] && tablero[3]) {
        nodes[3].style.backgroundColor = 'red';
        nodes[4].style.backgroundColor = 'red';
        nodes[5].style.backgroundColor = 'red';

        setTimeout(function mostrar() { alert('gano'); }, 1000);
    }
    if (tablero[6] == tablero[7] && tablero[7] == tablero[8] && tablero[6]) {
        nodes[6].style.backgroundColor = 'red';
        nodes[7].style.backgroundColor = 'red';
        nodes[8].style.backgroundColor = 'red';

        setTimeout(function mostrar() { alert('gano'); }, 1000);
    }


    if (tablero[0] == tablero[3] && tablero[3] == tablero[6] && tablero[0]) {

        nodes[0].style.backgroundColor = 'red';
        nodes[3].style.backgroundColor = 'red';
        nodes[6].style.backgroundColor = 'red';

        setTimeout(function mostrar() { alert('gano'); }, 1000);
    }
    if (tablero[1] == tablero[4] && tablero[4] == tablero[7] && tablero[1]) {
        nodes[1].style.backgroundColor = 'red';
        nodes[4].style.backgroundColor = 'red';
        nodes[7].style.backgroundColor = 'red';

        setTimeout(function mostrar() { alert('gano'); }, 1000);
    }
    if (tablero[2] == tablero[5] && tablero[5] == tablero[8] && tablero[2]) {
        nodes[2].style.backgroundColor = 'red';
        nodes[5].style.backgroundColor = 'red';
        nodes[8].style.backgroundColor = 'red';

        setTimeout(function mostrar() { alert('gano'); }, 1000);
    }


    if (tablero[0] == tablero[4] && tablero[4] == tablero[8] && tablero[0]) {
        nodes[0].style.backgroundColor = 'red';
        nodes[4].style.backgroundColor = 'red';
        nodes[8].style.backgroundColor = 'red';

        setTimeout(function mostrar() { alert('gano'); }, 1000);
    }
    if (tablero[6] == tablero[4] && tablero[4] == tablero[2] && tablero[6]) {

        nodes[6].style.backgroundColor = 'red';
        nodes[4].style.backgroundColor = 'red';
        nodes[2].style.backgroundColor = 'red';

        setTimeout(function mostrar() { alert('gano'); }, 1000);
    }




}

document.querySelectorAll("button").forEach((obj, i) =>
    obj.addEventListener("click", (e) => myClick(e, i)));