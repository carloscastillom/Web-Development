
// 8ab8ea9eb0eecaa465855d144fdf3700 key

// current data https://api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={API key}

// Async POST

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();


 /* WEB API WITH FETCH DEMO--  */
 let baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip='
 let apiKey = '8ab8ea9eb0eecaa465855d144fdf3700&units=imperial';
 const zip_code =  document.getElementById('zip').value;

 //when generate is clicked
 document.getElementById('generate').addEventListener('click', performAction);

 //function construction when the event is clicked
 function performAction(e){  
   getAnimalDemo(baseURL,zip_code, apiKey)
 }


 const getAnimalDemo = async (baseURL, zipCode, key)=>{
 // 1.
  //const res = await fetch(baseURL+zip_code+'&appid='+apiKey)
  const res = await fetch('https://api.openweathermap.org/data/2.5/weather?zip=90210&appid=8ab8ea9eb0eecaa465855d144fdf3700&units=imperial')
 // 2. Call Fake API
  // const res = await fetch('/fakeAnimalData')
   try {

     const data = await res.json();
     console.log(data)
     // 1. We can do something with our returned data here-- like chain promises!

     // 2. 
     postData('/animal', data)
   }  catch(error) {
     // appropriately handle the error
     console.log("error", error);
   }
 }

const postData = async ( url = '', data = {})=>{
    console.log(data)
    const response = await fetch(url, {
    method: 'POST', 
    credentials: 'same-origin', 
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header        
  });

    try {
      const newData = await response.json();
      return newData;
    }catch(error) {
    console.log("error", error);
    }
};

// Async GET
const retrieveData = async (url='') =>{ 
  const request = await fetch(url);
  try {
  // Transform into JSON
  const allData = await request.json()
  }
  catch(error) {
    console.log("error", error);
    // appropriately handle the error
  }
};

function postGet(){
  //Do the POST Response new data 
  postData('/animal', {temperature:30, evalDate:"test", user_res: "test2"})
  //get the all data Request old data
    .then(function(data){
      retrieveData('/all')
    })
}
postGet()