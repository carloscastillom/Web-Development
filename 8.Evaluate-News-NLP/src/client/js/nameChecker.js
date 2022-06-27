async function checkForName(inputText) {

    if (inputText.length == 0) {
        alert("Please add a URL to analyze")
        return false;
    }

    return true;
        
    /*
    console.log("::: Running checkForName :::", inputText);
    let names = [
        "Picard",
        "Janeway",
        "Kirk",
        "Archer",
        "Georgiou"
    ]

    if(names.includes(inputText)) {
        alert("Welcome, Captain!")
    }

    */
}

export { checkForName }
