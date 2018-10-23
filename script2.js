let b = [parseInt(Math.random() * 10 +1), parseInt(Math.random() * 10 +1), parseInt(Math.random() * 10 + 1), parseInt(Math.random() * 10 +1), parseInt(Math.random() * 10 +1), parseInt(Math.random() * 10 +1)];

// for(i=0; i < 6; i++){
//     if(b > 5){
//         break;
//     }
//     console.log(b[i]);
// }

var i = 0;
while (i < 6) {
  i++;
  if (b[i] > 5) {
    break;
  }
    console.log(b[i]);
}
