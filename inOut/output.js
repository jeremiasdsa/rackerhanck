/**
 * Created by jeremiasaraujo on 27/04/17.
 */
function processData(input) {
    //Enter your code here
    console.log("Hello World!");
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});

