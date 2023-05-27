//-- Yield Keyword

// In JavaScript, the yield keyword is used in the context of generator functions. 
// When yield is encountered inside a generator function, it pauses the execution of the function and 
// produces a value that can be consumed by an iterator.

// -- Symbol function
// Yield Symbol(string) is used to yield a symbol based on each string in the array.

function stringSymbols(arr) {
  for (let str of arr) {
    yield Symbol(str);
  }
}

const arr = ["hello", "world", "test"];
const symbolIterator = stringSymbols(arr);

console.log(symbolIterator.next().value);
console.log(symbolIterator.next().value);
console.log(symbolIterator.next().value);
