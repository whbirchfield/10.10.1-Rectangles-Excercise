
let lengthOfrectangle = Number(50);
let heightOfrectangle = Number(7);

function makeLine (lengthOfrectangle){
let rectangleLength = "";
  for (i=0; i<lengthOfrectangle; i++){
    rectangleLength += "#";
  }
  return rectangleLength;
}

console.log(makeRectangle(lengthOfrectangle,heightOfrectangle));

function makeRectangle (width, height){
  let rectangle = "";
  for (let i = 0; i< height; i++){
    rectangle += makeLine(width) + "\n";
  }
  return rectangle;
}