// ==========================
// Part 1: JavaScript Basics
// ==========================
const checkNumberBtn = document.getElementById('checkNumberBtn');
const numberResult = document.getElementById('numberResult');

checkNumberBtn.addEventListener('click', () => {
    const num = Number(document.getElementById('numberInput').value);

    if (num > 0) {
        numberResult.textContent = `${num} is positive.`;
    } else if (num < 0) {
        numberResult.textContent = `${num} is negative.`;
    } else {
        numberResult.textContent = `You entered zero.`;
    }
});

// ==========================
// Part 2: Functions
// ==========================

// Function 1: Greeting
function greetUser(name) {
    return `Hello, ${name}! Welcome to JS learning.`;
}

const greetBtn = document.getElementById('greetBtn');
const greetResult = document.getElementById('greetResult');

greetBtn.addEventListener('click', () => {
    greetResult.textContent = greetUser('Student');
});

// Function 2: Square a number
function square(num) {
    return num * num;
}

const squareBtn = document.getElementById('squareBtn');
const squareResult = document.getElementById('squareResult');

squareBtn.addEventListener('click', () => {
    const inputNum = Number(document.getElementById('squareInput').value);
    squareResult.textContent = `Square of ${inputNum} is ${square(inputNum)}`;
});

// ==========================
// Part 3: Loops
// ==========================
const loopBtn = document.getElementById('loopBtn');
const loopResult = document.getElementById('loopResult');

loopBtn.addEventListener('click', () => {
    let output = '';
    for (let i = 1; i <= 5; i++) {
        output += i + ' ';
    }
    loopResult.textContent = output;
});

// ==========================
// Part 4: DOM Manipulation
// ==========================

// Change background color
const colorBtn = document.getElementById('colorBtn');
colorBtn.addEventListener('click', () => {
    document.body.style.backgroundColor = '#d1e7dd';
});

// Add list item dynamically
const addItemBtn = document.getElementById('addItemBtn');
const itemList = document.getElementById('itemList');

addItemBtn.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = `Item ${itemList.children.length + 1}`;
    itemList.appendChild(li);
});
