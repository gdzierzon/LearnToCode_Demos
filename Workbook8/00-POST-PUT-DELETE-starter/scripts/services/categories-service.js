class CategoriesService {

    baseUrl = "http://localhost:3000/categories"

    async getAll() {
        return fetch(this.baseUrl).then(response => response.json())
    }

    async getById(id) {
        let url = `${this.baseUrl}/${id}`
        return fetch(url).then(response => response.json())
    }

    async add(category) {
    }

    async update(id) {
    }

    async delete(id) {
    }
}