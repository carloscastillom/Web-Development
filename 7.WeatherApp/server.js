/* Empty JS object to act as endpoint for all routes */
projectData = {};

/* Express to run server and routes */
const express = require('express');

/* Start up an instance of app */
const app = express();

/* Dependencies */
const bodyParser = require('body-parser')
/* Middleware*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

/* Initialize the main project folder*/
app.use(express.static('website'));

const port = 3000;
/* Spin up the server*/
const server = app.listen(port, listening);
 function listening(){
    // console.log(server);
    console.log(`running on localhost: ${port}`);
  };

// GET route
app.get('/all', sendData);

function sendData (req, res) {
  res.send(projectData);
};

/*
// POST route
app.post('/add', callBack);

function callBack(req,res){
  res.send('POST received');
}
*/ 
data =[];

// POST route
app.post('/animal', addAnimal);
// the problem must be here=============================== check chaining promises
function addAnimal (req,res){
    //res.send('POST received');
    console.log(data)
    console.log('POST received'); //animal
    newEntry={
      temperature: req.body.temperature,
      evalDate: req.body.evalDate,
      user_res: req.body.user_res
    }
    projectData=newEntry;
    data.push(newEntry);
    res.send(data);
    console.log(data);
    //projectData.push(newEntry);
};

 





