// Logic Challenge - Hitung Jumlah Kata
function hitungJumlahKata(kalimat) {
    // console.log(kalimat);
    var kataKata = kalimat.split(' ');
    // console.log(kataKata)
    var hasil = kataKata.length;
    // console.log(hasil);
    return hasil;
    // you can only write your code here!
  }
  
  // TEST CASES
  console.log(hitungJumlahKata('I have a dream')); // 4
  console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
  console.log(hitungJumlahKata('A song to sing')); // 4
  console.log(hitungJumlahKata('I')); // 1
  console.log(hitungJumlahKata('I believe I can code')); // 5
