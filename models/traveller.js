const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map ( function (journey){
    return journey.startLocation;
  });
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map ( (journey) => {   // USING ARROW FUNCTION HERE
    return journey.endLocation;
  });
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter ( (journey) => {
    return transport === journey.transport;
  });
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const foundJourneys = this.journeys.filter ( (journey) => {
    return journey.distance >= minDistance
  });
  return foundJourneys;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const totalDistanceTravelled = this.journeys.reduce ((totalDistance, currentJourney) => {
    return totalDistance + currentJourney.distance;
  },0);
  return totalDistanceTravelled;
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  
  const transports = this.journeys.map ( function (journey){
    return journey.transport;
  });

  // function onlyUnique(value, index, self) {
  //   return self.indexOf(value) === index;
  // }
  
  const meansOfTransport =  transports.filter (function (value, index, self) {
    return self.indexOf(value) === index;
  })
  return meansOfTransport;
};


module.exports = Traveller;
