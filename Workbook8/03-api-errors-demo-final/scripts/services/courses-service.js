class CoursesService {
    baseUrl = 'http://localhost:8081/api/courses'

    getAll()
    {
        return fetch(this.baseUrl).then(response => response.json())
    }


    addCourse(course)
    {
        const requestInfo = {
            method: "POST",
            body: JSON.stringify(course),
            headers: {"Content-Type": "application/json; charset=UTF-8"}

        }
         return fetch(this.baseUrl, requestInfo)
                .then(response => response.json())
    }
}