const cont = document.querySelector(".container");
for (let i=0; i<= 16; i++){
    const board = document.createElement('div');
    board.className = "grid";
    cont.appendChild(board);
}