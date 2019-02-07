//Tantangan Array 3 (Array Join, Split, Slice, Splice, Sort)

//test case
input= ['0001', 'Roman Alamsyah ', 'Bandar Lampung', '21/05/1989', 'Membaca' ];
function dataHandling2(input){
    input.splice(1, 4, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro")
    console.log(input);
    tanggal = input[3]
    // console.log(tanggal)
    arrayTanggal = tanggal.split('/');
    arrayTanggalGabung = arrayTanggal.join('-');
    // console.log(arrayTanggal);
    bulan = arrayTanggal[1];
    // console.log(bulan);
    var cetakBulan = '';
    switch (bulan) {
        case '01':
            cetakBulan = 'Januari';
            break;
        case '02':
        cetakBulan = 'Februari';
            break;
        case '03':
        cetakBulan = 'Maret';
            break;
        case '04':
            cetakBulan = 'April';
            break;
        case '05':
            cetakBulan = 'Mei';
            break;
        case '06':
        cetakBulan = 'Juni';
            break;
        case '07':
        cetakBulan = 'Juli';
            break;
        case '08':
            cetakBulan = 'Agustus';
            break;
        case '09':
            cetakBulan = 'September';
            break;
        case '10':
        cetakBulan = 'Oktober';
            break;
        case '11':
        cetakBulan = 'November';
            break;
        case '12':
            cetakBulan = 'Desember';
            break;
        default:
           //console.log('Bulan tidak didefinisikan dengan benar!');
           break;
    }
    console.log(cetakBulan);
    arrayTanggalSorted = arrayTanggal;
    arrayTanggalSorted.sort(function(a, b){return b-a});
    console.log(arrayTanggalSorted);
    console.log(arrayTanggalGabung);
    var tampilanNama = input.slice(1,2);
    var namaSingkat = tampilanNama[0];
    console.log(namaSingkat.substring(0,14));
}

dataHandling2(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */

// testArray= ['0001', 'Roman Alamsyah ', 'Bandar Lampung', '21/05/1989', 'Membaca' ];
// testArray.splice(1, 4, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro")
// console.log(testArray);

    // console.log(input[3][3,4]);

    // var arrayTanggal = ['21', '05', '1989'];
    // arrayTanggal.sort(function(a, b){return b-a});
    // console.log(arrayTanggal);

