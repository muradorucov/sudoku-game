const emptyCells = document.querySelectorAll("td:not(.given-number)");
const numbers = document.querySelectorAll(".number-control");
const candidateSwitch = document.querySelector("#candidate-switch");

let selectedCell;

emptyCells.forEach((cell) => {
    cell.addEventListener("click", () => {
        cell.classList.add('selected');
        if (cell != selectedCell && selectedCell != undefined) {
            selectedCell.classList.remove('selected');
        }
        selectedCell = cell
    })
})


numbers.forEach(number => {
    number.addEventListener('click', () => {
        if (selectedCell) {
            let candinateString = selectedCell.firstElementChild.innerText;
            const innerTextAsNumber = number.innerText;

            if (candidateSwitch.checked) {
                if(candinateString.includes(innerTextAsNumber)){
                    selectedCell.firstElementChild.innerText = candinateString.replace(innerTextAsNumber,' ');
                }else{
                    candinateString += innerTextAsNumber;
                    const str = Array.from(candinateString).sort().join('');
                    selectedCell.firstElementChild.innerText = str;
                }
            }else{
                selectedCell.lastElementChild.innerText = innerTextAsNumber;
            }
        }

    })
})

