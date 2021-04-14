const express = require("express");

//connecting to the database
require("./config/dbConnect");

const app = express();


//middleware - use to recognize request as json object
app.use(express.json());


//middleware - use to recognize request as json object
app.use("/products", require("./router/productRouter"));




app.listen(4000, () => console.log("server is up and running!"));
