/*----- constants -----*/
/*----- app's state (variables) -----*/
/*----- cached element references -----*/
/*----- event listeners -----*/
/*----- functions -----*/

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