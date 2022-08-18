/*document.getElementById('btn').onclick =  async()=>{
        //let tabs = await chrome.tabs.query({active: true, currentWindow: true})
       let result
        try{
            /*[{result}] = await chrome.scripting.executeScript({
                target : {tabId : tabs.id},
                function: ()=> window.getSelection().toString()
            })

            result = document.getSelection().toString()
        }
        catch(e){
            console.log("ERROR")
        }

       console.log(result)
        document.body.append(result)
    }*/

    let result;
  
    document.getElementById("btn").onclick = async () => {
        const [tab] = await chrome.tabs.query({active: true, currentWindow: true});
       
        try {
          [{result}] = await chrome.scripting.executeScript({
            target: {tabId: tab.id},
            function: () => getSelection().toString(),
          });
        } catch (e) {
          return; 
        }
       
        const data = {
          "text" : result
      }
      const options = {
          method: 'POST',
          headers:{
              'Access-Control-Allow-Origin': '*',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
      }
      
      
      fetch('https://sih-hackathon-api.herokuapp.com/bow_summarise_text/', options)
      .then((response) => {
          response.json().then(function(json){
            document.getElementById('para').innerHTML = JSON.stringify(json.summary);  
          })
       //  console.log(res.summary_from_url)
      })
      .catch((error) => console.log(error))
      
      };
      
        