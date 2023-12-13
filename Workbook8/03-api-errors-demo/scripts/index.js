let coursesService

document.addEventListener("DOMContentLoaded", () => {
    coursesService = new CoursesService()

    const getCoursesButton = document.getElementById("getCoursesButton")
    getCoursesButton.addEventListener("click", getCourseList)

    const addCourseButton = document.getElementById("addCourseButton")
    addCourseButton.addEventListener("click", addCourse)

})

function getCourseList() 
{
    coursesService.getAll()
}

function addCourse()
{
    const course = {
        courseName: "Advaned APIs",
        courseNum: 301,
        dept: 'CompSci'
    }

    coursesService.addCourse(course)
}