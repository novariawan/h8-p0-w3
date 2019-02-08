// Logic Challenge - Number Palindrome
function angkaPalindrome(num) {
  function cariPalindromeSelanjutnya(cek) {
      var tampung = cek.toString();
      var arrayMundur = [];
      var h = tampung.length;
      for (i = h-1; i >= 0; i-- ) {
          arrayMundur.push(tampung[i]);
      }
      arrayMundur = arrayMundur.join('');
  return tampung === arrayMundur;
  }
  var angkaPalindrome = num + 1;
  while (true) {
      if (cariPalindromeSelanjutnya(angkaPalindrome)) {
      return angkaPalindrome;
      } 
      else {
      angkaPalindrome = angkaPalindrome + 1;
      }
}
    // you can only write your code here!
  }
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001
  console.log(angkaPalindrome(8888000)); // 
  console.log(angkaPalindrome(18488000)); // 