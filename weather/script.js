const apiKey = 'dc58c0cf9951f4110843eefdd3e08f1a';

const locationText = document.getElementById('location-text');
const temperature = document.getElementById('temperature');
const weatherDesc = document.getElementById('weather-desc');
const precipitationValue = document.getElementById('precipitation-value');
const humidityValue = document.getElementById('humidity-value');
const windValue = document.getElementById('wind-value');
const dailyForecastsContainer = document.getElementById('daily-forecasts-container');
const graphCanvas = document.getElementById('graph-canvas');
const dateTimeElement = document.getElementById('date-time');
const addLocationButton = document.getElementById('add-button');
const locationModal = document.getElementById('locationModal');
const closeButton = document.getElementById('close-button');
const locationInput = document.getElementById('location-input');
const submitLocationButton = document.getElementById('submit-location');
const weatherIconMain = document.getElementById('weather-icon-main');
const getStartButton = document.getElementById('get-start-button');
const weatherCardsContainer = document.getElementById('weather-cards-container');
const weatherDetailsContainer = document.querySelector('.weather-details-container');
const cityInputModal = document.getElementById('cityInputModal');
const cityInputCloseButton = document.getElementById('cityInputCloseButton');
const cityInput = document.getElementById('city-input');
const submitCityButton = document.getElementById('submit-city');

let currentChart = null;
let allWeatherData = null;

// Function to update the date and time display
function updateDateTime() {
    const now = new Date();
    const options = { weekday: 'long', day: 'numeric', month: 'long', hour: 'numeric', minute: '2-digit' };
    const formattedDate = now.toLocaleDateString('en-US', options);
    dateTimeElement.textContent = formattedDate;
}

// Function to construct the weather icon URL
function getWeatherIcon(iconCode) {
    return `images/weather_icons/${iconCode}.svg`;
}

