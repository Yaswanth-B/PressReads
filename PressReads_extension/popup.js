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


    document.getElementById("btn").onclick = async () => {
        const [tab] = await chrome.tabs.query({active: true, currentWindow: true});
        let result;
        try {
          [{result}] = await chrome.scripting.executeScript({
            target: {tabId: tab.id},
            function: () => getSelection().toString(),
          });
        } catch (e) {
          return; 
        }
        console.log(result)
      };