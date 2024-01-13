/**
 * Make sure to read the e17.md file!
 * For this exercise we want you to make custom `maxBy` and `minBy` methods. 
 * In order to do this it is ok to use any type of FOR loops. 
 * REQUIREMENTS: functions should:
 * * Take an array of things
 * * minBy(): Return the element where the callback function on that element yields the lowest value
 * * maxBy(): Return the element where the callback function on that element yields the highest value
 */

export function minBy(array, cb) {
  // Your code goes here..
  if(array.length == 0){
    return undefined;
  }

  let val = array[0];

  for(let ele of array){
    if (cb(ele) < cb(val)) {
      val = ele;
    } else {
      continue;
    };
  };
  return val;
}

// const people = [{name: "jon", age: 30}, {name: "ed", age: 20}]

// const oldestPerson = maxBy(people, person => person.age) // { name: jon age: 30 }
// const largestNumber = maxBy([1,4,3,2], n => n) // 4

export function maxBy(array, cb) {
  // Your code goes here...
  if(array.length == 0){
    return undefined;
  }

  let val = array[0];

  for(let ele of array){
    if (cb(ele) > cb(val)) {
      val = ele;
    } else {
      continue;
    };
  };
  return val;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-17"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function