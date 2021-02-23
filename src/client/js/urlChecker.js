function checkUrl(formText) {
    console.log("::: Running checkUrl :::", formText);

    //validate the url entered by the user
    let url;
  
    //using the constructor for the URL class will automatically 
    //throw an error if the string entered is not a valid url
    try {
        url = new URL(formText);
    } catch (_) {
        return false;  
    }

    //returns true if url is valid/has a valid protocol
    return url.protocol === "http:" || url.protocol === "https:";

    /*
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

export { checkUrl }
