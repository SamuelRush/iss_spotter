const request = require("request");
const myIP = ("https://api.ipify.org/?format=json");
const longLat = ("https://ipvigilante.com/json/");

const fetchMyIP = function(callback) {
  request(myIP, function(error, response, body) {
    if (error) {
      callback(error, null);
    } else if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg),null);
    } else {
      const data = JSON.parse(body);
      callback(null,data.ip);
    }
  });
};

const fetchCoordsByIP = function(ip, callback) {
  request((longLat + ip), function(error,response,body) {
    const { latitude, longitude } = JSON.parse(body).data;
    if (error) {
      callback(error,null);
    } else if(response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg),null);
    } else {

      callback(null,{ latitude, longitude })
    }
  })
};

module.exports = { 
  fetchMyIP,
  fetchCoordsByIP
 };
