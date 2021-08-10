let a  = 1;
let b  = 2;
let c  = 3;

let letters = [c, a, b];

[a, b, c] = letters;

console.log(a, b, c);


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let firstNumber = numbers[0];
console.log(firstNumber);

let [first, second, ...rest] = numbers;
console.log(first);
console.log(second);
console.log(...rest);

let listInList = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(listInList[1][2]);
console.log(listInList[1]);

let [, [,, six]] = listInList;
console.log(six);

let [list1, list2, list3] = listInList;
console.log(list2[2]);
