const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

//Sets port if deploying to external provider/port assigned already
const port = process.env.port || 3002

//Equivalent of create server in http library
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req,res) => {
    res.send("Hi from my express server")
})
app.listen(port, () => {
	console.log(`Blog express app listening on port ${port}`)
})