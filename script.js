//Creates and populates the game when the player click on a cell
const game = (()=>{
    let x = 'x';
    let o = 'o';
    let oTurn;
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
    cells.forEach(cell=>{
        cell.addEventListener('click',(e)=>{
            
             currentMarker = oTurn ? o : x;
            cell.classList.add(currentMarker);
            oTurn = !oTurn;
            markers.splice(e.target.dataset.index,1,currentMarker);
            checkWinner(currentMarker);
            endResetGame.endGame(false);
        }, {once:true})
    })  
//Checks for the winner every time a player clicks a cell
function checkWinner (currentMarker) {

    return WINNING_COMBO.some(array=>{
        return array.every(index=>{
            return markers[index] === currentMarker;
        })
    })
};

    
return {checkWinner, markers}
    
})();


//Module that will display the menu 
const endResetGame = (()=>{    

//Ends the round when a winner is declared so that none of the players can add anymore content to the board and declares the winner
function endGame (check) {
    if (!game.checkWinner(currentMarker)) {
    check =  game.markers.every(mark=>{
        return mark==='x' || mark==='o';
    });
}
if (check) {
    console.log('mata')
}
else if (game.checkWinner(currentMarker) && currentMarker==='x') {

    console.log('x winner')

}
else if (game.checkWinner(currentMarker) && currentMarker==='o') {
    console.log('o winner')
}

    
};

return {endGame}
})();
