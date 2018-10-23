// let a = 5;

// if(a === 1){
//     console.log("1");
// }

// else if(a == 1){
//     console.log("2");
// }

// else if(a === 2){
//     console.log(a);
// }

// else{
//     console.log(0);
// }


// let a = 'ala';

// if(a === 1){
//     console.log("1");

// }else if(typeof a == 'string'){
//     console.log("to jest string");

// }if(a === 'ala' && typeof a == 'string'){
//     console.log("hello ala");

// }else if(a === null){
//     console.log("mamy null");

// }else{
//     console.log("oh no!");
// }

// var x = '1';

// if (x === 1) {
//   console.log(1);
// } else if (x === '1') {
//   console.log(2);
// } else if (x === 3) {
//   console.log(x);
// } else {
//   console.log(0);
// }

// switch (x) {
//     case 1:
//         console.log(1);
//         break;
//     case "1":
//         console.log(2);
//         break;
//     case 3:
//         console.log(x);
//         break;
//     default:
//         console.log(0);
//         break;
// }

// var x = 'ala';

// if (x === 1) {
//   console.log(1);
// } else if (typeof x == 'string') {
//   console.log('to jest string');
//   if (x === 'ala') {
//     console.log('hello ala');
//   }
// } else if (x === null) {
//   console.log('mamy null');
// } else {
//   console.log('oh no!');
// }

// switch (x) {
//     case 1:
//         console.log(1);
//         break;
//     case
// }

// let s = 1;

// let t = s === 1 ? 1 :
//     s === '1' ? 2 :
//         s === 3 ? s :
//             0;

// let zwierz = 'chomik';
// let zwierzeta = zwierz === 'chomik' ? "Chomiki są fajne." : "Chomiki nie dają rady.";
// console.log(zwierzeta)


// var numbers = [1, 2, 3, 4, 5];

// console.time('in loop');
// for (var i = 0; i < numbers.length; i++){
//     console.log(numbers[i]);
// }

// console.timeEnd('in loop');

// console.time('before loop');
// var length = numbers.length
// for (var i = 0; i < length; i++){
//     console.log(numbers[i]);
// }

// console.timeEnd('before loop');


// let numbers=[];

// for (let i = 0; i < 100; i ++){
//    numbers.push(Math.floor(Math.random() * 255));
// }

// console.time('in loop')
// for(let i = 0; i < numbers.length; i++){
//    console.log(numbers[i]);
// }
// console.timeEnd('in loop')

// console.time('before loop')
// let length = numbers.length;
// for (let i = 0; i < length; i++){
//    console.log(numbers[i]);
// }
// console.timeEnd('before loop')

// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// i = 0;

// while(i <10){
//     i++;
//     console.log(a[10-i]);
// }


var i = 0;
var n = 0;
while (i < 10) {
  i++;
  if (i == 3) {
    continue;
  }
  if (i == 5) {
    break;
  }
  console.log(i);
}


var i = 0;
var n = 0;
while (i < 10) {
  i++;
  if (i == 3) {
    continue;
  }
  if (i == 5) {
    break;
  }
  n += i;
  console.log(n);
}