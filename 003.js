/*
=========
Dash Word
=========

[INSTRUCTION]
Buatlah sebuah function yang menerima sebuah parameter berupa string dan number.
function akan memberikan dash (-) jumlah karakter yang ada di number.
functin tidak akan menambahkan dash (-) jika tidak ada karakter yang tersisa.

[EXAMPLE]
input: string: 'classicFox', number: 3
proses: setiap 3 karakter, akan ditambahkan dash
output: cla-ssi-cFo-x

[RULE]
- DILARANG menggunakan built in function .indexOf atau .include
- DILARANG menggunakan REGEX
*/

function dashWord(string, number) {     //membuat funngsi bernama dashWord dengan 2 parameter 'string' dan 'number'
stringStart = 0;                            // membuat variabel stringStart dalam fungsi dashWord
stringGet = '';                             // membuat variabel stringGet dalam fungsi dashWord
while (stringStart < string.length) {                   // membuat kondisi while, selama stringStart lebih kecil dari panjang variabel string
stringGet += string.substr(stringStart,number) + '-'      // mengubah isi stringGet dengan menambahkan hasil substr dari variabel string dimulai dari index ke 0 dan akan bertambah sesuai pertambahan stringStart nantinya, jumlahnya sepanjang variabel number, lalu akan ditambahkan dash.
stringStart = stringStart + number;                       // meningkatkan nilai variabel stringStart (ditambahkan sebanyak nilai number)
}

return stringGet.substring(0,stringGet.length-1);            // menampilkan hasil akhir dari variabel stringGet, tapi tidak semuanya hanya sepanjang stringGet untuk menghilangkan dash di akhir.

// stringAdd = stringGet + '-';             // mencoba variabel stringAdd
// console.log(stringAdd);                // kontrol untuk variabel stringAdd
  // your code is here  
}

// Test case
console.log(dashWord('classicFox', 3)) // cla-ssi-cFo-x
console.log(dashWord('Uzumaki Naruto', 2)) // Uz-um-ak-i -Na-ru-to
console.log(dashWord('081234567890', 4)) // 0812-3456-7890
console.log(dashWord('Indonesia', 10)) // Indonesia
console.log(dashWord('Coding for everyone', 1)) // C-o-d-i-n-g- -f-o-r- -e-v-e-r-y-o-n-e