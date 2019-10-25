const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');
const { fetchISSFlyOverTimes } = require('./iss');
const { nextISSTimesForMyLocation } = require('./iss');

fetchMyIP((error,ip) => {
  if (error) {
    console.log("Finding IP didn't work!", error);
    return;
  }
  console.log("It worked! Returned IP: ", ip);
});

fetchCoordsByIP("184.68.214.222",(error,data) => {
  if (error) {
    console.log("Finding Long and Lat didn't work!" , error);
    return;
  }
  console.log('It worked! Returned Coords:' , data);
});

const coordinates = { latitude: '49.27670', longitude: '-123.13000' };
fetchISSFlyOverTimes(coordinates,(error,data) => {
  if (error) {
    console.log("Fetching from NASA didn't work!", error);
    return;
  }
  console.log("It worked! Times are: ",data);
});

nextISSTimesForMyLocation((error,passTimes) => {
  if (error) {
    return console.log("Checking flight times for my location didn't work!", error);
  }
  // success, print out the deets!
  console.log(passTimes);
})