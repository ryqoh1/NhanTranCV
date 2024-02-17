// Part 1: Greeting
const amButton = document.getElementById('am');
const pmButton = document.getElementById('pm');
const greeting = document.getElementById('greeting');

amButton.addEventListener('click', function() {
    greeting.textContent = 'Good morning';
});

pmButton.addEventListener('click', function() {
    greeting.textContent = 'Good night';
});
// Part 2: Switch Background Color
const redButton = document.getElementById('red');
const yellowButton = document.getElementById('yellow');
const greenButton = document.getElementById('green');
const blueButton = document.getElementById('blue');
const divColor = document.getElementById('div_color');

redButton.addEventListener('click', function() {
    divColor.setAttribute('class', 'bg_red');
});
yellowButton.addEventListener('click', function() {
    divColor.setAttribute('class', 'bg_yellow');
});
greenButton.addEventListener('click', function() {
    divColor.setAttribute('class', 'bg_green');
});
blueButton.addEventListener('click', function() {
    divColor.setAttribute('class', 'bg_blue');
});
// Part 3: Dynamic List
const inputBox = document.querySelector('#usrInput');
const addButton = document.querySelector('#addBtn');
const myList = document.querySelector('#myUL');

addButton.addEventListener('click', function() {
    const userInput = inputBox.value.trim();
    if (userInput === '') {
        return; // Don't add empty items
    }
    
    const listItem = document.createElement('li');
    listItem.textContent = userInput;
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        myList.removeChild(listItem);
    });
    
    listItem.appendChild(deleteButton);
    myList.appendChild(listItem);
    
    inputBox.value = ''; // Clear input box
});
