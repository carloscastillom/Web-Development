function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    Client.postData('http://localhost:8081/getSentiment', {text: formText})
    .then(function(data) {
        document.getElementById('results').innerHTML = data.subjectivity
    })
}

export { handleSubmit }
