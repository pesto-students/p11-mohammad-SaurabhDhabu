const divideArray = function (numbers) {
  var numbers = numbers.sort();
  let evenArray = [];
  let oddArray = [];

  numbers.forEach((element) => {
    element % 2 === 0 ? evenArray.push(element) : oddArray.push(element);
  });

  console.log("Even numbers: ");
  if (evenArray.length) {
    evenArray.forEach((element) => {
      console.log(element);
    });
  } else {
    console.log("None");
  }
  console.log("Odd numbers: ");
  if (oddArray.length) {
    oddArray.forEach((element) => {
      console.log(element);
    });
  } else {
    console.log("None");
  }
};
