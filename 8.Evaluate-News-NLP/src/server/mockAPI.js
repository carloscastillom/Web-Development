/*const fetch = require('node-fetch');

const formdata = FormData();
let formText = document.getElementById('name').value
formdata.append("key", process.env.API_KEY); //"de6c18375a184fbfbd8fd8054bb2c95d"
//formdata.append("txt", "Main dishes were quite good, but desserts were too sweet for me.");
formdata.append("txt", formText);
formdata.append("lang", "en");  // 2-letter code, like en es fr ...

const requestOptions = {
method: 'POST',
body: formdata,
redirect: 'follow'
};

const response =  fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions)
const data =  response.json()

*/
let json = {
    'title': 'test json response',
    'message': 'this is a message TESSSTTT',
    'time': 'now'
}

module.exports = json

