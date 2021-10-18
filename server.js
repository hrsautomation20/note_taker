//Importing express library and routes
const express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

//Use default port and Heroku dynamic port
const PORT = process.env.PORT || 3001;

//Initialize express application
const app = express();

//Front-End access
app.use(express.static("public"));

//Parse url encoded and json data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routers
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

//Server listening
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
