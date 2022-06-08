
//Create variables that will be turned into DOM fragments
//Fragments all get added to the DOM at one time
let element  = document.getElementById('gridContainer'); 
let fragment = document.createDocumentFragment();
let gridSize = 16;
let squaresArr = [];

//This creates all of the squares into squareArray
for (let i = 0; i<gridSize; i++){
    squaresArr.push('square'+(i+1));
    console.log(squaresArr[i]);
    }

squaresArr.forEach(function(sqArr) {
    let square = document.createElement('div');
    square.classList.add(sqArr);
    console.log(sqArr)
    //square.textContent = sqArr;
    fragment.appendChild(square);
});

element.appendChild(fragment);


var item = document.getElementById("button");
item.addEventListener("mouseover", func, false);

function func()
{  
   var item = document.getElementById("button");
   item.setAttribute("style", "background-color:blue;")
}
