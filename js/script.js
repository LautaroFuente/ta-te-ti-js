const $cross = document.getElementById('cross');
const $circle = document.getElementById('circle');
const $reset = document.getElementById('reset');

const tableItem = document.querySelectorAll('.table-item');
let turn = 'X';


$cross.addEventListener('click', function(){
    tableItem.forEach(el => el.textContent = '');
    turn = 'X';

})

$circle.addEventListener('click', function(){
    tableItem.forEach(el => el.textContent = '');
    turn = 'O';

})

function checkWinner() {
    const combinations = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
  

    for (let i = 0; i < combinations.length; i++) {
      const [a, b, c] = combinations[i];
  
      if (
        tableItem[a].textContent !== '' &&
        tableItem[a].textContent === tableItem[b].textContent &&
        tableItem[a].textContent === tableItem[c].textContent
      ) {
        return true;
      }
    }
  
    return false;
  }

function resetGame(){
    tableItem.forEach(el => el.textContent = '');
    turn = 'X';
}

function handlerTableClick(e){
    const square = e.target;

    if (square.textContent !== '') return;

    square.textContent = turn;

    if (checkWinner()) {
        setTimeout(function(){
            alert(`¡${turn} ha ganado!`);
            resetGame();
            return;
        },1)
    }

    setTimeout(function(){
        turn = turn === 'X' ? 'O' : 'X';
    },2)

    let full = true;
    for (let i = 0; i < 9; i++){
        if(tableItem[i].textContent === ''){
            full = false;
        }
    }
    if(full){
        setTimeout(function(){
            alert(`¡Empate!`);
            resetGame();
            return;
        },1)
    }
}

tableItem.forEach(el => {el.addEventListener('click', handlerTableClick);});

$reset.addEventListener('click', resetGame);