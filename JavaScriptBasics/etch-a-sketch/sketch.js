const container = document.querySelector(".container");
const containerWidth = container.clientWidth;
//the defaut number of squares in each side.
//e.g  16x16 implies the squareNumEachSide is  16
let squareNumEachSide = 16;
//the variable indicates if the sub elements of container  is being clicked.
let isContainerClicked = false;
let lastMouseDownElement = document.body;

/* the variables about buttons */
const blackModeBtn = document.querySelector("#blackModeBtn");
const eraserBtn = document.querySelector("#eraserBtn");
const rainbowModeBtn = document.querySelector("#rainbowModeBtn");
const clearBtn = document.querySelector("#clearBtn");
const setGridBtn = document.querySelector("#setGridBtn");

const unclickedBtnBackgroundColor = "#ededed";
const clikedBtnBackgroundColor = "#d7ab4c";

//the button clicked last time,We just take blackModeBtn,eraserBtn,rainbowModeBtn into account
let lastClickBtn = blackModeBtn;
//the currentSquareColor ONLY applies to Black Mode abd Eraser,but not to Rainbow Mode.
let currentSquareColor = "black";
let isRainBowModeOn = false;

function getRandomColor() {
  let r = Math.round(Math.random() * 255).toString(16);
  let g = Math.round(Math.random() * 255).toString(16);
  let b = Math.round(Math.random() * 255).toString(16);
  let color = "#" + r + g + b; //Note r,g,b are all strings
  return color;
}

document.body.addEventListener("mousedown", (event) => {
  lastMouseDownElement = event.target;
  //if one of container's subelements is being mousedown
  if (lastMouseDownElement.parentNode === container) {
    if (isRainBowModeOn) {
      lastMouseDownElement.style.backgroundColor = getRandomColor();
    } else {
      lastMouseDownElement.style.backgroundColor = currentSquareColor;
    }
    isContainerClicked = true;
  }
});

document.body.addEventListener("mouseup", (event) => {
  isContainerClicked = false;
});

container.addEventListener("mouseover", (event) => {
  //if one of container's subelements is being mouseover
  if (event.target.parentNode === container) {
    if (isContainerClicked === true) {
      if (isRainBowModeOn) {
        event.target.style.backgroundColor = getRandomColor();
      } else {
        event.target.style.backgroundColor = currentSquareColor;
      }
    }
  }
});

// We just take blackModeBtn,eraserBtn,rainbowModeBtn into account
function switchBtn(event) {
  lastClickBtn.style.backgroundColor = unclickedBtnBackgroundColor;
  event.target.style.backgroundColor = clikedBtnBackgroundColor;
  lastClickBtn = event.target;
}

/*Black Mode */
blackModeBtn.addEventListener("click", (event) => {
  switchBtn(event);
  currentSquareColor = "black";
  isRainBowModeOn = false;
});

/*Eraser */
eraserBtn.addEventListener("click", (event) => {
  switchBtn(event);
  currentSquareColor = "white";
  isRainBowModeOn = false;
});

/*Rainbow Mode */
rainbowModeBtn.addEventListener("click", (event) => {
  switchBtn(event);
  isRainBowModeOn = true;
});

/*Clear */
clearBtn.addEventListener("click", (event) => {
  let girdNodes = container.childNodes;
  for (const node of girdNodes) {
    node.style.backgroundColor = "white";
  }
});

function removeSquares() {
  //remove all children of container
  container.replaceChildren();
}

function createSquares(_squareNumEachSide = squareNumEachSide) {
  const squareWidth = containerWidth / _squareNumEachSide; //the width of each square
  for (let i = 0; i < _squareNumEachSide * _squareNumEachSide; i++) {
    const div = document.createElement("div");
    div.style.width = squareWidth + "px"; //Note it is  squareWidth+"px" instead of squareWidth.
    div.classList.add("defaultGrid");
    container.appendChild(div);
  }
}

/*set Grid */
setGridBtn.addEventListener("click", (event) => {
  let str = prompt(
    "Enter the number of  squares each side,\nIt should be between 1 and 100"
  );

  if (str === null || str.trim() === "" || isNaN(+str)) {
    alert("Enter a number");
  } else {
    num=+str;
    if (num <= 0 || num > 100) {
      alert("the number should range from 1 to 100");
    } else {
      removeSquares();
      squareNumEachSide = num;
      createSquares(squareNumEachSide);
    }
  }
});

createSquares(squareNumEachSide);
