
//Create variables that will be turned into DOM fragments
//Fragments all get added to the DOM at one time
let element  = document.getElementById('gridContainer'); 
let fragment = document.createDocumentFragment();
let gridSize = 16;
let squaresArr = [];

////////////////////////////////////////////////
///Create grid dimension input button
////////////////////////////////////////////////

function dimInput() {
  let gridDim = prompt("Please enter square dimensions (less than 100)", 16);
  if (gridDim != null && gridDim <=100) {
    
    //remove pre-existing grid to make way for new one
    const myNode = document.getElementById("gridContainer");
    while (myNode.firstChild) {
      myNode.removeChild(myNode.lastChild);
    }
    
    //make new grid
    makeGrid(gridDim);

    //reassign mouseover coloring
    addMouseColoring();
  }
};
////////////////////////////////////////////////
////////////////////////////////////////////////


////////////////////////////////////////////////
//This creates all of the squares for the grid
//and insert them into the DOM
////////////////////////////////////////////////
function makeGrid(sizeDim){
  for (let i = 0; i<gridSize; i++){
      squaresArr.push('square-'+(i+1));
      console.log(squaresArr[i]);
      }

  squaresArr.forEach(function(sqArr) {
      let square = document.createElement('div');
      square.classList.add('square');
      square.id = sqArr;
      fragment.appendChild(square);
  })
  element.appendChild(fragment);
};

makeGrid(gridSize); //call for initial site load

////////////////////////////////////////////////
////////////////////////////////////////////////


////////////////////////////////////////////////
///Add mouseover event
////////////////////////////////////////////////
function addMouseColoring(){
  const hoverSquares = document.querySelectorAll('.square');

  hoverSquares.forEach(box => {
    box.addEventListener('mouseover', function hoverEvent(event) {
      console.log('box hovered', event);
      box.setAttribute('style', 'background-color: black;');
    });
  });
};

addMouseColoring(); //call for initial site load
////////////////////////////////////////////////
////////////////////////////////////////////////




