const PI = 3.14;
let radius = 3;

let area = radius * radius * PI;

console.log(area);

radius = 20;

area = radius * radius * PI;
console.log(area);

// Type Coersion
const ONE = 1;
const TWO = '2';

let result = ONE * TWO;
console.log(result);

// Numeral + String = Concat
result = ONE + TWO;
console.log(result);

result = ONE + Number(two);
console.log(result);

// Dealing with Scope
let course = "CSE131"; //global scope
if (true) {
    let student = "John";
    console.log(course);  //works just fine, course is global
    console.log(student); //works just fine, it's being accessed within the block
}
console.log(course); //works fine, course is global
console.log(student); //does not work, can't access a block variable outside the block
                    