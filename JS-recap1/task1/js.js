'use strict';
const body = document.querySelector('body');
const answer = parseFloat(prompt('Temperature in Celsius'));
const text = document.createElement('p');
const text2 = document.createElement('p');
const f = (answer * 9) / 5 + 32;
const k = answer + 273;
text.innerText = 'in fahrenheit: ' + f;
text2.innerText = 'in kelvin: ' + k;
body.appendChild(text);
body.appendChild(text2);

