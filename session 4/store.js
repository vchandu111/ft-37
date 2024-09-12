// numbers, strings, boolean, null, undefined, symbol, bigInt => Primitive => stored by values

// Objects, Arrays, Functions => Stored by Reference

var a = 10;
var b = a;
// b is now a copy of a
b = 20;
// console.log(a);
// console.log(b);

var obj1 = { user: "Arnab" };

var obj2 = obj1;
// obj2 is a reference to obj1
obj2.user = "Tejas";

// console.log(obj1.user);
// console.log(obj2.user);

var str = "Hello";
var str2 = str;
// str2 is a copy of str1
str2 = "Welcome";

// console.log(str);
// console.log(str2);

var arr1 = [1, 2, 3];

var arr2 = arr1;
// arr2 is a reference of arr1

arr2[0] = 4;

// console.log(arr1);
// console.log(arr2);

// Arrow functions
// Regular function
function greet(greeting, name) {
  return `${greeting} from ${name}`;
}

var newGreet = (greeting, name) => {
  return `${greeting} from ${name}`;
};
var shortGreet = (greeting, name) => `${greeting} from ${name}`;

var square = (x) => x * x;

// console.log(square(5));

let greeting = () => console.log(`Hello`);
// greeting();
function greetStudents() {
  return console.log("Hello");
}

// greetStudents();

// Object shorthand
var age = 23;
var city = "Bangalore";

var obj = {
  age,
  city,
};

// console.log(obj);

// Default parameters
function Profile(name, age, salary = 100000) {
  let profObj = {
    name,
    age,
    salary,
  };
  //   console.log(profObj);
}

Profile("Pooja", 23);
Profile("Sharwan", 24, 50000);

// Discount
function totalCost(itemsCost, discount = 0) {
  var totalCost = itemsCost - (discount * itemsCost) / 100;
  //   if (itemsCost > 2999) {
  //     totalCost = itemsCost - (discount * itemsCost) / 100;
  //   } else {
  //     totalCost = itemsCost;
  //   }
}

// Rest and Spread Operators
// Rest Operator

// var [firstNo, secondNo, ...remaining] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(firstNo);
// console.log(remaining);
// console.log(secondNo);

// Spread Operator
var arr = [1, 2, 3, 4, 5];

// console.log(...arr);

var arr1 = [7, 8, 9, ...arr];

var arr2 = [7, 8, 9, arr];

// console.log(arr1);
// console.log(arr2);

var user = {
  batch: "Full Time",
  course: "HTML & CSS",
};

var user1 = {
  ...user,
  name: "Kuldeep",
  age: 22,
};

// console.log(user1);
// Fruits => Vendor => Baskets => Diff fruits => Apples, Oranges => Display in some manner => Spread
//  Closing the shop, Baskets => Store => few oranges and apples => 1 single basket => Remaning are stored => Rest

// 5 baskets => 2 => Apples, 3 => Oranges => Spread
// 4 baskets full of fruits => 1 and 1/2 Apples are left and 1 and 3/4 basket of oranges are left
// 1basket => 1 basket of Apples
// 1 basket => 1 basket of Oranges
// Store the rest in the remaining 2 baskets

// Destructuring
// In arrays
var numsArr = [1, 2];
const [first, second] = numsArr;
console.log(first);
var [a, b, c, d, ...rest] = [1, 2, 3, 4, 5, 6, 7];
