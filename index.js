const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const path = require("path");

// enable CORS
app.use(cors());
app.use(express.json());
//models//schema
require("./model/Admin");
require("./model/Project");
require("./model/Resume");
require("./model/Header");
require("./model/Details");
require("./model/Progress");
require("./model/Skills");
require("./model/Qualification");
require("./model/Certificate");
require("./model/Interest");
require("./model/Footer");
require("./model/FooterContent");
//routes
app.use(require("./routes/Admin"));
app.use(require("./routes/project"));
app.use(require("./routes/Resume"));
app.use(require("./routes/Header"));
app.use(require("./routes/Details"));
app.use(require("./routes/Progress"));
app.use(require("./routes/Skills"));
app.use(require("./routes/Qualification"));
app.use(require("./routes/Certificate"));
app.use(require("./routes/Interest"));
app.use(require("./routes/Footer"));
app.use(require("./routes/FooterContent"));

// connect to MongoDB
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log(error);
  });

//serving the frontend
app.use(express.static(path.join(__dirname, "./appblog/build")));
app.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "./appblog/build/index.html"),
    function (err) {
      res.status(500).send(err);
    }
  );
});

// start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});