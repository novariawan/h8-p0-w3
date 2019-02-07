/*
========
Car Line
========

Buatlah Pseudocode untuk kasus berikut:

Sebuah mobil sedang melaju dengan kecepatan 60km/jam
Mobil tersebut dipengaruhi oleh jalur lintasan yang dilewati.

- Jika lintasan lurus, maka kecepatan tetap.
- Jika lintasan belok kanan/ kiri, maka kecepatan akan berkurang sebesar 20% dari kesepatan sekarang
- Jika lintasan menanjak, maka kecepatan akan berkurang sebesar 50%
- Jika lintasan menurun, maka kecepatan akan bertambah sebesar 30%

Tampilkan kecepatan mobil jika di depan adalah lintasan 'x'

Write Psedocode here

READ and SAVE "Kecepatan"
READ and SAVE "x"
IF "x" EQUAL "Lurus"
    "Kecepatan" EQUAL "Kecepatan"
ELSE IF "x" EQUAL "Belok Kiri" OR "Belok Kanan"
    "Kecepatan" EQUAL "Kecepatan" TIMES 0.8
ELSE IF "x" EQUAL "Menanjak"
    "Kecepatan" EQUAL "Kecepatan" TIMES 0.5
ELSE "x" EQUAL "Menurun"
    "Kecepatan" EQUAL "Kecepatan" TIMES 1.3
DISPLAY "Kecepatan"
*/