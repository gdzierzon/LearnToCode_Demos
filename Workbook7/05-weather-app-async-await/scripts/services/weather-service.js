
class WeatherService {
    baseUrl = "https://api.weather.gov"

    async getForecastByCoordinates(lat, lng)
    {
        const url = `${this.baseUrl}/points/${lat},${lng}`

        let response = await fetch(url)
        let data = await response.json()

        return this.getForecast(data.properties.forecast)
    }

    async getForecast(url) 
    {
        let response = await fetch(url)
        let data = await response.json()

        let forecast = data.properties.periods

        return forecast
    }
}