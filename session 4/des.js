// Destructuring objects
// Trimmer => name, brand, rating, features, imgs, price

var profile = {
  name: "Hani",
  lastName: "Thakkar",
  age: 22,
  posts: [
    { name: "Post no 1", likes: 100 },
    { name: "Post no 2", likes: 2000 },
  ],
  account: "Facebook",
};

// console.log(profile.firstName);
const {
  name,
  lastName,
  posts: [{ likes, name: postName1 }, { likes: likes2 }],
} = profile;
// console.log(likes);
// console.log(likes2);
// [80,90,70] => sort these
// var likes

// var likes

// HOF
// map, filter, forEach, reduce => arrays => input
// map
// var arr = [
//   { name: "Post no 1", likes: 100 },
//   { name: "Post no 2", likes: 2000, comments: 100 },
//   { name: "Post no 3", likes: 100 },
//   { name: "Post no 4", likes: 200 },
//   { name: "Post no 5", likes: 100 },
//   { name: "Post no 6", likes: 20000, comments: 1000 },
//   { name: "Post no 7", likes: 100 },
//   { name: "Post no 8", likes: 200 },
//   { name: "Post no 9", likes: 100 },
//   { name: "Post no 10", likes: 200 },
//   { name: "Post no 11", likes: 100 },
//   { name: "Post no 12", likes: 200 },
// ];
// Optional chaining
// arr.map(function (post, index) {
//   //   console.log(post?.comments, index);
// });

// var filteredList = arr.filter(function (post, index) {
//   return index > 3;
// });
// console.log(filteredList);
// console.log(arr);

// 3 parameters => arr[i], i, arr
var person = {
  //   address: {
  //     street: "Gandhi Street",
  //     city: "Bangalore",
  //   },
};
// backend => person = {}
console.log(person.address?.city);
// Optional chaining
// types

var arr = [1, 2];

console.log(arr[10]);
// true ? 'boolean truthy':'falsy'
// Ternary operator => if else
