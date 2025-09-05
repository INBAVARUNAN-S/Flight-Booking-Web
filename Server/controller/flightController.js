const flights = require("../data/flight");
const filterFlights = require("../utils/flightFilter");

const getFlights = async (req, res) => {
  const { from, to, date, cabin_class, airline, min_price, max_price } = req.query;

  const filteredFlights = await filterFlights({
    from,
    to,
    date,
    cabin_class, 
    airline,
    min_price: min_price ? parseInt(min_price) : undefined,
    max_price: max_price ? parseInt(max_price) : undefined,
  });

  setTimeout(() => {
    res.json(filteredFlights);
  }, 1000);
};

module.exports = { getFlights };
