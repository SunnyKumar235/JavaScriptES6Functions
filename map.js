const characters  = require('./sampleData');

// Get array of all names.
const allnames = characters.map(name=>{
    return {
        name : name.name,
        height: name.height
    };
})
console.log(allnames);

//if we want to convert into one line.
const allnamesOneLineFunction = characters.map(name=> name.name);
console.log(allnamesOneLineFunction);

// get all heights

const allheight = characters.map(character => character.height);
console.log(allheight);


// return name and height in oneline
const minifiedRecord = characters.map(character =>({name:character.name, height: character.height}));
console.log(minifiedRecord);

//return the first name of all characters.
const getFirstName = characters.map(character=>character.name.split(" ")[0]);
console.log(getFirstName);
