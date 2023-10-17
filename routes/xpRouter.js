const express = require("express");
const xpRouter = express.Router();

xpRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.end("Will send your current XP to you");
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end("Your current XP is updated");
  });

module.exports = campsiteRouter;
