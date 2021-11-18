//Creates and populates the gameboard when the player click on a cell
const gameBoard = (()=>{
    let x = 'x';
    let o = 'o';
    let oTurn;
    
    const cells = document.querySelectorAll('.cell');
    const markers = ['','','','','','','','',''];
//Adds X or O to the clicked cell if the cell is empty
    cells.forEach(cell=>{
        cell.addEventListener('click',(e)=>{
            
            currentClass = oTurn ? o : x;
            cell.classList.add(currentClass);
            oTurn = !oTurn;
            markers.splice(e.target.dataset.index,1,currentClass)
            checkWinner()
        }, {once:true})
    })
//checks for the winner and returns a screen declaring the winner
    function checkWinner () {
        if (markers[0]==='x' && markers[1]=='x' && markers[2]==='x') {
            console.log('winner');
        }
    }

     return {markers}
})();


//Module that will display the menu 
const displayController = (()=>{


})();

