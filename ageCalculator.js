//-----------age calculator using function--------------
let age, freindAge;

function ageCalc(birthYear){
    return 2020 - birthYear;
} // function

age = ageCalc(Number(prompt('Write your birth year here')));
console.log(age);

freindAge = ageCalc(Number(prompt("Write your friend's birth year here")));
console.log(freindAge);