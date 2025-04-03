/*

1. global scope
2. function scope
3. block scope
var is funcion and global scoped
let and const are global, function and block scoped

*/

// function sayHello() {
//   var name = "John";
//   console.log(name);
// }

// let name = "John";

// function sayHello() {
//   var a = 10;

//   function sayHi() {
//     console.log(a);

//     function sayBye() {
//       console.log("Bye");
//     }
//     sayBye();
//   }
//   sayHi();
// }

// sayHello();

// 1. closure
// 2. Event loop and all stack

// function counter() {
//   var count = 0;
//   function increamentCount() {
//     count++;
//     console.log(count);
//   }

//   function decreament() {
//     count--;
//     console.log(count);
//   }

//   return { increamentCount, decreament };
// }

// var c = counter();
// c.increamentCount();
// c.decreament();
// c.increamentCount();

async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}

async function async2() {
  console.log("async2");
}

console.log("script start");

setTimeout(function () {
  console.log("setTimeout");
}, 0);

async1();

new Promise(function (resolve) {
  console.log("promise1");
  resolve();
}).then(function () {
  console.log("promise2");
});

console.log("script end");
