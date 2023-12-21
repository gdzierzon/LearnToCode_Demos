class UserService {

    baseUrl = "http://localhost:5000/api/users"

    // GET
    async getAll() {

        const token = sessionStorage.token

        const requestInfo = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
        return fetch(this.baseUrl, requestInfo).then(response => response.json())
    }

}