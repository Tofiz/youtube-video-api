var config = 'https://www.googleapis.com/youtube/v3/search?channelId=UCqI00I-7JZC7yEiMb15ilGQ&key=AIzaSyAVFWyMjalTXIerhcYCxM9eWG4TIyc-PP0&part=snippet'



function doRequest(callback) {
    var x = new XMLHttpRequest();
    x.open('GET', config)
    x.onload = function() {
        callback(JSON.parse(x.responseText))
        // console.log("It works!");
    };
    x.send();
}

function handleData(data){
    let main = document.querySelector('.main')
    data.items.forEach(function(video) {
        let iframe = document.createElement('iframe')
        iframe.setAttribute("height", "315")
        iframe.setAttribute("src", "https://www.youtube.com/embed/" + video.id.videoId)
        iframe.setAttribute("frameborder", "0")
        iframe.setAttribute("allowfullscreen", "allowfullscreen")
        iframe.setAttribute("style", "margin: 10px; flex: 1 1 30%")
        main.appendChild(iframe)       
    })
}

doRequest(handleData)