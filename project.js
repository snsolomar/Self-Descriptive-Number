//An integer is said to be self-descriptive if it has the property that, when digit positions are labeled 0 to N-1, the digit in each position is equal to the number of times that this digit appears in the number. Write a function that will check whether a given positive integer is self-descriptive.

function isSelfDescribing(num) {
  //turn number array into a string so we can split each number into a character
  //map will allow us to do something to each element in the array
  //go into the string and turn each character into a number and return it into the new array
  //array will now look like [1,2,3] instead of 123
  let numArray = String(num)
    .split("")
    .map((str) => Number(str));

  let i = 0;
  for (const currentIndex of numArray) {
    //check to see how times times the current index appears in the numArray
    //does that total match the current element/number for this iteration
    if (numArray.filter((number) => number === i).length === currentIndex) {
      //incremenet i to get to the next interation of the loops
      i++;
      continue;
    } else {
      return false;
    }
  }
  return true;
}

// console.log(isSelfDescribing(1210)); //[1,2,1,0]
// console.log(isSelfDescribing(2020));
// console.log(isSelfDescribing(21200));
// console.log(isSelfDescribing(3211000));

//Generate all self-descriptive numbers that will fit in a 32-bit integer. There are 6 such integers:

function checkSelfDescribing() {
  for (let i = 0; i < 100000; i++) {
    if (isSelfDescribing(i) === true) {
      console.log(i);
    } else {
      continue;
    }
  }
}
checkSelfDescribing();
