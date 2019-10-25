const { nextISSTimesForMyLocation } = require('./iss');

nextISSTimesForMyLocation((error,passTimes) => {
  if (error) {
    return console.log("This didn't work!", error);
  }
  // success, print out the deets!
  //console.log(passTimes);
  for (let x of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(x.risetime);
    console.log(`Next pass at ${datetime} for ${x.duration} seconds!`);
  }
});