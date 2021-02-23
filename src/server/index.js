const dotenv = require("dotenv");
dotenv.config();

const fetch = require("node-fetch");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(express.static("dist"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

console.log(__dirname);

//API
const apiKey = process.env.API_KEY;
const baseUrl = "https://api.meaningcloud.com/sentiment-2.1?key=";

app.post("/getSentiment", async (req, res) => {
    const url = baseUrl+apiKey+"&of=json&lang=auto&url="+req.body.formText;
    console.log("URL: " + url);

    const apiData = await fetch(url, {method: "POST"});
    
    try {
        const data = await apiData.json();
        console.log("Receiving data: " + data);
        res.send(data);
    } catch (error) {
        console.log("error", error);
    }
});

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('App listening on port 8080!')
});
