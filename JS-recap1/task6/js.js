'use strict';
const body = document.querySelector('body');
const answer = parseInt(prompt('input a positive integer'));
const heading = document.createElement('h1');
heading.innerText = 'Multiplication table: ';
body.appendChild(heading);
const table = document.createElement('table');
body.appendChild(table);
for (let i = 1; i <= answer; i++) {
  const tr = document.createElement('tr');
  for (let j = 1; j <= answer; j++) {
    const td = document.createElement('td');
    td.innerText = i * j;
    tr.appendChild(td);
  }
  table.appendChild(tr);
}

