function populateNavbar(){
    document.body.innerHTML = '<nav class="navbar navbar-expand-lg bg-body-tertiary"><div class="container-fluid"><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarSupportedContent"><ul class="navbar-nav me-auto mb-2 mb-lg-0"><li class="nav-item"><a class="nav-link active" aria-current="page" href="index.html">Home</a></li><li class="nav-item"><a class="nav-link" href="TP.html">Tamara Pcitures</a></li><li class="nav-item"><a class="nav-link" href="PAF.html">Plants & Fungi</a></li><li class="nav-item"><a class="nav-link" href="TAP.html">Take A Photo</a></li><li class="nav-item"><a class="nav-link" href="LAM.html">Leave A Message</a></li></ul></div></div></nav>' + document.body.innerHTML;
}
AWS.config.region = "ap-southeast-2";
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: "ap-southeast-2:6492be84-c984-4a66-8f0a-7ad8f0517ade",
});
var images = new AWS.S3({
    apiVersion: "2006-03-01",
    params: {Bucket: "tamara50images"},
});
function populateImages(url){
    images.listObjectsV2(function(err,data){
        if (err) console.log(err, err.stack);
        else console.log(data);
    });
}