'use strict';
const body = document.querySelector('body');
const text = document.createElement('p');
const side1 = parseFloat(prompt('Enter the length of triangles first side'));
const side2 = parseFloat(prompt('Enter the length of triangles second side'));
const side3 = parseFloat(prompt('Enter the length of triangles third side'));
if (side3 === side2 && side2 === side1) {
  text.innerText = 'The triangle is equilateral';
} else if (side1 === side2 || side1 === side3 || side2 === side3) {
  text.innerText = 'The triangle is isosceles';
} else {
  text.innerText = 'The triangle is scalene';
}
body.appendChild(text);

