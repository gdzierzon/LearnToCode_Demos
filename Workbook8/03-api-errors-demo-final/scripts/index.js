let coursesService

document.addEventListener("DOMContentLoaded", () => {
    coursesService = new CoursesService()

    const getCoursesButton = document.getElementById("getCoursesButton")
    getCoursesButton.addEventListener("click", getCourseList)

    const addCourseButton = document.getElementById("addCourseButton")
    addCourseButton.addEventListener("click", addCourse)

})

async function getCourseList() 
{
    try {
        let courses = await coursesService.getAll()
        console.table(courses)
    } catch (error) {
        alert("something went wrong")
    }
    
}

async function addCourse()
{
    const course = {
        courseName: "Advaned APIs",
        courseNum: 301,
        dept: 'CompSci',
        instructor: "Gregor",
        startDate: "Jan 15",
        numDays: 10
    }

    try {        
        const newCourse = await coursesService.addCourse(course)
        alert(`${newCourse.courseName} has been added`)
    } catch (error) {
        alert(`There was an error adding ${course.courseName}`)
    }
    

}