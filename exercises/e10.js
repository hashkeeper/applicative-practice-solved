import { data } from "../data/data";

// SPACE DATA EXERCISE 10
// Return a given asteroid object of data
// Return example: { key1: value1, key2: value2, ... , keyN: valueN }

export function getAsteroidDataByName(data, asteroidName) {
  // Your code goes here...
  let objArray = data.asteroids
    .find((asteroid) => asteroid.name === asteroidName);

  return objArray;

  // for(let i = 0; i < data.asteroids.length; i++) {
  //   stand = data.asteroids[i].name;
  //   if(stand === asteroidName) {
  //     strArray = data.asteroids[i];
  //   } else {
  //     continue;
  //   };
  // };
  // return strArray;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
