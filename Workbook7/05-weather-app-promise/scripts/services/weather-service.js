
class WeatherService {
    baseUrl = "https://api.weather.gov"

    getForecastByCoordinates(lat, lng)
    {
        const url = `${this.baseUrl}/points/${lat},${lng}`

        return fetch(url).then(response => response.json())
        .then(data => {
            return this.getForecast(data.properties.forecast)
        })
    }

    getForecast(url) 
    {
        return fetch(url).then(response => response.json())
                         .then(data => {
                            return data.properties.periods
                         })
    }
}