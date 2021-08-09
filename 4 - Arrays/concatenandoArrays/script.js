const groupOne = [1, 2, 3];
const groupTwo = [4, 5, 6];
const groupThree = groupOne.concat(groupTwo);
const groupFour = [...groupOne, ...groupTwo];

console.log(groupThree, `Tipo: ${typeof(groupThree)}`);
console.log(groupFour, `Tipo: ${typeof(groupFour)}`);

