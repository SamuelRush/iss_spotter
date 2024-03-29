const request = require('request-promise-native');

const fetchMyIP = function() {
 return request("https://api.ipify.org/?format=json");
};

const fetchCoordsByIP = function(body) {
  const IP = JSON.parse(body).ip;
  return request ("https://ipvigilante.com/json/"+IP);
};

const fetchISSFlyOverTimes = function(body){
  const jason = JSON.parse(body);
  const { latitude, longitude } = jason.data
  const URL = `http://api.open-notify.org/iss-pass.json?lat=${latitude}&lon=${longitude}`
  return request(URL)
};

const nextISSTimesForMyLocation = function(){
  return fetchMyIP()
  .then(fetchCoordsByIP)
  .then(fetchISSFlyOverTimes)
  .then((data) => {
    const { response } = JSON.parse(data);
    return response
  });
}

module.exports = { nextISSTimesForMyLocation };