const characters = require('./sampleData');

// true if there is atleast one male in all characters.
const oneMale = characters.some(character => character.gender === 'Male');
console.log(oneMale);

// true if there is atleast one blue eye in all characters.
const oneEyeColor = characters.some(character=>character.eye_color ==='blue');
console.log(oneEyeColor);

// true if there is atleast one  taller than 200 in all characters.
const taller = characters.some(character=>character.height>200);
console.log(taller);

// true if there is atleast one man who have mass less than 50 in all characters.
const oneMasslessThan50 = characters.some(character=> character.mass<50);
console.log(oneMasslessThan50);

