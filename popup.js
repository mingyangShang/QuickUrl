//pop up a dialog to show qrcode of current url

var DEFAULT_QRCODE_SIZE = 64;   //default qrcode size,width=height=64px

$(document).ready(function(){
    console.log("ready");
    alert('Hello');
  });
});

//get current visiting url
function getCurrentUrl(){

}

//get qrcode for specific url
function getQrCodeForUrl(url){
    getQrCodeForUrlWithSize(url,DEFAULT_QRCODE_SIZE,DEFAULT_QRCODE_SIZE);
}

//get qrcode for specific with specific size
function getQrCodeForUrlWithSize(url,qrcodeWidth,qrcodeHeight){
  jquery('#qrcode').qrcode({
    width:qrcodeWidth,
    height:qrcodeHeight,
    text:url 
  });
}



