function makeAjaxCall(url, methodType){
	let promiseObj = new Promise(function(resolve, reject){
		console.log(url);
		let xmlhttp = new XMLHttpRequest();
		xmlhttp.open(methodType, url, true);
		xmlhttp.send();
		xmlhttp.onreadystatechange = function(){
			if (xmlhttp.readyState === 4){
				if (xmlhttp.status === 200){
					console.log("xmlhttp done successfully");
					let serverResponse = xmlhttp.responseText;
					console.log(serverResponse);
					resolve(serverResponse);
				} else {
					reject(xmlhttp.status);
					console.log("xmlhttp failed");
				}
			} else {
				console.log("xmlhttp processing going on");
			}
		}
		console.log("request sent successfully");
	});
 return promiseObj;
 }
function errorHandler(statusCode){
	console.log("failed with status", status);
}