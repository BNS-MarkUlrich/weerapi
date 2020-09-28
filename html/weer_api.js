//HTML elementen
let activate1 = document.getElementById('weatherButton');
let activate2 = document.getElementById('weatherButton2');
let activate3 = document.getElementById('weatherButton3');
activate1.addEventListener("click", getWeather1);
activate2.addEventListener("click", getWeather2);
activate3.addEventListener("click", getWeather3);
let result = document.getElementById('result');

// weather API http://weerlive.nl/delen,php
let apiAddress = "http://weerlive.nl/api/json-data-10min.php?key=";
// let key = "b60a3e88c7"; // Rotterdam
let key = "demo";
let locatie = "&locatie=";
// let geoLocation = "Rotterdam";
let geoLocation = "Amsterdam";
let url = apiAddress + key + locatie + geoLocation;


function getWeather1(){
	console.log(url);
	makeAjaxCall(url, "GET") .then(showWeather1, errorHandler);
}
function showWeather1(JSONresponseFromAjax){
	result.innerHTML = JSONresponseFromAjax;
}
function getWeather2(){
	makeAjaxCall(url, "GET"). then(showWeather2, errorHandler);
}
function showWeather2(JSONresponseFromAjax){
	let weatherObject = JSON.parse(JSONresponseFromAjax);
	let completeData = "";
	for (const [key, value] of Object.entries(weatherObject.liveweer[0])) {
		console.log('${key}: ${value}');
		completeData += key + " : " + value +"<br>";
		result.innerHTML = completeData;
	}
}
function getWeather3(){
	makeAjaxCall(url, "GET"). then(showWeather3, errorHandler);
}
function showWeather3 (JSONresponseFromAjax){
	let weatherObject = JSON.parse(JSONresponseFromAjax);
	weatherObject.liveweer[0].verw
	completeData = "<br>Plaats: " + weatherObject.liveweer[0].plaats +"<br><br>"
	+ "Temperatuur: " + weatherObject.liveweer[0].temp + " °C" +"<br>"
	+ "Gevoels Temperatuur: " + weatherObject.liveweer[0].gtemp + " °C" +"<br><br>"
	+ "Verwachting: " + weatherObject.liveweer[0].verw +"<br>"
	+ "Weerbeeld: " + weatherObject.liveweer[0].samenv +"<br><br>"   
	+ weatherObject.liveweer[0].image +"<br>" 
	+ '<img src="html/images/' + weatherObject.liveweer[0].image + '.png">' +"<br>"
	+ "Kans op neerslag: " + weatherObject.liveweer[0].d0neerslag + "%" +"<br>";
	result.innerHTML = completeData;
}