var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv');
const fetch = require('node-fetch');
const bodyParser = require('body-parser');
const cors = require('cors');
dotenv.config();




const app = express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

const apiKey = process.env.API_KEY


app.get('/test', async function (req, res) {
    res.send(mockAPIResponse)
}
)

app.post('/getAPI', async function(req, res) {
    //const input_text = req.body.text;
    //const url_API = `https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}
    //&of=json&txt=${input_text}&model=general&lang=en`
    const url_API = 'https://api.meaningcloud.com/sentiment-2.1?key=de6c18375a184fbfbd8fd8054bb2c95d&of=json&txt=Main%20dishes%20were%20quite%20good,%20but%20desserts%20were%20too%20sweet%20for%20me&model=general&lang=en'
    const response  = await fetch(url_API);
    try {
        const newData = await response.json();
        res.send(newData);
    }
    catch(error) {
        console.log(`An error occurred in server/index.js during API request: ${error}`);
    }
})

/*
const formdata = new FormData();
formdata.append("key", process.env.API_KEY); //"de6c18375a184fbfbd8fd8054bb2c95d"
//formdata.append("txt", "Main dishes were quite good, but desserts were too sweet for me.");
formdata.append("txt", formText);
formdata.append("lang", "en");  // 2-letter code, like en es fr ...

const requestOptions = {
method: 'POST',
body: formdata,
redirect: 'follow'
};
*/


/*
app.post('/apidata', async function(req, res) {
    formText = req.body.url;
    console.log(formText);
    const apiURL = 'https://api.meaningcloud.com/sentiment-2.1?key='+ apiKey + '&url=' + userInput + '&lang=en'

    const response = await fetch(apiURL)
    const newData = await response.json()
    console.log(newData)
    res.send(newData)
    })  
*/
