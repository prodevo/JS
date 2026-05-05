// Task 1.
let a = 7;
let b = 9;
console.log(a * b);
// Task 2.
let c = 7;
let d = 9;
document.querySelector('.out-2').innerHTML = c/d;

// Task 3.
let e = 3;
let f = 5;
document.querySelector('.out-3').innerHTML = e + f;

// Task 4.
let e1 = '3';
let f1 = 5;

document.querySelector('.out-4').innerHTML = e1 + f1;
// Task 5.
let e2 = 3;
let f2 = 0;

document.querySelector('.out-5').innerHTML = e2 / f2;

// Task 6.


// Task 7.

let e4 = 3;
let f4 = 'Hello';

document.querySelector('.out-7').textContent = e4 * f4;
// Task 8.

input = document.querySelector('.i-8');

function t8() {    
    document.querySelector('.out-8').textContent = input.value;
}

document.querySelector('.b-8').onclick = t8;

// Task 9.
input = document.querySelector('.i-9');

function t9() {    
    document.querySelector('.out-9').textContent = input.value;
    input.value = null;
}

document.querySelector('.b-9').onclick = t9;

// Task 10.

function t10() {
     let inputVal = document.querySelector('.i-10').value;
     let result = Number(inputVal) * 20;
     document.querySelector('.out-10').textContent = result;
}

document.querySelector('.b-10').onclick = t10;

// Task 11.

function t11() {
    let inputValue = document.querySelector('.i-11').value;
    let result = inputValue + '55';
    document.querySelector('.out-11').textContent = result;
}


document.querySelector('.b-11').onclick = t11;

// Task 12.

function t12() {
    
}


document.querySelector('.b-12').onclick = t12;

// Task 13.

function t13() {
    let input1 = document.querySelector('.i-13-1').value;
    let input2 = document.querySelector('.i-13-2').value;
    let a = Number(input1);
    let b = Number(input2);
    let sum = a + b;
    document.querySelector('.out-13').textContent = sum;
}

document.querySelector('.b-13').onclick = t13;

// Task 14.

function t14() {
    let input = document.querySelector('.i-14');
    input.value = 'Go';
}


document.querySelector('.b-14').onclick = t14;

// Task 15.

function t15() {
    let input = document.querySelector('.i-15');
    input.style.border = '4px solid red';
}

document.querySelector('.b-15').onclick = t15;

// Task 16.

function t16() {
    let num1 = document.querySelector('.i-16-1').value;
    let num2 = document.querySelector('.i-16-2').value;

    let result = num1 + num2;

    document.querySelector('.out-16').textContent = result;
}
document.querySelector('.b-16').onclick = t16;

// Task 17.


function t17() {
    let inputVal = document.querySelector('.i-17').value;
    let result = parseInt(inputVal);
    console.log(result);
}

document.querySelector('.b-17').onclick = t17;

// Task 18.


let i18 = document.querySelector('.i-18');
let out18 = document.querySelector('.out-18');
function t18() {
    let a = i18.value;
    out18.textContent = parseFloat(a);
}

document.querySelector('.b-18').onclick = t18;

// Task 19.

function t19() {
    let num1 = parseFloat(document.querySelector('.i-19-1').value);
    let num2 = parseFloat(document.querySelector('.i-19-2').value);
    
    let sum = num1 + num2;
    
    document.querySelector('.out-19').textContent = sum;
}

document.querySelector('.b-19').onclick = t19;

// Task 20


function t20() {
    let count = 0;

    const button = document.querySelector('.b-20');
    const output = document.querySelector('.out-20');

    button.addEventListener('click', function() {
        count++;
        output.textContent = count;
    });
}

document.querySelector('.b-20').onclick = t20;