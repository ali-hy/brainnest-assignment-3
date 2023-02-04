const roundTo2DecimalPlaces = (n) => {
  return Math.round(n * 100) / 100;
}

function getDiagonalOfSquare(sideLength){
  return Math.sqrt(2 * (sideLength**2));
}

function getTriangleSemiParameter(a, b, c){
  return (a + b + c)/2;
}

function getAreaOfTriangle(a, b, c){
  const semiParameter = getTriangleSemiParameter(a, b, c);
  return Math.sqrt(semiParameter*(semiParameter - a)*(semiParameter - b)*(semiParameter -c));
}

function getCircumfrence(radius){
  return 2 * Math.PI * radius;
}

function getAreaOfCircle(radius){
  return Math.PI * (radius ** 2);
}

function mathematicalShapesProgram(){
  print("This is the mathematical shapes program");
  print("Diagonal of a square where the length of each side is 9: "
    + roundTo2DecimalPlaces(getDiagonalOfSquare(9)));
  print("Area of a triangle with sides 5, 6, and 7 is: "
    + roundTo2DecimalPlaces(getAreaOfTriangle(5, 6, 7)));
  print(`Given a circle with radius 4
    Its cicumfrance is: ${roundTo2DecimalPlaces(getCircumfrence(4))}
    Its area is: ${roundTo2DecimalPlaces(getAreaOfCircle(4))}`);
}
