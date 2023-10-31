// while
let counter = 0;

while(counter < 20) {

    if( counter % 2 == 0) {
        console.log(counter);
    }

    counter++;
}


// do while
// is guaranteed to run at least once

// do
// {
//     console.log(counter);

//     counter++;
// }while(counter < 20);


console.log("-----------------");

// for

for(let i = 0; i < 10; i++) {

    if(i % 2 == 1) {
        continue;
    }
    console.log(`i = ${i}`);
}