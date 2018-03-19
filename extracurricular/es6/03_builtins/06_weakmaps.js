/*
A WeakMap:

* can only contain objects as keys
* is not iterable, which means you can iterate over it with a loop
* does not have a .clear() method.


The same garbage collector logic that happens on WeakSet happens on WeakMaps.

 */

let book1 = {title: 'Pride and Prejudice', author: 'Jane Austen'};
const book2 = {title: 'The Catcher in the Rye', author: 'J.D. Salinger'};
const book3 = {title: 'Gulliver’s Travels', author: 'Jonathan Swift'};

const library = new WeakMap();
library.set(book1, true);
library.set(book2, false);
library.set(book3, true);

console.log(library);


book1 = null;
console.log(library);