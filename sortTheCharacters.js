const characters = require('./sampleData');

// sorted by mass
const sortByMass = characters.sort((a,b)=> {
    return a.mass-b.mass;
})

console.log(sortByMass);

//sorted by height.

const sortByHeight = characters.sort((a,b)=>{
    return a.height-b.height;
})

console.log(sortByHeight);

// sorted by name (string function)
const sortByName = characters.sort((a,b)=>{
    if(a.name<b.name) return -1
    return 1;
})

console.log(sortByName);

const sortedByGender  =  characters.sort((a,b)=>{
    if(a.gender ==='Women') return -1;
    return 1;
})

console.log(sortedByGender);