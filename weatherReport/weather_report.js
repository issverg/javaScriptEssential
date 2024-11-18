const weatherInfo = document.getElementById('weatherInfo');
const weatherForm = document.getElementById('weatherForm');
const weatherFormLatLon = document.getElementById('weatherFormLatLon');

weatherForm.addEventListener('submit', showweatherDetails);
weatherFormLatLon.addEventListener('submit', showweatherDetailsLatLon);

function showweatherDetails(event) {
    event.preventDefault();
	
	const city = document.getElementById('city').value;
	const apiKey = '39e96540f194465a33e9e489d109c8c8';
	const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
	
	fetch(apiUrl)
		.then(res => res.json())
		.then(data => {
			weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
									  <p>Temperature: ${data.main.temp} &#8451;</p>
									  <p>Weather: ${data.weather[0].description}</p>`;})
		.catch(error => {
			console.error('Error fetching weather:', error);
			const weatherInfo = document.getElementById('weatherInfo');
			weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
		});
}

function showweatherDetailsLatLon(event) {
    event.preventDefault();
	
	const lat = document.getElementById('lat').value;
	const lon = document.getElementById('lon').value;
	const apiKey = '39e96540f194465a33e9e489d109c8c8';
	const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
	
	fetch(apiUrl)
		.then(res => res.json())
		.then(data => {
			weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
									  <p>Temperature: ${data.main.temp} &#8451;</p>
									  <p>Weather: ${data.weather[0].description}</p>`;})
		.catch(error => {
			console.error('Error fetching weather:', error);
			const weatherInfo = document.getElementById('weatherInfo');
			weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
		});
}