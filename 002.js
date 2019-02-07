/*
=====================
Word Spread Reduction
=====================

[INSTRUCTION]
buatlah program yang dapat melakukan penyebaran (spread) dimulai dari 1 char dalam suatu kata, lalu dapat menyusut lagi
menjadi 1 char, hingga membentuk seperti segitiga.

[EXAMPLE]
var name = "Dimas"

output: 
D
Di
Dim
Dima
Dimas
Dima
Dim
Di
D
*/

var name = "Dimas"
// your code here
var nameLength = name.length
i = 1;
j = (name.length -1);
while (i <= (nameLength)) {
        console.log(name.substring(0 ,i));
    i++;
}
while (j > 0) {
    console.log(name.substring(0 ,j));
j--;
}
 // var res = name.substr(0, 2); 
// console.log (res);