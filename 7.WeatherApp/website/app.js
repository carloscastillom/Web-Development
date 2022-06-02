
// 8ab8ea9eb0eecaa465855d144fdf3700 key

// current data https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

//  3 hour api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

// Async POST

 /* WEB API WITH FETCH DEMO--  */
 let baseURL = 'http://api.animalinfo.org/data/?animal='
 let apiKey = '&appid=9f15e45060...';
 const newAnimal =  document.getElementById('zip').value;

 document.getElementById('generate').addEventListener('click', performAction);

 function performAction(e){  
   getAnimalDemo(baseURL,newAnimal, apiKey)
 }


 const getAnimalDemo = async (baseURL, animal, key)=>{
 // 1.
  // const res = await fetch(baseURL+animal+key)
 // 2. Call Fake API
   const res = await fetch('/fakeAnimalData')
   try {

     const data = await res.json();
     //console.log(data)
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