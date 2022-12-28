
function cal(number) {
    let sum = 0;
    for(let i = 0; i < number; i++) { 
        sum += i;
    }
    return sum;
}

function Fizz_Buzz(number) {
    let arr = [];
    for(let i = 0; i < number; i++) {
        if(i%3== 0) arr.push("Fizz");
        else if(i%5 == 0) arr.push("Buzz")
        else arr.push(i);
    }
    return arr;
}
function largestEven(arr) { 
    let result = -1;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 == 0 && arr[i] > result) result = arr[i];
     }
     return result;
}
function Fibonacci(index) {
    if(index <= 1) return 1;
    return Fibonacci(index - 1) + Fibonacci(index - 2);
}
let btn_1 = document.getElementById("btn_1");
let btn_2 = document.getElementById("btn_2");
btn_1.onclick = function() { 
    let input = document.getElementById("input_1").value;
    let ouput = document.getElementById("output_1");
    let arr = input.split(" ");
    ouput.value = largestEven(arr);
}
btn_2.onclick = function() { 
    let input = document.getElementById("input_2").value;
    let ouput = document.getElementById("output_2");
    ouput.value = Fibonacci(input);
}
