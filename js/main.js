/*----- constants -----*/

/*----- app's state (variables) -----*/
let winner; // will be player x or play o
let p1;
let p2;
let turn; // 1 for x, 0 for o, x goes first
/*----- cached element references -----*/
const resetEl = document.getElementById('reset');
const boardBtnEls = document.querySelectorAll('.board');
const gameBoard = document.getElementById('gameboard');
/*----- event listeners -----*/
gameBoard.addEventListener('click', handleTicTac);
/*----- functions -----*/
init();
function init() {
    console.log('init baby');
    turn = true;
    p1 = {
        icon : 'X'
    };
    p2 = { 
        icon : 'O'
    };
    winner = null;
    for (let btn of boardBtnEls) {
        btn.textContent = " ";
    }
    render();
}

function render() {
    //whos turn it is will go here in an html element
    //
    renderButtons();
}

function renderButtons() {
    boardBtnEls.forEach(function(btn) {

    })
}

function handleTicTac(evt) {
    let btn = evt.target;
    if (btn.tagName !== 'BUTTON') return;

    btn.textContent = (turn) ? 'X' : 'O';
    turn = !turn;
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