const express = require("express");
const moviesRouter = express.Router();

//GET Movie Genre List

moviesRouter.get("/list", async (req, res) => {
  const endPoint = "/genre/movi/list";
  const requestParams = `?api_key=${process.env.APP_API_KEY}`;
  const urlToFetch = `${process.env.APP_BASE_URL}${endPoint}${requestParams}`;
  try {
    const response = await fetch(urlToFetch, { method: "GET" });
    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(errorResponse.status_message);
    }
    const jsonResponse = await response.json();
    res.status(200).json(jsonResponse);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

//GET Movie List by Genre

moviesRouter.get("/list/:genre", async (req, res) => {
  const endPoint = "/discover/movie";
  const requestParams = `?api_key=${process.env.APP_API_KEY}&with_genres=${req.params.genre}`;
  const urlToFetch = `${process.env.APP_BASE_URL}${endPoint}${requestParams}`;
  try {
    let response = await fetch(urlToFetch, { method: "GET" });
    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(errorResponse.status_message);
    }

    let jsonResponse = await response.json();
    console.log(jsonResponse);
    let genreList = jsonResponse.results;
    res.status(200).json(genreList);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

//GET Search Movies

moviesRouter.get("/search/:movie", async (req, res) => {
  const endPoint = "/search/movie";
  const requestParams = `?api_key=${process.env.APP_API_KEY}&query=${req.params.movie}&page=1`;
  const urlToFetch = `${process.env.APP_BASE_URL}${endPoint}${requestParams}`;
  try {
    let response = await fetch(urlToFetch, { method: "GET" });
    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(errorResponse.status_message);
    }

    const jsonResponse = await response.json();
    res.status(200).json(jsonResponse.results);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

//GET Movie details

moviesRouter.get("/details/:id", async (req, res) => {
  const endPoint = `/movie/${req.params.id}`;
  const requestParams = `?api_key=${process.env.APP_API_KEY}`;
  const urlToFetch = `${process.env.APP_BASE_URL}${endPoint}${requestParams}`;
  try {
    let response = await fetch(urlToFetch, { method: "GET" });
    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(errorResponse.status_message);
    }

    const jsonResponse = await response.json();
    console.log(jsonResponse);
    res.status(200).json(jsonResponse);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

module.exports = moviesRouter;
