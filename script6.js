let a = [];

for (i=0; i < 8; i++){
 a[i]= parseInt(Math.random() * 10 +1)
}

console.log(a);

let b = a.slice(2,6);
console.log(b);
