const express = require("express");
const apiRouter = express.Router();
const moviesRouter = require("./movies");
const showsRouter = require("./shows");

apiRouter.use("/movies", moviesRouter);
apiRouter.use("/shows", showsRouter);

module.exports = apiRouter;
