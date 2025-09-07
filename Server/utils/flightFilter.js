const flights = require("../data/flight");

function filterFlights(query) {
  return flights.filter((flight) => {
    if (query.from && flight.departure.city.toLowerCase() !== query.from.toLowerCase())
      return false;

    if (query.to && flight.arrival.city.toLowerCase() !== query.to.toLowerCase())
      return false;

    if (query.date && flight.departure.date !== query.date)  
      return false;

    if (query.cabin_class && flight.cabin_class.toLowerCase() !== query.cabin_class.toLowerCase())
      return false;

    if (query.airline && flight.airline.toLowerCase() !== query.airline.toLowerCase())
      return false;

    if (query.min_price && flight.price.amount < query.min_price)
      return false; 

    if (query.max_price && flight.price.amount > query.max_price)
      return false;

    return true;
  });
}

module.exports = filterFlights;
