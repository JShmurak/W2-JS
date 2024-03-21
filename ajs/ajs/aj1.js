/* #1
function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}
funcOne()
// #1.2 What will happen if the variable is declared with const instead of let ?
//- It will not work there will be an error

//#2
let a = 0;
function funcTwo() {
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}
funcThree()
funcTwo()
funcThree()
// #2.2 What will happen if the variable is declared with const instead of let ?
//- Function Two will not be able to change a to 5, another error in function two

//#3
function funcFour() {
    window.a = "hello";
}


function funcFive() {
    alert(`inside the funcFive function ${a}`);
}
funcFour()
funcFive()
//#4
let a = 1;
function funcSix() {
    let a = "test";
    alert(`inside the funcSix function ${a}`);
}
funcSix()
// #4.2 What will happen if the variable is declared with const instead of let ?\
//- Nothing will change, let or const would work in this scenario 

//#5
let a = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);
// #5.2 What will happen if the variable is declared with const instead of let ?
//Nothing will change because 'a' is blocked by brackets
*/
/*function winBattle(){
    return true;
}
const winBattle = () => true; 
var experiencePoints;
experiencePoints = winBattle() ? 10: 1;
console.log(experiencePoints);*/
/*
console.log(isString('hello')); 
//true
console.log(isString([1, 2, 4, 0]));
//false
const isString = value => (typeof value) === 'string';*/

/*const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
colors.forEach((color, index) => 
{
    console.log(`${index + 1}# choice is ${color}.`);
});*/
 /*
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];
colors.forEach((color, index) => 
{
    const placement = index < 3 ? ordinal[index + 1] : ordinal[0];
    console.log(`${index + 1}${placement} choice is ${color}.`);
});*/


