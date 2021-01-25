/* JavaScript DOM Exercises 01 */

/*
  Exercise 01
  -----------
  Highlight all of the words over 8 characters long in the paragraph text (with a yellow background for example)
*/

const prg = document.querySelector('p');
prg.innerHTML = prg.innerText.split(' ')
  .map(word => word.length > 8 ? `<span style = "background-color: yellow">${word}</span>` : word).join(' ');

/*
  Exercise 02
  -----------
  Add a link back to the source of the text after the paragraph tag.
  (http://officeipsum.com/)
*/

const newLink = document.createElement('a');
newLink.href = 'http://officeipsum.com/';
newLink.innerText = 'Text source.';
document.body.appendChild(newLink);


/*
  Exercise 03
  -----------
  Split each new sentence on to a separate line in the paragraph text.
  A sentence can be assumed to be a string of text terminated with a period (.)
*/

const parTwo = document.querySelector('p'); 
parTwo.innerHTML = parTwo.innerHTML
  .split(/\.[^\.|<]/)
  .join(`.</p><p>`) + `</p>`;

/* 
  Exercise 04
  -----------
  Count the number of words in the paragraph tag and display the count afer the heading.
  You can assume that all words are separated by one singular whitespace.
*/

const counter = parTwo.innerText.split(' ').length;
const countElm = document.createElement('div');
countElm.innerText = `${counter} words`;
document.body.insertBefore(countElm, parTwo);

/*
  Exercise 05
  -----------
  Replace all question marks (?) with thinking faces (🤔) and exclamation marks (!) with astonished faces (😲) 
*/

Array.from(document.querySelectorAll('p'))
.forEach(p => {
  p.innerHTML = p.innerHTML
    .replace(/\?/g, `🤔`)
    .replace(/\!/g, `😲`);
})