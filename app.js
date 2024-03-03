const express = require("express");
const morgan = require("morgan");
const tourRouter = require("./routes/tourRoutes");
const userRouter = require("./routes/userRoutes");

const app = express();
app.use(express.json());
console.log("Starting app.js...");

if (process.env.NODE_ENV === "development") {
  console.log("Development mode");
  app.use(morgan("dev"));
}

app.use(express.static(`${__dirname}/public`));

//ROUTES
app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/users", userRouter);

module.exports = app;
