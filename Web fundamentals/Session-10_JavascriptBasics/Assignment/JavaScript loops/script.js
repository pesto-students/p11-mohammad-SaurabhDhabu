function drawTriangle(triangleSize) {
  for (let index = 0; index < triangleSize; index++) {
    var string = "";
    for (let row = 0; row < index + 1; row++) {
      string += "x";
    }
    console.log(string);
  }
}
