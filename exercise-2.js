//input "hello world!"
var input = 'hello world!';
var inputArray = input.split('');
var kalimat = '';
for (var i=inputArray.length-1; i>=0;i--){
    //console.log(inputArray[i]);
    kalimat = kalimat + inputArray[i];
}
//output "!dlrow olleh"
// console.log(inputArray.length);
//console.log(kalimat);
console.log(kalimat);
