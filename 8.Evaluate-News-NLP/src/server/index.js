var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')



const bodyParser = require('body-parser');
const cors = require('cors');
const fetch = require('node-fetch')

const app = express()


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());
app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
     res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

// make API request
app.post('/getSentiment', async function(req, res) {
    //const text = req.body.text;
    //const url = `https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}
    //&of=json&txt=${text}&model=general&lang=en`

    const url = "https://api.meaningcloud.com/sentiment-2.1?key=de6c18375a184fbfbd8fd8054bb2c95d&of=json&txt=Main%20dishes%20were%20quite%20good,%20but%20desserts%20were%20too%20sweet%20for%20me&model=general&lang=en"

    //console.log(`Your process.env.API_Key is ${ process.env.API_KEY}`);
    console.log(`This is the url: ${url}`);

    const data = await fetch(url);
    try {
        res.send(await data.json());
    }
    catch(error) {
        console.log(`An error occurred in server/index.js during API request: ${error}`);
    }
})
