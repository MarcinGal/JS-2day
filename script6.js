// 1 sposób 

let a = [];

for (i=0; i < 8; i++){
 a[i]= parseInt(Math.random() * 10 +1)
}

console.log(a);

let b = a.slice(2,6);
console.log(b);


// 2 sposób

var numbers = [];
var numbersSize = 14;
for (var i = 0; i < numbersSize; i++) {
  numbers[i] = parseInt(Math.random() * 10 + 1);
}

console.log('tablica poczatkowa = ', numbers);

var startIndex = (numbersSize / 2) - 2;
console.log('startIndex = ', startIndex);
var numberOfItems = 4;
var newArray = numbers.slice(startIndex, startIndex + numberOfItems);
console.log('srodkowe 4 elementy = ', newArray);