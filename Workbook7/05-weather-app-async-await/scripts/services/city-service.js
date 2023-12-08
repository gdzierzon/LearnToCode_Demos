
class CityService
{
    baseUrl = "http://localhost:3000/cities"

    async search(name) {
        const url = `${this.baseUrl}?city_like=${name}&_sort=city&_limit=10`

        const response = await fetch(url)
        const data = await response.json()

        return data
    }
}