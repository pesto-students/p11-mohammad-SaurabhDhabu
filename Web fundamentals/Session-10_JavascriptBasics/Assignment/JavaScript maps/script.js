function calcWordFrequencies() {
  var commaSeperated = prompt("Enter comma sepereated numbers");
  // creating a list of values to iterate
  var list = commaSeperated.split(" ");
  var newMap = new Map();
  for (let index = 0; index < list.length; index++) {
    const element = list[index];
    if (newMap.has(element)) {
      newMap.set(element, newMap.get(element) + 1);
    } else {
      newMap.set(element, 1);
    }
  }
  newMap.forEach((value, key) => {
    console.log(key, value);
  });
}
