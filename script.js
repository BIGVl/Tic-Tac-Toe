//Creates and populates the gameboard
const gameBoard = (()=>{
    let x = 'x';
    let o = 'o';
    let i = 0;
    
    const cells = document.querySelectorAll('.cell');
    const markers = [x,o,x,o,x,o,x,o,x];

    cells.forEach(cell=>{
        cell.classList.add(markers[i]);
        i++
    })

    
})();


//Module that will display the menu 
const displayController = (()=>{

})();

//Object to control the flow of the game
//  const controllGame