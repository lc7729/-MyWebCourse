function displayName(name) {
    console.log('Hello, ' + name)
}

displayName("Jennifer");

function convertCToF(c) {
    let f = ((c * 9)/5) + 32;
    console.log(`F of ${c} is ${f}`);
}

convertCToF(60);

function convertFToC(f) {
    let c = ((f - 32) * 5) / 9;
    console.log(`C of ${f} is ${c}`);
}

convertFToC(212);