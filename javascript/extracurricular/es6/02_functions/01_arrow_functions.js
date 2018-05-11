// Before arrow functions
const upperizedNamesBefore = ['Farrin', 'Kagure', 'Asser'].map(function (name) {
	return name.toUpperCase();
});

// After arrow functions
const upperizedNamesAfter = ['Farrin', 'Kagure', 'Asser'].map(
	name => name.toUpperCase()
);

// ==========================================================================================

/*
Arrow functions are always expressions. Arrow functions are actually called 'arrow function expressions', and it can be
used whenever a valid expression can:

* Stored in a variable
* Passed on as a function's argument
* Stored in an object's property
 */

const greetBefore = function (name) {
	return `hello ${name}`;
};

const greetAfter = name => `Hello ${name}!`;

// Single argument
const sayHi = () => console.log('Hello Udacity Student!');
sayHi();

// Multiple arguments
const orderIceCream = (flavor, cone) => console.log(`Here's your ${flavor} ice cream in a ${cone} cone.`);
orderIceCream('chocolate', 'waffle');

// ==========================================================================================

// Concise function declaration
const upperizedNamesConcise = ['Farrin', 'Kagure', 'Asser'].map(
	name => name.toUpperCase()
);

// Block function syntax
const upperizedNamesBlock = ['Farrin', 'Kagure', 'Asser'].map(name => {
	name = name.toUpperCase();
	return `${name} has ${name.length} characters in their name`;
});

/* CONS

* There's no declaration, they are expressions
* Pay attention to 'this' when using arrow functions
 */