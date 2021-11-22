//Creates and populates the game when the player click on a cell
const game = (()=>{
//Important variables
    let x = 'x';
    let o = 'o';
    let oTurn;
    let declareTurn = document.querySelector('.declare-turn');
    const cells = document.querySelectorAll('.cell');
    const markers = ['','','','','','','','',''];
    let WINNING_COMBO = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
//Adds X or O to the clicked cell if the cell is empty
function playGame () {
    cells.forEach(cell=>{
        cell.addEventListener('click',(e)=>{
            if (cell.classList.contains('x') || cell.classList.contains('o') ) return;
             currentMarker = oTurn ? o : x;
            cell.classList.add(currentMarker);
            oTurn = !oTurn;
            markers.splice(e.target.dataset.index,1,currentMarker);
            checkWinner(currentMarker);
            endResetGame.endGame(false);
            switchDeclareTurn();


        })
    })  
}
playGame();

function switchDeclareTurn () {
    if (oTurn) declareTurn.textContent = `It's ${setGame.player2Score.textContent}'s turn`
    else declareTurn.textContent = `It's ${setGame.player1Score.textContent}'s turn`

}

//Checks for the winner every time a player clicks a cell
function checkWinner (currentMarker) {

    return WINNING_COMBO.some(array=>{
        return array.every(index=>{
            return markers[index] === currentMarker;
        })
    })
};

    
return {checkWinner, markers, cells, playGame, declareTurn}
    
})();







//Mdule that handles the start game menu and adds to the scoreboard or resets the scoreboard
const setGame = (()=>{
//Setting up the DOM
    const player1 = document.querySelector('.ip1');
    const player1Score = document.querySelector('.player1-score');
    const player2 = document.querySelector('.ip2');
    const player2Score = document.querySelector('.player2-score');
    const startButton = document.querySelector('.start-game');
    const overlayStart = document.querySelector('.overlay-Start');

    startButton.addEventListener('click', ()=>{
        player1Score.textContent = player1.value ;
        player2Score.textContent = player2.value ;
        overlayStart.classList.add('out');
        game.declareTurn.textContent = `It's ${player1.value}'s turn`;

        

    })

    
    return {player1Score, player2Score}
})();







//Module that will handle the end of the game
const endResetGame = (()=>{  
    //Important variables  
    const winnerScreen = document.querySelector('.winner-screen')
    const scorep1 = document.querySelector('.score1');
    const scorep2 = document.querySelector('.score2');
    const winnerText = document.querySelector('.winner-text');
    let score1track = 0;
    let score2track = 0;
    const playAgain = document.querySelector('.play-again');
    const reset = document.querySelector('.reset');
//Ends the round when a winner is declared so that none of the players can add anymore content to the board and displays the winner screen which contains 
//the buttons reset or play again and declares the winner
function endGame (check) {
    if (!game.checkWinner(currentMarker)) {
    check =  game.markers.every(mark=>{
        return mark==='x' || mark==='o';
    });
}
if (check) {
    winnerScreen.classList.add('active');
    winnerText.textContent = 'It\'s a draw';
}
else if (game.checkWinner(currentMarker) && currentMarker==='x') {
    winnerScreen.classList.add('active');
    winnerText.textContent = `${setGame.player1Score.textContent} has won the game`;
    score1track++
    scorep1.textContent = score1track;

}
else if (game.checkWinner(currentMarker) && currentMarker==='o') {
    winnerScreen.classList.add('active');
    winnerText.textContent = `${setGame.player2Score.textContent} has won the game`;
    score2track++
    scorep2.textContent = score2track;
}
};

playAgain.addEventListener('click',()=>{

    winnerScreen.classList.remove('active');

    for (let i=0;i<=game.markers.length;i++) {
       if (game.markers[i]==='x' || game.markers[i]==='o') {
           game.markers.splice(i,1,'');
       }
    }
    game.cells.forEach(cell =>{
        cell.classList.remove('x');
        cell.classList.remove('o');
    })
    game.playGame();
});


reset.addEventListener('click', ()=>{


})

return {endGame}
})();
