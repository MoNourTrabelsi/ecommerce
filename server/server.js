// app.js
const express = require('express');
const cors = require("cors")
const sequelize = require("./database/db")
const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());


const productRoute = require("./routes/product.routes")
app.use("/product",productRoute)
const usersRoute = require('./routes/user.routes');
app.use('/users', usersRoute);
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    return sequelize.sync({ force: false });
  })
  .then(() => {
    console.log('Models are synchronized with the database.');
    app.listen(PORT, function () {
      console.log(`Listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });
