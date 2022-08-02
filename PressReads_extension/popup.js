document.getElementById('btn').addEventListener('click', ()=>{
    tabs = chrome.tabs.query({active: true, currentWindow: true}, (tabs)=>{
        console.log(tabs[0].id);
        chrome.tabs.sendMessage(
            tabs[0].id,
            {task: "changecolor"},
            function(response){
                console.log(response.status);
            }
        )
    })
})