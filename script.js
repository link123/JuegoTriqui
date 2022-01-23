// Classes

class Game {
    constructor(turn) {
        this.turn = turn;
        this.board;
        this.initializateBoard();
    }
    initializateBoard() {
        this.board = new Board();
    }


    incrementTurn() {
        this.turn++;
    }

    showWinnerMessage(mark) {
        const player1Won = document.getElementById("player1");
        const player2Won = document.getElementById("player2");
        if (mark === 'X')
            player1Won.style.color = 'red';
        else
            player2Won.style.color = 'red';
    }


}



class Box {
    constructor(index, value) {
        this.index = index;
        this.value = value;
    }

    drawItSelf(button, turn) {

        let rightMark = this.knowmyRightMark(turn);
        button.disabled = true;
        button.style.fontSize = `${55}px`;
        button.innerHTML = rightMark;
        game.board.boxList[button.id].value = rightMark;
        this.tellMyEventToBoard();

    }

    knowmyRightMark(turn) {

        if (turn % 2 === 0)
            return 'O';
        return 'X';

    }

    tellMyEventToBoard() {

        game.board.validateWinnerExist();

    }

    touchBox(b) {

        console.log('es prueba');
    }

}

class Board {
    constructor() {
        this.boxList = [];
        this.boxListGrafic = [];

        this.initializeBoxes();
    }

    initializeBoxes() {
        for (let i = 0; i < 9; i++) {
            let box = new Box(i, false);
            this.boxList[i] = box;
        }

        this.boxListGrafic = document.getElementsByTagName('button');


    }

    telloToGameExisLine(mark) {

        game.showWinnerMessage(mark);

    }

    validateWinnerExist() {

        this.validateRow1();
        this.validateRow2();
        this.validateRow3();

        this.validateColumn1();
        this.validateColumn2();
        this.validateColumn3();

        this.validateDiagonal1();
        this.validateDiagonal2();

    }

    validateRow1() {


        if (game.board.boxList[0].value == game.board.boxList[1].value &&
            game.board.boxList[1].value == game.board.boxList[2].value &&
            game.board.boxList[0].value) {
            this.drawLine(0, 1, 2);
            this.telloToGameExisLine(game.board.boxList[0].value);
        }
    }

    validateRow2() {
        if (game.board.boxList[3].value == game.board.boxList[4].value &&
            game.board.boxList[4].value == game.board.boxList[5].value &&
            game.board.boxList[3].value) {
            this.drawLine(3, 4, 5);
            this.telloToGameExisLine(game.board.boxList[3].value);
        }
    }

    validateRow3() {
        if (game.board.boxList[6].value == game.board.boxList[7].value &&
            game.board.boxList[7].value == game.board.boxList[8].value &&
            game.board.boxList[6].value) {
            this.drawLine(6, 7, 8);
            this.telloToGameExisLine(game.board.boxList[6].value);
        }
    }

    validateColumn1() {

        if (game.board.boxList[0].value == game.board.boxList[3].value &&
            game.board.boxList[3].value == game.board.boxList[6].value &&
            game.board.boxList[0].value) {

            this.drawLine(0, 3, 6);
            this.telloToGameExisLine(game.board.boxList[0].value);
        }
    }

    validateColumn2() {

        if (game.board.boxList[1].value == game.board.boxList[4].value &&
            game.board.boxList[4].value == game.board.boxList[7].value &&
            game.board.boxList[1].value) {
            this.drawLine(1, 4, 7);
            this.telloToGameExisLine(game.board.boxList[1].value);
        }
    }

    validateColumn3() {
        if (game.board.boxList[2].value == game.board.boxList[5].value &&
            game.board.boxList[5].value == game.board.boxList[8].value &&
            game.board.boxList[2].value) {
            this.drawLine(2, 5, 8);
            this.telloToGameExisLine(game.board.boxList[2].value);
        }
    }

    validateDiagonal1() {
        if (game.board.boxList[0].value == game.board.boxList[4].value &&
            game.board.boxList[4].value == game.board.boxList[8].value &&
            game.board.boxList[0].value) {
            this.drawLine(0, 4, 8);
            this.telloToGameExisLine(game.board.boxList[0].value);
        }
    }

    validateDiagonal2() {
        if (game.board.boxList[6].value == game.board.boxList[4].value &&
            game.board.boxList[2].value == game.board.boxList[6].value &&
            game.board.boxList[6].value) {
            this.drawLine(6, 4, 2);
            this.telloToGameExisLine(game.board.boxList[6].value);

        }
    }

    drawLine(arg1, arg2, arg3) {
        game.board.boxListGrafic[arg1].style.color = 'red';
        game.board.boxListGrafic[arg2].style.color = 'red';
        game.board.boxListGrafic[arg3].style.color = 'red';
        this.disableAllBoard();
    }

    disableAllBoard() {
        for (let i = 0; i < this.boxListGrafic.length; i++) {
            this.boxListGrafic[i].disabled = true;
        }

    }



}



function touchBox(button) {
    game.incrementTurn();
    game.board.boxList[button.id].drawItSelf(button, game.turn);
}


// Main

let game = new Game(0);