
//Create variables that will be turned into DOM fragments
//Fragments all get added to the DOM at one time
let element  = document.getElementById('gridContainer'); 
let fragment = document.createDocumentFragment();
let gridSize = 16;
let squaresArr = [];

////////////////////////////////////////////////
//This creates all of the squares for the grid
//and insert them into the DOM
////////////////////////////////////////////////
for (let i = 0; i<gridSize; i++){
    squaresArr.push('square-'+(i+1));
    console.log(squaresArr[i]);
    }

squaresArr.forEach(function(sqArr) {
    let square = document.createElement('div');
    square.classList.add('square');
    square.id = sqArr;
    fragment.appendChild(square);
});

element.appendChild(fragment);
////////////////////////////////////////////////
////////////////////////////////////////////////


////////////////////////////////////////////////
///Add mouseover event
////////////////////////////////////////////////
const hoverSquares = document.querySelectorAll('.square');

hoverSquares.forEach(box => {
  box.addEventListener('mouseover', function hoverEvent(event) {
    console.log('box hovered', event);
    box.setAttribute('style', 'background-color: black;');
  });
});
////////////////////////////////////////////////
////////////////////////////////////////////////




