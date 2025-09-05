const express = require("express");
const cors = require("cors");
const flightRoutes = require('./routes/flightRoute');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use("/api/flights", flightRoutes);

app.listen(port, () => {
  console.log(`Flight search API running at http://localhost:${port}`);
});
