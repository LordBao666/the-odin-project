const container = document.querySelector(".container");
const containerWidth = container.clientWidth;
console.log(containerWidth)
//the defaut number of squares in each side. 
//e.g  16x16 implies the squareNumEachSide is  16
const squareNumEachSide = 80; 

let currentColor = "black"
//the variable indicates if the sub elements of container  is being clicked.
let isContainerClicked = false;
let lastMouseDownElement = document.body


document.body.addEventListener("mousedown",(event)=>{
  lastMouseDownElement = event.target;
  //if one of container's subelements is being mousedown
  if (lastMouseDownElement.parentNode === container) {
    lastMouseDownElement.style.backgroundColor = currentColor;
    isContainerClicked = true;
  }
});

document.body.addEventListener("mouseup", (event) => {
    isContainerClicked = false;
});


container.addEventListener("mouseover", (event) => {
  //if one of container's subelements is being mouseover
  if(event.target.parentNode===container){
    if(isContainerClicked===true){
      event.target.style.backgroundColor=currentColor;
    }
  }
});




function createSquares(_squareNumEachSide=squareNumEachSide){
    const squareWidth=containerWidth / _squareNumEachSide;//the width of each square
    console.log(squareWidth)
    for(let i=0;i<_squareNumEachSide * _squareNumEachSide;i++){
      const div = document.createElement("div");
      div.style.width = squareWidth + "px"; //Note it is  squareWidth+"px" instead of squareWidth.
      div.classList.add("defaultGrid");
      container.appendChild(div);
    }
}

createSquares(squareNumEachSide)