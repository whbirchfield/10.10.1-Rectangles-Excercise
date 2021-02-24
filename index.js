
let lengthOfrectangle = Number(50);
let heightOfrectangle = Number(7);
let squareSides = Number(20);
let downwardStairs = 15;

function makeLine (lengthOfrectangle){
let rectangleLength = "";
  for (let i=0; i<lengthOfrectangle; i++){
    rectangleLength += "#";
  }
  return rectangleLength;
}

function makeRectangle (width, height){
  let rectangle = "";
  for (let i = 0; i< height; i++){
    rectangle += makeLine(width) + "\n";
  }
  return rectangle;
}
console.log(makeRectangle(lengthOfrectangle,heightOfrectangle));

function makeSquare(sides){
  let square = "";
  for (let i = 0; i<sides; i++){
    square += makeLine(sides) + "\n";
  }
  return square;
}
console.log(makeSquare(squareSides));

function makeDownwardStairs(height){
let downwardStairs = "";
for(let i = 0; i< height; i++){
  downwardStairs += makeLine(i) + "\n";
}
return downwardStairs;
}
console.log(makeDownwardStairs(downwardStairs));

function makeLineSpaces (numSpaces){
let numSpacesDisplay = "";
  for (let i=0; i<numSpaces; i++){
    numSpacesDisplay += "_";
  }
  return numSpacesDisplay;
}

function makeLineChars (numChars){
let numCharsDisplay = "";
  for (let i=0; i<numChars; i++){
    numCharsDisplay += "#";
  }
  return numCharsDisplay;
}

let numSpaces = Number(14);
let numChars = Number (8);

function makeSpaceLine (numSpaces, numChars){
  let spaceLine = "";
      spaceLine = makeLineSpaces(numSpaces) + makeLineChars(numChars) + makeLineSpaces(numSpaces);
  
  return spaceLine;
}
console.log(makeSpaceLine(numSpaces, numChars));

