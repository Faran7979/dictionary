// Function to handle keydown events, specifically checking for Enter key (keyCode 13)
function getonkeydown(event) {
    if (event.keyCode === 13) { // If Enter key is pressed
        // Get the value from the input element with id 'txtSearch'
        var search = document.getElementById('txtSearch').value;
        // Call the getdata function with the search term as an argument
        getdata(search);
    }
}

// Function to fetch and display data based on the provided word
function getdata(word) {
    // Get the element with id 'list'
    let list = document.getElementById("list");
    
    // Define the URL for the dictionary API with the provided word
    const url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + word;

    // Fetch data from the API
    fetch(url)
        .then(response => response.json()) // Parse the response as JSON
        .then(data => {
            console.log(data); // Log the fetched data to the console

            // Clear the inner HTML of the 'list' element
            list.innerHTML = "";

            // Loop through the fetched data
            for (i = 0; i < data.length; i++) {
                // Append a list item with class 'word' and details about the word
                list.innerHTML += "<li class='word'> <div class='details'> <p>" + data[i].word + "</p> <span>" + data[i].phonetics[0].text + "</span>" +
                    "</div>  <i class='fas fa-voluwme-up' class='volume' onclick='playSound()'></i></li>" +
                    "<div class='content'>";

                // Create a string to store meanings
                let meanings = "";

                // Loop through the meanings of the word
                for (j = 0; j < data[i].meanings.length; j++) {
                    // Append a list item with class 'meaning' and details about the meaning
                    meanings += "<li class='meaning'> <div class='details'> <p>" + data[i].meanings[j].partOfSpeech + "</p>" +
                        "<span>" + data[i].meanings[j].definitions[0].definition + "</span></div> </li>";
                }

                // Append the meanings string to the 'list' element
                list.innerHTML += meanings;
            }

            // Append closing tags to the 'list' element
            list.innerHTML += "</ul></div>";
        })
        .catch(function () {
            // If there is an error, set the inner HTML of the 'list' element to "NotFound"
            list.innerHTML = "NotFound";
        });
}
