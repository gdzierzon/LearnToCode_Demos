
function getStudents(){

    let students = [
        {name: "Zephaniah", scores: [100, 96, 99, 92]},
        {name: "Pursalane", scores: [92, 89, 96, 100, 94]},
        {name: "Siddalee", scores: [86, 72, 92]},
        {name: "Ian", scores: [98, 84, 89, 100, 100, 76]},
        {name: "Elisha", scores: [89, 100]},
        {name: "Ezra", scores: [100, 99, 100, 87]}
    ];

    return students;
}


function displayStudentScores() {

    const students = getStudents();

    for(let i = 0; i < students.length; i++) {

        const currentStudent = students[i];

        console.log(currentStudent.name);
        for(let j = 0; j < currentStudent.scores.length; j++) {
            const currentScore = currentStudent.scores[j];
            console.log(`  ${currentScore}`);
            // console.log("  " + currentScore);
        }
    }

}

displayStudentScores();

