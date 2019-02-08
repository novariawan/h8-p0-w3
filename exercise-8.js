// Pasangan Angka Terbesar

function pasanganTerbesar(num) {
//    var input = num;
    var number = ''+num;    
    var arrayIsi = number.split('');
    var arrayPasang = []
        for (i=1; i<arrayIsi.length; i++) {
            arrayPasang.push(''+arrayIsi[i-1]+''+arrayIsi[i])
        }
    var arraySort = arrayPasang.sort();
    var hasil = ''+arraySort[arraySort.length-1];
    return hasil;
    // you can only write your code here!
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99