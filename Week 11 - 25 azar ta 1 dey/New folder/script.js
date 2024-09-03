
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