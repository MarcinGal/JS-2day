var array = [false, 0, true, 'ala', null];
console.log(array[2]);

var newArray = array;


// ------------
var obj = {
  ala: false,
  dlugosc: 123,
  elementy: ['ola', false, null, 'mariusz'],
  'index-1': 'pozycja 1',
  'index-2': 'pozycja 2',
  'index-3': 'pozycja 3',
};

console.log(obj.ala);
console.log(obj.dlugosc);
console.log(obj.elementy[3]);

for (let i = 0; i < 3; i++) {
  console.log(obj['index-' + (i + 1)]);
}

console.log(Object.keys(obj), Object.values(obj));