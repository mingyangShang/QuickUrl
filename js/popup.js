//pop up a dialog to show qrcode of current url

var DEFAULT_QRCODE_SIZE = 128;   //default qrcode size,width=height=64px

$(document).ready(function(){
  	getCurrentUrl(getQrCodeForUrl);
});



//get current visiting url
function getCurrentUrl(callback){
	var queryInfo = {
    	active: true,
    	currentWindow: true
  	};
  	chrome.tabs.query(queryInfo, function(tabs) {
    	var tab = tabs[0];
    	var url = tab.url;
    	console.assert(typeof url == 'string', 'tab.url should be a string');
    	if(undefined != callback){
    		callback(url);
    	}
  	});
}

//get qrcode for specific url
function getQrCodeForUrl(url){
    getQrCodeForUrlWithSize(url,DEFAULT_QRCODE_SIZE,DEFAULT_QRCODE_SIZE);
}

//get qrcode for specific with specific size
function getQrCodeForUrlWithSize(url,qrcodeWidth,qrcodeHeight){
  $('#qrcode').qrcode({
    width:qrcodeWidth,
    height:qrcodeHeight,
    text:url 
  });
}



