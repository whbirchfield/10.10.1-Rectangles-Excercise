
let lengthOfrectangle = Number(50);
let heightOfrectangle = Number(7);
let squareSides = Number(5)

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

