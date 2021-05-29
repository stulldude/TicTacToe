/*----- constants -----*/

/*----- app's state (variables) -----*/
let winner; // will be player x or play o
let p1;
let p2;
let turn; // 1 for x, 0 for o, x goes first
let count;
/*----- cached element references -----*/
const resetEl = document.getElementById('reset');
const boardBtnEls = document.querySelectorAll('.board');
const gameBoard = document.getElementById('gameboard');
const turnEl = document.getElementById('turn');
const b1El = document.getElementById('board1');
const b2El = document.getElementById('board2');
const b3El = document.getElementById('board3');
const b4El = document.getElementById('board4');
const b5El = document.getElementById('board5');
const b6El = document.getElementById('board6');
const b7El = document.getElementById('board7');
const b8El = document.getElementById('board8');
const b9El = document.getElementById('board9');


/*----- event listeners -----*/
gameBoard.addEventListener('click', handleTicTac);
resetEl.addEventListener('click', init);
/*----- functions -----*/
init();
function init() {
    count = 0;
    turn = true;
    winner = null;
    for (let btn of boardBtnEls) {
        btn.textContent = " ";
    }
    render();
}

function render() {
    turnStatus();
    //whos turn it is will go here in an html element
    //
    getWinnerStatus();

    //renderButtons();
}

function turnStatus() {
    (turn) ? turnEl.innerText = (`X'S TURN`) : turnEl.innerText = (`O'S TURN`);
}

function getWinnerStatus() {
    horiCheck();
    vertCheck();
    diagCheck();
    if (winner != null) {
        turnEl.innerText = `${winner} WON`;
        disableBtns();
    }
    if (count == 9) {
        turnEl.innerText = 'TIE';
    }
}

function horiCheck() {
    for (let i = 1; i <= 7; i += 3) {
        const iText = document.getElementById(`board${i}`).innerText;
        if (iText === 'X' || iText === 'O'){
            if (iText === document.getElementById(`board${i+1}`).innerText 
            && iText === document.getElementById(`board${i+2}`).innerText)
            winner = iText;
        }
    }
}

function vertCheck() {
    for (let i = 1; i < 4; i++) {
        const iText = document.getElementById(`board${i}`).innerText;
        if (iText === 'X' || iText === 'O'){
            if (iText === document.getElementById(`board${i+3}`).innerText 
            && iText === document.getElementById(`board${i+6}`).innerText)
            winner = iText; 
        } 
    }
}

function diagCheck() {
    if (b1El.innerText === 'X' || b1El.innerText === 'O') {
        if (b1El.innerText === b5El.innerText && b1El.innerText === b9El.innerText) {
            winner = b1El.innerText;
        }
    }
    if (b3El.innerText === 'X' || b3El.innerText === 'O') {
        if (b3El.innerText === b5El.innerText && b3El.innerText === b7El.innerText) {
            winner = b3El.innerText;
        }
    }
}

function handleTicTac(evt) {
    let btn = evt.target;
    if (btn.tagName !== 'BUTTON') return;

    btn.textContent = (turn) ? 'X' : 'O';
    btn.disabled = true;
    turn = !turn;
    count++;
    render();
}

function disableBtns() {
    boardBtnEls.forEach(function(btn) {
        btn.disabled = true;
    });
}
/*----- win logic -----
a win  could be any of the following : 
horizontal -> if a player holds btn's '1' '2' '3' or '4' '5' '6' or '7' '8' '9', they win
1 2 3
4 5 6
7 8 9
vertical -> if a player holds btn's '1' '4' '7' or '2' '5' '9' or '3' '6' '9', they win
1 4 7
2 5 8
3 6 9
diagonal -> if a player holds btn's '1' '5' '9' or '3' '5' '7', they win
1 5 9
3 5 7

if all buttons are filled, but none of the above checks occur, it's a tie
*/

/*----- reset logic -----
call init
*/