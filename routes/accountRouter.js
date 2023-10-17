const express = require("express");
const accountRouter = express.Router();

accountRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.end("Will send you your account info");
  })
  .post((req, res) => {
    res.end(`Will add to your account info`);
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end("Will update your account info");
  });

module.exports = campsiteRouter;
