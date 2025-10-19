const cont = document.querySelector(".container");
const btn = document.querySelector(".btn")

const getGrid = (num) => {
    let count = 1
    for ( let i = 0; i < num; i++){
        const row = document.createElement('div');
        row.className ="row"
        for ( let j = 0; j < num; j++){
            const cell = document.createElement('div');
            cell.className = "cell";
            row.appendChild(cell);
            cell.textContent = count;
            count++;
            cell.addEventListener("mouseenter", () => {
                cell.style.backgroundColor = "#3B9797";
            })
        }
        cont.appendChild(row);
    }
}

btn.addEventListener("click",() => {
cont.innerHTML = "";
const number = prompt("Enter your number:");
getGrid(number);
});
