var input1 = document.getElementById("numb1");
var input2 = document.getElementById("numb2");
var button = document.getElementById("btn");
//const printSumVal = document.getElementById("sum")! as HTMLOutputElement
var adds = function (input1, input2) {
    return input1 + input2;
};
button.addEventListener("click", function () {
    var first = input1.value;
    var second = input2.value;
    console.log(adds(+first, +second));
});
