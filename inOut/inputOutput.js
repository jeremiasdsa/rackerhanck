/**
 * Created by jeremiasaraujo on 27/04/17.
 */

console.log("1");
process.stdin.resume();
process.stdin.setEncoding('ascii');
console.log("2");
var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;
console.log("3");
process.stdin.on('data', function (data) {
    input_stdin += data;
});
console.log("4");
process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});
console.log("5");
function readLine() {
    return input_stdin_array[input_currentline++];
}
console.log("6");
/////////////// ignore above this line ////////////////////

function solveMeFirst(a, b) {
    // Hint: Type return a+b below
    return a+b;


}
console.log("7");
function main() {
    // write your code here.
    // call `readLine()` to read a line.
    // use console.log() to write to stdout

    var a = parseInt(readLine());
    var b = parseInt(readLine());;

    var res = solveMeFirst(a, b);
    console.log(res);
}
console.log("8");
console.log(main());