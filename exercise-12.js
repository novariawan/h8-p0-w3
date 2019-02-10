// Logic Challenge - Tentukan Deret Geometri

function tentukanDeretGeometri(arr) {
    
    var difference = arr[1] / arr[0]
    var poin = true
    
    for(var i = 0; i< arr.length-1; i++){
      if(difference !== arr[i+1]/arr[i]){
        poin = false
      }
    }
  
    return poin
  // you can only write your code here!
}
  
  // TEST CASES
  console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
  console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
  console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
  console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
  console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false