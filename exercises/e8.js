import { data } from "../data/data";

// SPACE DATA EXERCISE 8
// Return a Planet name by a given moon name
// Return example: 'Planet Name'

export function findPlanetNameByMoon(data, moonName) {
  // Your code goes here...
  let str = data.planets
    .filter(planet => planet.moons != undefined)
    .find(planet => planet.moons.includes(moonName))
  return str.name;
}

    // .map(planet => planet.name);


  // let str = data.planets
  //   .filter(planet => planet.moons != undefined)
  //   .map(planet => planet.moons)
  //   .find(function(moon) {
  //     if(moon === moonName) { 
  //       return moon;
  //     }})

  // let strArray = [];
  // let stand;

  // for(let i = 0; i < data.planets.length; i++) {
  //   stand = data.planets[i].moons;
  //   if(stand === undefined) {
  //     continue;
  //   };
  //   for(let j = 0; j < data.planets[i].moons.length; j++) {
  //     stand = data.planets[i].moons[j];
  //     if(stand === moonName) {
  //       strArray = data.planets[i].name;
  //     } else {
  //       continue;
  //     };
  //   };
  // }; 
  // return strArray;




// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
