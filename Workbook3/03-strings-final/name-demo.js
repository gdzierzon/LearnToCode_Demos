/*
Samuel Joseph Anderson
Emily Grace Mitchell
Benjamin Daniel Sanchez
Sophia Marie Turner
Ethan William Parker
*/
//Emily Grace Mitchell
//Emily

//Grace Mitchell
//Grace

//Mitchell

function getFirstName(fullName)
{
    let end = fullName.indexOf(" ");    
    return fullName.substring(0, end);
}

function removeFirstName(fullName)
{
    let end = fullName.indexOf(" ");
    return fullName.substring(end+1);
}


let fullName = "Emily Grace Mitchell";

let firstName = getFirstName(fullName);
//Grace Mitchell
fullName = removeFirstName(fullName);

let middleName = getFirstName(fullName);
//Mitchell
let lastName = removeFirstName(fullName);


console.log(firstName);
console.log(middleName);
console.log(lastName);



