const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const errorhandler = require("errorhandler");
const morgan = require("morgan");

require("dotenv").config();

const apiRouter = require("./api/api");

const app = express();
const PORT = process.env.APP_PORT || 4000;

// body parsing middleware
app.use(bodyParser.json());

// logging middleware
app.use(morgan("dev"));

// cors middleware
const corsOptions = {
  origin: "http://18.159.36.20",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

// router for all api calls
app.use("/", apiRouter);

if (process.env.NODE_ENV === "development") {
  // error handling middleware
  // only use in development
  app.use(errorhandler());
  console.log("this is dev");
}

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
