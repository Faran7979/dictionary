/*
function getonkeydown(event)
{
if(event.keyCode === 13)
{
    let search = document.getElementById('txtSearch').value;
    getdata(search);
}
 
}


function getdata(word) {
    let list=document.getElementById("list");
    
    const url="https://api.dictionaryapi.dev/api/v2/entries/en/"+word;
     fetch(url)           
    .then(response => response.json())
    .then(data => 
        {console.log(data)
            list.innerHTML="";
            for(i=0;i<data.length;i++){
                console.log(data[i].word);
                list.innerHTML +="<li class='word'> <div class='details'> <p>"+data[i].word+"</p> <span>"+data[i].phonetics[0].text+"</span>"+
                "</div>  <i class='fas fa-voluwme-up' class='volume' onclick='playSound()'></i></li>"+
                "<div class='content'>";

                let meanings = "";
                for(j=0;j<data[i].meanings.length;j++)
                {       
                    meanings += "<li class='meaning'> <div class='details'> <p>"+ data[i].meanings[j].partOfSpeech+"</p>"+
                     "<span>"+data[i].meanings[j].definitions[0].definition+"</span></div> </li>"
                }

                list.innerHTML +=meanings;
           
            }
            list.innerHTML +="</ul></div>";
        })
        .catch(function() {
            list.innerHTML="NotFound";
        }); 
        
}
*/








// This function is triggered when a key is pressed down, and it checks if the pressed key has a key code of 13 (Enter key).
function getonkeydown(event) {
    if (event.keyCode === 13) {
        // If the pressed key is Enter, it retrieves the value from the 'txtSearch' input element and calls the getdata function with that value.
        let search = document.getElementById('txtSearch').value;
        getdata(search);
    }
}

// This function takes a word as a parameter and makes a fetch request to the Dictionary API using the provided URL.
function getdata(word) {
    // Retrieves the 'list' element from the HTML document.
    let list = document.getElementById("list");

    // Constructs the API URL using the provided word.
    const url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + word;

    // Makes a fetch request to the API.
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Clears the previous content of the 'list' element.
            list.innerHTML = "";

            // Iterates over the response data (which represents word entries from the dictionary API).
            for (i = 0; i < data.length; i++) {
                // Appends a list item to the 'list' element, displaying the word and its phonetic transcription.
                list.innerHTML += "<li class='word'> <div class='details'> <p>" + data[i].word + "</p> <span>" + data[i].phonetics[0].text + "</span>" +
                    "</div>  <i class='fas fa-voluwme-up' class='volume' onclick='playSound()'></i></li>" +
                    "<div class='content'>";

                let meanings = "";

                // Iterates over the meanings of the word entry.
                for (j = 0; j < data[i].meanings.length; j++) {
                    // Appends a list item for each meaning, displaying the part of speech and definition.
                    meanings += "<li class='meaning'> <div class='details'> <p>" + data[i].meanings[j].partOfSpeech + "</p>" +
                        "<span>" + data[i].meanings[j].definitions[0].definition + "</span></div> </li>"
                }

                // Appends the meanings to the 'list' element.
                list.innerHTML += meanings;
            }

            // Closes the unordered list and div tags.
            list.innerHTML += "</ul></div>";
        })
        .catch(function () {
            // If there's an error with the API request, it sets the 'list' element content to "NotFound".
            list.innerHTML = "NotFound";
        });
}
