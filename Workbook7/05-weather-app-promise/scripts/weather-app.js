// declare services
let weatherService
let cityService

// declare page controls
let citySearchInput
let cityListContainer
let forecastTemplate
let forecastContainer

document.addEventListener("DOMContentLoaded", () => {
    // initialize services
    weatherService = new WeatherService()
    cityService = new CityService()

    // initialize page controls
    citySearchInput = document.getElementById("citySearchInput")
    cityListContainer = document.getElementById("cityListContainer")
    forecastTemplate = document.getElementById("forecastTemplate")
    forecastContainer = document.getElementById("forecastContainer")

    // add the search key handler
    citySearchInput.addEventListener("keyup", searchCities)

})

function searchCities()
{
    const searchValue = citySearchInput.value

    // use the city service to search for cities
    cityService.search(searchValue)
               .then(cities => {
                    cityListContainer.innerHTML = ''

                    cities.forEach(displayCity);
               })
        
}

function displayCity(city) {
    let button = document.createElement("div")
    button.classList.add("btn")
    button.classList.add("btn-light")
    button.classList.add("city-button")
    button.classList.add("mt-2")
    button.classList.add("w-100")
    
    button.innerText = `${city.city}, ${city.state}`

    // add the lat & lng to the button to store the data
    button.setAttribute('data-lat', city.lat)
    button.setAttribute('data-lng', city.lng)

    button.onclick = getForecast

    cityListContainer.appendChild(button)
}

function getForecast(event){

    const data = event.target.dataset
    console.log(data.lat, data.lng);

    // use the weather service to get the forecast 
    weatherService.getForecastByCoordinates(data.lat, data.lng)
                  .then(forecast => {
                        forecastContainer.innerHTML = ''

                        forecast.forEach(displayForcast)
                  })
}

function displayForcast(detail)
{
    // clone template html instead of building the card by hand
    const card = forecastTemplate.content.cloneNode(true)

    // set all values
    card.getElementById("weather-header").innerText = detail.name
    card.getElementById("weather-icon").src = detail.icon
    card.getElementById("temperature-value").innerText = `${detail.temperature} ${detail.temperatureUnit}`
    card.getElementById("wind-value").innerText = `${detail.windSpeed} ${detail.windDirection}`
    card.getElementById("forecast-value").innerText = `${detail.shortForecast}`

    forecastContainer.appendChild(card)
}