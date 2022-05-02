// Explore the filter operator on javaScript.
const characters =[
    {
        name : "Sunny",
        height: 5.7,
        mass : 62,
        eye_color: "blue",
        gender : "Male" 
    },

    {
        name : "SpiderMan",
        height: 5.8,
        mass : 72,
        eye_color: "blue",
        gender : "Male" 
    },
    {
        name : "WonderWomen",
        height: 5.7,
        mass : 101,
        eye_color: "blue",
        gender : "Women" 
    },
    {
        name : "Iron Man",
        height: 5.7,
        mass : 120,
        eye_color: "blue",
        gender : "Man" 
    },
]
// Get character with mass greater than 100
let massGraterThan100 = characters.filter(character=>{
    return character.mass > 100;
});
console.log(massGraterThan100);

// Make it one line arrow function.
let GreaterThan100 = characters.filter((character)=> character.mass>100 );

//Get shorter characters using height.

let shorterCharacters = characters.filter(character =>(character.height<6));
console.log(shorterCharacters);

//Get all male character.
let maleCharacters = characters.filter(character => character.gender === 'Male');
console.log(maleCharacters);

//Get All female charater.

let femaleCharacters = characters.filter(character => character.gender === "Women");
console.log(femaleCharacters);








