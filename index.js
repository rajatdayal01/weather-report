function drawWeather( d ) {
	var celcius = Math.round(parseFloat(d.main.temp)-273.15);
	var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32); 
	
	document.getElementById('description').innerHTML = d.weather[0].description;
	document.getElementById('temp').innerHTML = celcius + '&deg;';
	document.getElementById('location').innerHTML = d.name;
    if( description.indexOf('rain') > 0 ) {
        document.body.className = 'rainy';
    } else if( description.indexOf('cloud') > 0 ) {
        document.body.className = 'cloudy';
    } else if( description.indexOf('sunny') > 0 ) {
        document.body.className = 'sunny';
    }
}

  function weatherBalloon() {
    var key ="c8c8bab2e6e28cc2f860eea26de0058d";
    var city = document.getElementById("search").value;
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city+ '&appid=' + key)  
    .then(function(resp) { 
        return resp.json() 
    }) 
    .then(function(data) {
      console.log(data);
      drawWeather(data);
    })
    .catch(function() {
      // catch any errors
    });
  }
  window.onload = function () {
    
   var x ="delhi";
    weatherBalloon();
  }