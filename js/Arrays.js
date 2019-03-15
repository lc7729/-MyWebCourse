let hobbiesArray = ['Reading', 'Music', 'Drawing'];

function printHobbies(hobbies) {
    console.log(`I like ${hobbies.length} things:`);
    for (let index=0; index<hobbies.length; index++) {
        console.log(`I like ${hobbies[index]}`);
    }
}

printHobbies(hobbiesArray);

let myColor = ["Red", "Green", "White", "Black"];
console.log('My colors: ' + myColor.join(','));
console.log('My colors: ' + myColor.join('+'));

let arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
