
const input1 = document.getElementById("numb1")! as HTMLInputElement;
const input2 = document.getElementById("numb2")! as HTMLInputElement;
const button = document.getElementById("btn")! as HTMLButtonElement;
const ad = document.getElementById("addition")! as HTMLOutputElement;

//const printSumVal = document.getElementById("sum")! as HTMLOutputElement

const adds = function (input1:number, input2:number){
    return input1+input2;
};
button.addEventListener("click", function(){
    const first = input1.value;
    const second = input2.value;
    //printSumVal.innerText=adds(first, second) 
    console.log(adds(+first, +second));
});
    