function populateNavbar(){
    document.body.innerHTML = '<nav class="navbar navbar-expand-lg bg-body-tertiary"><div class="container-fluid"><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarSupportedContent"><ul class="navbar-nav me-auto mb-2 mb-lg-0"><li class="nav-item"><a class="nav-link active" aria-current="page" href="index.html">Home</a></li><li class="nav-item"><a class="nav-link" href="TP.html">Tamara Pcitures</a></li><li class="nav-item"><a class="nav-link" href="PAF.html">Plants & Fungi</a></li><li class="nav-item"><a class="nav-link" href="TAP.html">Take A Photo</a></li><li class="nav-item"><a class="nav-link" href="LAM.html">Leave A Message</a></li></ul></div></div></nav>' + document.body.innerHTML;
}
function populateImages(url){
    $.get(url+"/manifest.json", function(data){
        console.log(data);
        returnedValue = "";
        manifest = data.manifest;
        manifest.forEach(element => {
            imageName = element.photo[0].url;
            returnedValue =  returnedValue + '<div class="galleryImage col-lg-6"><img src="'+url+'/'+imageName+'"></div>';
        });
        document.getElementById("content").innerHTML = returnedValue;
    });
}
function populateMessages(){
    $.get('https://rpsbbo7ko1.execute-api.ap-southeast-2.amazonaws.com/default/T50APICall', function(data){
        
    messages = JSON.parse(data);
    returnedValue = "";
    messages.messages.forEach(element => {
        returnedValue = returnedValue + '<div class="col-lg-6 message">'+ element.userName +'<div class="messageBody">'+ element.message +'</div></div>'
    })
    document.getElementById("content").innerHTML = returnedValue;
    });

}

function postMessage(){
    inUName = $('#inName')[0].value;
    inUMessage = $('#inMsg')[0].value;
    if(inUName == '' || inUMessage == ''){console.log('missing field');return;}
    send = JSON.stringify({
        userName: inUName,
        message: inUMessage
    });
    console.log(send)
    fetch("https://rpsbbo7ko1.execute-api.ap-southeast-2.amazonaws.com/default/T50PostNew",{
        method: "POST",
        body: send
    })
        .then((response) => response.json())
        .then((json) => populateMessages());
        
}