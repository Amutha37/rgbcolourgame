// starting level with 6 colours
let numOfSquares = 6;
// Generating 6 random colour for the squares
let colorSet = colorGenerator(numOfSquares);

// declaring the DOM element and pick a  colour for the game

let squares = document.querySelectorAll(".square");
colorAssign();
let gameColor = gameColorPicked();
let header = document.querySelector(".header");
let newColBut = document.querySelector("#newColBut");
let randomRbg = document.getElementById("randomRbg");
var easyHard = document.querySelectorAll(".easyHard");
let winmsg = document.getElementById("winmsg");
newColBut.textContent = "New Colors";

// game level mode
for (let i = 0; i < easyHard.length; i++) {
  easyHard[i].addEventListener("click", function () {
    easyHard[0].classList.remove("selected");
    easyHard[1].classList.remove("selected");
    this.classList.add("selected");

    this.textContent === "EASY" ? (numOfSquares = 3) : (numOfSquares = 6);
    setDisplay();
  });
}

// // set initial backgroud colour for heading
// header.style.backgroundColor = "#08854b";

// new colour set the color for new set
function setDisplay() {
  //  generate new sets of colors

  let colorSet = colorGenerator(numOfSquares);
  colorAssign();

  //pick a new random color from array
  gameColor = gameColorPicked();

  // display the random picked rbg color

  randomRbg.textContent = gameColor;
  // colorDisplay.textContent = pickedColor;
  newColBut.textContent = "New Colors";
  winmsg.textContent = "";
  //change colors of squares
  for (let i = 0; i < squares.length; i++) {
    if (colorSet[i]) {
      squares[i].style.display = "block";
      squares[i].style.background = colorSet[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  header.style.background = "#054d2b";
}
// CHOOSE NEW SET OF COLOURS  OR RESTART THE GAME
newColBut.addEventListener("click", function () {
  //  generate new sets of colors
  // debugger;

  setDisplay();
  // debugger;
});

randomRbg.textContent = gameColor;
// assing a random colour to all the squares

function colorAssign() {
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colorSet[i];
  }
}

// click the squares to match up
for (i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click", function () {
    // Assigning the clicked colour to a variable
    let thisClickedColor = this.style.backgroundColor;
    // COMPARE THE CLICKED COLOUR WITH GAME CHOICE COLOUR
    // console.log("gamecolor" + gameColor);
    if (thisClickedColor === gameColor) {
      // Display winning message and sudgest to play again
      winmsg.textContent = "YEAH! YOU MATCHED IT !";
      // easyHard.classList.remove("selected");
      newColBut.textContent = "PLAY AGAIN?";

      // After winning all the squares and the header background change to winning colour
      // debugger;
      changeAllSquare(gameColor);

      header.style.backgroundColor = thisClickedColor;
    } else {
      this.style.backgroundColor = "rgb(17, 17, 17)";
      winmsg.textContent = "KEEP TRYING!";
    }
  });
}
// loop through to change all squares to winning matching colour
function changeAllSquare(wincolor) {
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = wincolor;
  }
}
// the game pick a random array index for from the   colors
function gameColorPicked() {
  let ranColPick = Math.floor(Math.random() * arrayCol.length);
  return arrayCol[ranColPick];
}
// Generating 6 random colours for 6 squares
function colorGenerator(numbox) {
  // create a set of 6 randon colour array
  arrayCol = [];
  // set num parameter form fix number of game colour box
  for (let i = 0; i < numbox; i++) {
    arrayCol.push(rbgColor());
  }
  // return the colour array to colors variable
  return arrayCol;
}

// using JS engine function to create random RBG colours between 1 to 255 (Math.random number is between > Math.random < 1)
function rbgColor() {
  // random rgb RED GREEN BLUE colour picked  between 1 to 255
  let red = Math.floor(Math.random() * 256);
  let grn = Math.floor(Math.random() * 256);
  let blu = Math.floor(Math.random() * 256);
  //
  let rgbc = "rgb(" + red + ", " + grn + ", " + blu + ")";
  if (rgbc == "rgb(17, 17, 17)") {
    rbgColor();
  } else {
    return rgbc;
  }
}
