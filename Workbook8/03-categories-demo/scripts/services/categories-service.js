class CategoriesService {

    baseUrl = "http://localhost:3000/categories"

    // GET
    async getAll() {
        return fetch(this.baseUrl).then(response => response.json())
    }

    // GET
    async getById(id) {
        let url = `${this.baseUrl}/${id}`
        return fetch(url).then(response => response.json())
    }

    // POST
    async add(category) {
        // create a requestInfo object
        const requestInfo = {
            method: "POST",
            body: JSON.stringify(category),
            headers: {"Content-type": "application/json;charset=UTF-8"}
        }

        return fetch(this.baseUrl, requestInfo).then(response => response.json())
    }

    // PUT
    async update(category) {
        let url = `${this.baseUrl}/${category.id}`

        const requestInfo = {
            method: "PUT",
            body: JSON.stringify(category),
            headers: {"Content-type": "application/json;charset=UTF-8"}
        }

        return fetch(url, requestInfo).then(response => response.json())
    }

    // DELETE
    async delete(id) {
        let url = `${this.baseUrl}/${id}`
        const requestInfo = {
            method: "DELETE"
        }

        return fetch(url, requestInfo)
    }
}