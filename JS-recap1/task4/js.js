'use strict';
const body = document.querySelector('body');
const answer = parseFloat(prompt('Score'));
const text = document.createElement('p');
let grade = 0;
if (answer >= 0 && answer < 40) {
  grade = 0;
} else if (answer >= 40 && answer <= 51) {
  grade = 1;
} else if (answer >= 52 && answer <= 63) {
  grade = 2;
} else if (answer >= 64 && answer <= 75) {
  grade = 3;
} else if (answer >= 76 && answer <= 87) {
  grade = 4;
} else {
  grade = 5;
}
text.innerText = 'The grade is : ' + grade;
body.appendChild(text);

