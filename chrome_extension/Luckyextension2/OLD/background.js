chrome.runtime.onMessage.addListener(
    function(data) {
        testfunction(data.url, data.stream);
});

function testfunction(url, stream){
    //var url = "https://www.wdr.de/radio/radiotext/streamtitle_1live.txt";
    
    fetch(url)
    
    .then((response) => response.text())

    .then((text) => {console.log(text);chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {antwort: text, stream: stream});
      });});
}