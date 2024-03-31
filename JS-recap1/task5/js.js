'use strict';
const body = document.querySelector('body');
const answer = parseInt(prompt('input a positive integer'));
const text = document.createElement('p');
let sum = 0;
for (let i = 0; i <= answer; i++) {
  sum += i;
}
text.innerText = sum;
body.appendChild(text);

