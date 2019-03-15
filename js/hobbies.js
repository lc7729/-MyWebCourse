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

let band1 = {
    name : "Pink Floyd",
    city : "London" ,
    country : "England",
    yearFormed : 1965,
    genres : ["Progressive rock", "psychedelic rock", "art rock"]
}
band1.genres = new Array("Progressive rock2", "psychedelic rock2", "art rock2");

let band2 = new Object();
band2.name = "Bee Gees";
band2.city = "S";
band2.country = "Sweden";
band2.yearFormed = 1976;
band2.genres = ["Soft rock", "Pop music"];

let bands = [band1, band2];

function printBands(bands) {
    bands.forEach(band => {
        console.log(`Band: ${band.name}, founded in ${band.yearFormed}`);
        console.log(band);
    });
}

printBands(bands);

