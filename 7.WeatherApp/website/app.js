
// 8ab8ea9eb0eecaa465855d144fdf3700 key

// current data https://api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={API key}

// Async POST

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
//console.log(newDate)

 /* WEB API WITH FETCH DEMO--  */
 let baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip='
 let apiKey = '8ab8ea9eb0eecaa465855d144fdf3700&units=imperial';
 let zip_code =  document.getElementById('zip').value;
 let feel =  document.getElementById('feelings').value;

 //when generate is clicked
 document.getElementById('generate').addEventListener('click', performAction);

 //function when the event is clicked
 function performAction(e){  

    // zip code written by the user
    zip_code = document.getElementById('zip').value; //updating variable 90210 for TEST

     //feeling written by the user
    feel = document.getElementById('feelings').value; //updating variable  for TEST

   
    console.log(zip_code) //print it in the console client
    console.log(feel) //print it in the console client

   getAnimalDemo(baseURL,zip_code, apiKey)


 .then(function(data){
  postData('/animal', { temperature: data.temperature, evalDate: newDate, user_res: feel });
})
  .then(updateUI())
}

// Definition of function to execute when generate is clicked

 const getAnimalDemo = async (baseURL, zipCode, key)=>{
 // 1.
  const res = await fetch(baseURL+zipCode+'&appid='+key)
  //const res = await fetch('https://api.openweathermap.org/data/2.5/weather?zip=90210&appid=8ab8ea9eb0eecaa465855d144fdf3700&units=imperial')
 // 2. Call Fake API
  // const res = await fetch('/fakeAnimalData')
   try {

     const data = await res.json();
     data.temperature= data.main.temp
     console.log(data.temperature)
     return data;
     // 1. We can do something with our returned data here-- like chain promises!

     // 2. 
     //postData('/animal', data)
   }  catch(error) {
     // appropriately handle the error
     console.log("error", error);
   }
 }


// Async POST

const postData = async ( url = '', data = {})=>{
    console.log(data)
    const response = await fetch(url, {
    method: 'POST', 
    credentials: 'same-origin', 
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      temperature: data.temperature,
      evalDate: data.evalDate,
      user_res: data.user_res
    }), // body data type must match "Content-Type" header        
  });

    try {
      const newData = await response.json();
      return newData;
    }
    catch(error) {
      console.log("error", error);
      // appropriately handle the error
    }
};

// Async GET
const retrieveData = async (url='') =>{ 
  const request = await fetch(url);
  try {
  // Transform into JSON
  const allData = await request.json();
  console.log(request)
/*
  document.getElementById("temp").innerHTML = allData.temperature;
  document.getElementById("content").innerHTML = allData.user_res;
  document.getElementById("date").innerHTML = allData.evalDate;
*/
  }
  catch(error) {
    console.log("error", error);
    // appropriately handle the error
  }
};


const updateUI = async () => {
  const request = await fetch('/all');
  try{
    const allData = await request.json();
    console.log(allData)
    document.getElementById("temp").innerHTML = allData.temperature;
    document.getElementById("content").innerHTML = allData.user_res;
    document.getElementById("date").innerHTML = allData.evalDate;

  }catch(error){
    console.log("error", error);
  }
}

APIdata={
    temperature:30, 
    evalDate:"test",
    user_res: "test2"
  }
  



 //taken from the Course 
//do both to get the info after it was posted
function postGet(data={}){
  //Do the POST Response new data 
  postData('/animal',data)  
  //get the all data Request old data
  .then(function(data){
    retrieveData('/all')
  })
}

// call
postGet(APIdata)