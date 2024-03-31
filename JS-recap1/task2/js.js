'use strict';
const body = document.querySelector('body');
const y = parseFloat(prompt('Enter the y-coordinates for the first point'));
const x = parseFloat(prompt('Enter the x-coordinates for the first point'));
const y2 = parseFloat(prompt('Enter the y-coordinates for the second point'));
const x2 = parseFloat(prompt('Enter the x-coordinates for  the second point'));
const text = document.createElement('p');
const distance = Math.sqrt(Math.pow(x2 - x, 2) + Math.pow(y2 - y, 2));
text.innerText = 'the distance between points is : ' + distance;

body.appendChild(text);
