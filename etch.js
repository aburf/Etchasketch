
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


////////////////////////////////////////////////
///Create slider for grid size slection
////////////////////////////////////////////////

/*<div class="slidecontainer">
  <input type="range" min="1" max="100" value="50" class="slider" id="myRange">
</div>
*/

//parentNode.insertBefore(newNode, referenceNode) //inserts newNode into parentNode before referenceNode
const slidecontainer = document.querySelector('#slidecontainer');
var sliderInput = document.createElement('input');
sliderInput.style.cssText = 'position:absolute;width:100%;height:100%;opacity:0.3;z-index:100;background:#000;';
slidecontainer.appendChild(sliderInput)
//document.body.insertBefore(sliderInput, gridContainer)
//document.body.appendChild(elemDiv);
////////////////////////////////////////////////
////////////////////////////////////////////////

