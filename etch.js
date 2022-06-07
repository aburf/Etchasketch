
let element  = document.getElementById('gridContainer'); 
let fragment = document.createDocumentFragment();
let gridSize = 16;
let squaresArr = [];
for (let i = 0; i<gridSize; i++){
    squaresArr.push('square'+(i+1));
    console.log(squaresArr[i]);
    }

squaresArr.forEach(function(sqArr) {
    let square = document.createElement('div');
    square.textContent = sqArr;
    fragment.appendChild(square);
});

element.appendChild(fragment);
