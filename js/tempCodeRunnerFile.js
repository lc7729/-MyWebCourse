class Hobby {
    constructor(name, lengthInYearsAtHobby) {
        this.name = name;
        this.lengthInYearsAtHobby = lengthInYearsAtHobby;
    }
}

let hobbies = [new Hobby("Reading", 50), new Hobby("Music", 46), new Hobby("Drawing", 44)];

// let hobbies = [
//     {
//         name: "Reading",
//         lengthInYearsAtHobby: 50
//     },
//     {
//         name: "Music",
//         lengthInYearsAtHobby: 46
//     },
//     {
//         name: "Drawing",
//         lengthInYearsAtHobby: 44
//     }
// ]

function printHobby(hobby) {
    console.log(`Hobby: ${hobby.name} enjoyed for years: ${hobby.lengthInYearsAtHobby}`)
}

for (let hobby of hobbies) {
    printHobby(hobby);
}

