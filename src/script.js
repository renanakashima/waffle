const message = 'Hello world' // Try edit me

// Update header text
document.querySelector('#header').innerHTML = message

// Log to console
console.log(message)

let fruits = ["apple", "mango", "banana"];
console.log(fruits);

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

function sumNumbers() {
    let sum = 0;
    for (let i = 1; i <= 100; i++) {
        sum += i;
    }
    return sum;
}

console.log(sumNumbers());

