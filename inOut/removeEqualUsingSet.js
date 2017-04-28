function processData(myArray) {

    var set = new Set(myArray);
    var myArray = Array.from(set);
    myArray.sort(function(a,b){return b-a;});
    //console.log(myArray)
    console.log(myArray[1]);
}

// tail starts here
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input.split('\n')[1].split(' ').map(Number));
});
