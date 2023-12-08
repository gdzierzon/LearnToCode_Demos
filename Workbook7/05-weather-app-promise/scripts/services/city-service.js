
class CityService
{
    baseUrl = "http://localhost:3000/cities"

    search(name) {
        const url = `${this.baseUrl}?city_like=${name}&_sort=city&_limit=10`

        return fetch(url).then(response => response.json())
    }
}