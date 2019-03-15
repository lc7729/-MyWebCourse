'use strict';

var hobbiesArray = [{ name: 'volleyball', lengthInYearsAtHobby: 25 }, { name: 'cooking', lengthInYearsAtHobby: 15 }, { name: 'swimming', lengthInYearsAtHobby: 11 }];

function logHobby(oneHobby) {
    console.log(oneHobby.name + ': A hobby for ' + oneHobby.lengthInYearsAtHobby + ' years');
}

function logHobbies() {
    for (var index = 0; index < hobbiesArray.length; index++) {
        var hobby = hobbiesArray[index];
        logHobby(hobby);
    }
}

logHobbies();



function returnHobbiesHTML() {
    var retStr = '<br><ul>';
    for (var index = 0; index < hobbiesArray.length; index++) {
        var hobby = hobbiesArray[index];
        retStr += '<li>';
        retStr += hobby.name + ': A hobby for ' + hobby.lengthInYearsAtHobby + ' years';
        retStr += '</li>';
    }
    retStr += '</ul>';

    return retStr;
}

document.getElementById("hobbiesInfo").innerHTML=returnHobbiesHTML();