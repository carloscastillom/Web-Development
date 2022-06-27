async function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)


    fetch('http://localhost:8081/getAPI')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res
        
    })

    //postData('http://localhost:8080/apidata', {url: formText})
    /*
    const response = await fetch("http://localhost:8080/apidata")
    const data = await response.json()
    console.log(data)
    //return data
    /*
    
    console.log("::: Form Submitted :::")
    //similar to the thing  used in previous project.
    //Client.getDataAPI(requestOptions)
    
    
    /*
    .then(function(res){ 
        console.log(res)
        document.getElementById('results').innerHTML = res.subjectivity
        document.getElementById('texts').innerHTML = formText
        })
        */

}

/*
async function postData(url = "", data = {}){
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    try {
        const newData = await response.json();
        console.log('Data received:', newData)
        return newData;
    } catch (error) {
        console.log('error', error);
    }
};
/*


    
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

export { handleSubmit }



