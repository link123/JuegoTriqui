// Manejo de las casillas
let turn = 0;
const board = [];
const boxList = document.getElementsByTagName('button');
const player1Won = document.getElementById("player1");
const player2Won = document.getElementById("player2");


document.querySelectorAll("button").forEach((obj, i) =>
    obj.addEventListener("click", (e) => checkBox(e, i)));


function checkBox(e, index) {
    const box = e.target;
    box.disabled = true;
    turn++;
    drawMark(turn, box, index);
}



function drawMark(turn, box, index) {

    if (turn % 2 === 0) {
        box.innerHTML = 'O';
        box.style.fontSize = `${55}px`;
        markBoard(index, box, 'O');
    } else {
        box.innerHTML = 'X';
        box.style.fontSize = `${55}px`;
        markBoard(index, box, 'X');
    }

}

function markBoard(index, box, XO) {
    board[index] = XO;
    validateWinnerExist();
}

function validateWinnerExist() {

    validateRow1();
    validateRow2();
    validateRow3();

    validateColumn1();
    validateColumn2();
    validateColumn3();

    validateDiagonal1()
    validateDiagonal2();

}

function validateRow1() {
    if (board[0] == board[1] && board[1] == board[2] && board[0]) {
        drawLine(0, 1, 2);
        showMessageWinner(board[0]);
    }
}

function validateRow2() {
    if (board[3] == board[4] && board[4] == board[5] && board[3]) {
        drawLine(3, 4, 5);
        showMessageWinner(board[3]);
    }
}

function validateRow3() {
    if (board[6] == board[7] && board[7] == board[8] && board[6]) {
        drawLine(6, 7, 8);
        showMessageWinner(board[6]);
    }
}

function validateColumn1() {

    if (board[0] == board[3] && board[3] == board[6] && board[0]) {
        drawLine(0, 3, 6);
        showMessageWinner(board[0]);
    }
}

function validateColumn2() {

    if (board[1] == board[4] && board[4] == board[7] && board[1]) {
        drawLine(1, 4, 7);
        showMessageWinner(board[1]);
    }
}

function validateColumn3() {

    if (board[2] == board[5] && board[5] == board[8] && board[2]) {
        drawLine(2, 5, 8);
        showMessageWinner(board[2]);
    }
}

function validateDiagonal1() {

    if (board[0] == board[4] && board[4] == board[8] && board[0]) {
        drawLine(0, 4, 8);
        showMessageWinner(board[0]);
    }
}

function validateDiagonal2() {

    if (board[6] == board[4] && board[4] == board[2] && board[6]) {
        drawLine(6, 4, 2);
        showMessageWinner(board[6]);

    }
}


function drawLine(arg1, arg2, arg3) {
    boxList[arg1].style.color = 'red';
    boxList[arg2].style.color = 'red';
    boxList[arg3].style.color = 'red';
    disableAllBoard();
}

function disableAllBoard() {
    for (let i = 0; i < boxList.length; i++) {
        boxList[i].disabled = true;
    }

}

function showMessageWinner(mark) {
    if (mark === 'X')
        player1Won.style.color = 'red';
    else
        player2Won.style.color = 'red';
}