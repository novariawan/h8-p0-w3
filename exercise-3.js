//contoh input
var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]
//console.log(input);
function dataHandling (input) {
    for (j = 0;j<input.length; j++){
    console.log('Nama Lengkap :' + input[j][1]);
    }
    for (k = 0;k<input.length; k++){
        console.log('TTL :' + input[k][2] +' '+input[k][3]);
    }
}
