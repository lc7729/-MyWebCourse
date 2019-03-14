let hobbiesArray = ['Reading', 'Music', 'Drawing'];

function printHobbies(hobbies) {
    console.log(`I like ${hobbies.length} things:`);
    for (let index=0; index<hobbies.length; index++) {
        console.log(`I like ${hobbies[index]}`);
    }
}

printHobbies(hobbiesArray);