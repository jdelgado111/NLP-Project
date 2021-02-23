function handleSubmit(event) {
    event.preventDefault();

    // check what text was put into the form field
    let formText = document.getElementById("url").value;
    
    //Client.checkUrl(formText);

    console.log("::: Form Submitted :::")
    
    /*
    fetch('http://localhost:8081/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })
    */
    
    if (Client.checkUrl(formText)) {
        console.log("Calling fetch()");

        document.getElementById('results').innerHTML = "Analyzing the URL, please wait!";

        fetch("http://localhost:8080/getSentiment", {
            method: "POST",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ formText }),
        })
        .then(res => res.json())
        .then(json => {
            console.log("Calling updateUI");
            updateUI(json);
            console.log(json);
        });
    }
    else {
        alert("Invalid URL, must include http:// or https://");
    }
}

async function updateUI(json) {
    console.log("Updating UI: " + json.score_tag);
    const sent = "Sentiment: " + json.score_tag + "<br>";
    const subj = "Subjectivity: " + json.subjectivity + "<br>";
    const irony = "Irony: " + json.irony + "<br>";
    const conf = "Confidence: " + json.confidence;
    document.getElementById('results').innerHTML = sent+subj+irony+conf;
}

export { handleSubmit, updateUI }
