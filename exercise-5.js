// Logic Challenge - Palindrome
function palindrome(kata) {
    yArray = kata.split('');
    //xArray = yArray.reverse();        // gak boleh pakai ini katanya...
    var x = yArray.length;
    var xArray = [];
    for (i=x; i>0; i-- ) {
        xArray.push(yArray[i-1]);
    }
//    balikKata = xArray.join('');        // gak boleh pakai ini juga katanya...
    // console.log(xArray);
    var balikKata = ''
    var k = xArray.length;
    for (j=0; j<k; j++) {
        balikKata = balikKata + xArray[j];
    }
    // console.log(balikKata)
    if (kata === balikKata) {
        hasil = true;
    }
    else {
        hasil = false;
    }
    return hasil;
    // you can only write your code here!
}
  
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false


//   function palindrome(kata) {
//     y = kata.split('');
//     if (y[0]===y[y.length - 1]
//         && y[1]===y[y.length - 2]
//         && y[2]===y[y.length - 3]
//         && y[3]===y[y.length - 4]
//         && y[4]===y[y.length - 5]
//         && y[5]===y[y.length - 6]
//         && y[6]===y[y.length - 7]
//         && y[7]===y[y.length - 8]
//         ){
//         hasil = true;
//     }else hasil = false;
//     return hasil;
//     //console.log(wordsArray);
//     // you can only write your code here!
// }