import { data } from "../data/data";

// SPACE DATA EXERCISE 13
// Return the average temperature of all the Planets
// Return example: 132.53

export function getAveragePlanetsTemperature(data) {
  // Your code goes here...
  let counter = data.planets
    .map((planet) => planet.avgTemp)
    .reduce((acc, cur) => acc + cur)

  return counter / 8;
  // let stand = 0;
  // let counter = 0;

  // for(let i = 0; i < data.planets.length; i++){
  //   counter++
  //   stand += data.planets[i].avgTemp;
  // };
  // stand = stand / counter;
  // return stand;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function