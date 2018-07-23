// https://fcc-weather-api.glitch.me/api/current?lat=33.783606999999996&lon=-84.1357376
var api = "https://fcc-weather-api.glitch.me/";
var lat;
var lon;
var obj = {};
var currentTemp;
var high;
var low;
var link;

var celFar = "&#x2103";
// Get location first and store latitude and longitude;
if (navigator.geolocation) {
	  navigator.geolocation.getCurrentPosition(function(position) {
	    lat = position.coords.latitude;
	    // lat = 58.1411;
	    lon = position.coords.longitude;
	    // lon = 12.0908;
	    link = "https://fcc-weather-api.glitch.me/api/current?lat=" + lat + "&lon=" + lon;

	    //getting data from api
	     $.get(link, function(data) {
		    currentTemp = Math.round(data.main.temp);
		    high = Math.round(data.main.temp_max);
		    low = Math.round(data.main.temp_min);
		    obj = data;
			var weather = data.weather[0].main;
			var details = data.weather[0].description;
			var icon = data.weather[0].icon;
		    $(".temp").html(currentTemp + " " + celFar);// render temperature
		    $(".high").html(high + " " + celFar);// render temperature
		    $(".low").html(low + " " + celFar);// render temperature
		    $(".description").html(weather);// render description
		    $(".details").html(details);// render description
		    // $("#changeTemp").html(currentTemp);// render celcius
		    $(".cityName").html(data.name);// render city name
		    $(".countryName").html(data.sys.country)// render country name

		    // add icon for weather
		    	switch(weather){
		    		case "Clear":
		    		$(".wi").addClass("wi-day-sunny");
		    		$("body").addClass("sunny");
		    		break;
		    		case "Rain":
					$(".wi").addClass("wi-day-rain");
					$("body").addClass("rainy");
		    		break;
	    			case "Clouds":
		    		$(".wi").addClass("wi-day-cloudy");
					$("body").addClass("cloudy");
		    		break;
	    			case "Snow":
		    		$(".wi").addClass("wi-day-snow");
					$("body").addClass("snow");
		    		break;
	    			case "Thunderstorm":
		    		$(".wi").addClass("wi-day-snow-thunderstorm");
					$("body").addClass("thunderstorm");
		    		break;

		    	}
		 });// end location ajax
	  });//getCurrentPosition
}// end geolocation

function changeTemp(){

	if(celFar === "&#x2103"){
		celFar = "&#x2109;";
		$("#changeTemp").html(celFar);

		currentTemp = Math.round(currentTemp * 9 / 5 + 32);
		high = Math.round(high * 9 / 5 + 32);
		low = Math.round(low * 9 / 5 + 32);
		$(".temp").html(currentTemp + " " + celFar);
		$(".high").html(high + " " + celFar);
		$(".low").html(low + " " + celFar);
	} else {
		celFar = "&#x2103";
		$("#changeTemp").html(celFar);
		currentTemp = Math.round((currentTemp - 32) * 5 / 9);
		high = Math.round((high - 32) * 5 / 9);
		low = Math.round((low - 32) * 5 / 9);
		$(".temp").html(currentTemp + " " + celFar);
		$(".high").html(high + " " + celFar);
		$(".low").html(low + " " + celFar);
	}

};