// Function to update the main weather display elements
function updateMainDisplay(data) {
    temperature.textContent = `${Math.round(data.temp)}°`;
    weatherDesc.textContent = data.description;
    precipitationValue.textContent = `${data.precipitation * 100}%`;
    humidityValue.textContent = `${data.humidity}%`;
    windValue.textContent = `${Math.round(data.windSpeed)} km/h`;
    updateMainIcon(data.icon);

    // Get hourly data for the day from allWeatherData
    const hourlyData = allWeatherData.list
        .filter(item => new Date(item.dt * 1000).toLocaleDateString() === new Date(data.dt * 1000).toLocaleDateString())
        .map(item => ({
            time: new Date(item.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            temp: Math.round(item.main.temp),
        }));

    updateGraph(hourlyData);
}

// Function to update the main weather icon
function updateMainIcon(iconCode) {
    weatherIconMain.src = getWeatherIcon(iconCode);
}

// Function to set the main weather icon based on the description
function setMainIconBasedOnDescription(description) {
    let iconCode = '01d';

    const mainDescription = description.toLowerCase();
    if (mainDescription.includes('clear')) {
        iconCode = '01d';
    } else if (mainDescription.includes('clouds')) {
        iconCode = '03d';
    } else if (mainDescription.includes('rain')) {
        iconCode = '10d';
    } else if (mainDescription.includes('thunderstorm')) {
        iconCode = '11d';
    } else if (mainDescription.includes('snow')) {
        iconCode = '13d';
    } else if (mainDescription.includes('mist') || mainDescription.includes('smoke') || mainDescription.includes('haze') || mainDescription.includes('fog')) {
        iconCode = '50d';
    }
    updateMainIcon(iconCode);
}


// Function to fetch weather data from the API
async function fetchWeatherData(location) {
    try {
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}&units=metric`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        allWeatherData = data;

        if (data && data.list && data.list.length > 0) {
            locationText.textContent = data.city.name;
            const currentWeather = data.list[0];
            setMainIconBasedOnDescription(currentWeather.weather[0].description);

            updateMainDisplay({
                temp: currentWeather.main.temp,
                description: currentWeather.weather[0].description,
                precipitation: currentWeather.pop,
                humidity: currentWeather.main.humidity,
                windSpeed: currentWeather.wind.speed,
                icon: currentWeather.weather[0].icon,
                dt: currentWeather.dt,
            });

            const dailyForecast = aggregateDailyData(data.list);
            displayDailyForecast(dailyForecast);
            return data;
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}

// Function to aggregate forecast data for each day
function aggregateDailyData(forecastList) {
    const dailyData = {};
    forecastList.forEach(item => {
        const date = new Date(item.dt * 1000).toLocaleDateString();
        if (!dailyData[date]) {
            dailyData[date] = {
                minTemp: Infinity,
                maxTemp: -Infinity,
                iconCodes: [],
                day: new Date(item.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' }),
                details: [],
                dt: item.dt,
            };
        }

        dailyData[date].minTemp = Math.min(dailyData[date].minTemp, item.main.temp);
        dailyData[date].maxTemp = Math.max(dailyData[date].maxTemp, item.main.temp);
        dailyData[date].iconCodes.push(item.weather[0].icon);
        dailyData[date].details.push({
            time: new Date(item.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            temp: Math.round(item.main.temp),
            description: item.weather[0].description,
            precipitation: item.pop,
            humidity: item.main.humidity,
            windSpeed: item.wind.speed,
            icon: item.weather[0].icon,
            dt: item.dt,
        });
    });

    for (const date in dailyData) {
        const iconCounts = {};
        dailyData[date].iconCodes.forEach(icon => {
            iconCounts[icon] = (iconCounts[icon] || 0) + 1;
        });
        dailyData[date].mainIcon = Object.keys(iconCounts).reduce((a, b) => iconCounts[a] > iconCounts[b] ? a : b);
    }
    return Object.values(dailyData);
}

// Function to display the daily forecast cards
function displayDailyForecast(dailyForecasts) {
    dailyForecastsContainer.innerHTML = "";

    dailyForecasts.slice(0, 7).forEach(forecast => {
        const forecastItem = document.createElement('div');
        forecastItem.classList.add('daily-forecast-item');
        forecastItem.dataset.details = JSON.stringify(forecast.details);
        const iconUrl = getWeatherIcon(forecast.mainIcon);
        forecastItem.innerHTML = `
              <p class="day">${forecast.day}</p>
            <img src="${iconUrl}" alt="weather icon" class="weather-icon">
            <p class="temp-max">${Math.round(forecast.maxTemp)}°</p>
            <p class="temp-min">${Math.round(forecast.minTemp)}°</p>
        `;

        forecastItem.addEventListener('click', () => {
            const details = forecast.details;
            if (details && details.length > 0) {
                const dayDetail = details[0]; // Use the first entry as representative for day
                updateMainDisplay({
                    temp: dayDetail.temp,
                    description: dayDetail.description,
                    precipitation: dayDetail.precipitation,
                    humidity: dayDetail.humidity,
                    windSpeed: dayDetail.windSpeed,
                    icon: dayDetail.icon,
                    dt: forecast.dt
                });
            }
        });
        dailyForecastsContainer.appendChild(forecastItem);
    });
}

// Function to update the temperature graph
function updateGraph(hourlyData) {
    const timeLabels = hourlyData.map(data => data.time);
    const temperatureData = hourlyData.map(data => data.temp);

    if (currentChart) {
        currentChart.destroy();
    }

    currentChart = new Chart(graphCanvas, {
        type: 'line',
        data: {
            labels: timeLabels,
            datasets: [{
                label: 'Temperature (°C)',
                data: temperatureData,
                borderColor: '#4f67e8',
                backgroundColor: '#4f67e820',
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                x: {
                    display: true,
                    title: {
                        display: false
                    },
                    grid: {
                        display: false
                    }
                },
                y: {
                    display: false,
                    title: {
                        display: false
                    }
                }
            }
        }
    });
}

// Event listener for the add location button
addLocationButton.addEventListener('click', function () {
    locationModal.style.display = 'flex';
});

// Event listener to close the add location modal
closeButton.addEventListener('click', function () {
    locationModal.style.display = 'none';
});

// Event listener to close the add location modal when clicked outside of it
window.addEventListener('click', function (event) {
    if (event.target === locationModal) {
        locationModal.style.display = 'none';
    }
});

// Event listener for submitting the location from the add location modal
submitLocationButton.addEventListener('click', function () {
    const location = locationInput.value;
    fetchWeatherData(location);
    locationModal.style.display = 'none';
});

// Function to display weather cards for multiple cities
function displayWeatherCards(cities) {
    weatherCardsContainer.innerHTML = '';
    weatherCardsContainer.style.display = 'flex';
    weatherDetailsContainer.style.display = 'none';

    cities.forEach((city, index) => {
        fetchWeatherData(city).then(data => {
            if (data) {
                const currentWeather = data.list[0];
                const card = document.createElement('div');
                card.classList.add('weather-card');

                let iconCode = '01d'; // Default icon
                const mainDescription = currentWeather.weather[0].description.toLowerCase();
                if (mainDescription.includes('clear')) {
                    iconCode = '01d';
                } else if (mainDescription.includes('clouds')) {
                    iconCode = '03d';
                } else if (mainDescription.includes('rain')) {
                    iconCode = '10d';
                } else if (mainDescription.includes('thunderstorm')) {
                    iconCode = '11d';
                } else if (mainDescription.includes('snow')) {
                    iconCode = '13d';
                } else if (mainDescription.includes('mist') || mainDescription.includes('smoke') || mainDescription.includes('haze') || mainDescription.includes('fog')) {
                    iconCode = '50d';
                }

                card.innerHTML = `
                   <div class ="card-header">
                    <h2 class="city-name">${data.city.name}</h2>
                    <img class ="card-icon" src = "${getWeatherIcon(iconCode)}">
                   </div>
                    <p class ="card-temp">${Math.round(currentWeather.main.temp)}°</p>
                    <p class="card-description">${currentWeather.weather[0].description}</p>
                  <div class="card-stats">
                     <div class ="stats-item">
                      <img src ="images/precipitation.svg" class="icon">
                         <span class = "card-stats-value">${currentWeather.pop * 100}%</span>
                    </div>
                     <div class ="stats-item">
                       <img src ="images/humidity.svg" class="icon">
                       <span class = "card-stats-value">${currentWeather.main.humidity}%</span>
                  </div>
                  <div class ="stats-item">
                      <img src ="images/wind.svg" class="icon">
                      <span class = "card-stats-value">${Math.round(currentWeather.wind.speed)} km/h</span>
                     </div>
                  </div>
             `;
                weatherCardsContainer.appendChild(card);
                setTimeout(() => card.classList.add('show'), index * 150);
            }
        });
    });
}

// Event listener for the get started button
getStartButton.addEventListener('click', function () {
    cityInputModal.style.display = 'flex';
});

// Event listener to close the city input modal
cityInputCloseButton.addEventListener('click', function () {
    cityInputModal.style.display = 'none';
});

// Event listener to close the city input modal when clicked outside of it
window.addEventListener('click', function (event) {
    if (event.target === cityInputModal) {
        cityInputModal.style.display = 'none';
    }
});

// Event listener for submitting cities from city input modal
submitCityButton.addEventListener('click', function () {
    const citiesInput = cityInput.value;
    if (citiesInput) {
        const cities = citiesInput.split(',').map(city => city.trim());
        displayWeatherCards(cities);
        cityInputModal.style.display = 'none';
    }
});

// Initial setup: fetch weather for London and start the time updates
fetchWeatherData("London");
updateDateTime();
setInterval(updateDateTime, 60000);