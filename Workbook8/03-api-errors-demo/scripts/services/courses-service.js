class CoursesService {
    baseUrl = 'http://localhost:8081/api/courses'

    getAll()
    {
        fetch(this.baseUrl)
                .then(response => response.json())
                .then(courses => {
                    console.table(courses);
                })
                .catch(error => {
                    console.table(error)
                })
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
                .then(course => {
                    console.table(course);
                })
    }
}