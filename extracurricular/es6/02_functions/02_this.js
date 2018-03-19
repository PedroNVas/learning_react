/*
With normal functions, the value of 'this' depends on how the function is called.

WIth arrow functions, the value depends on where the function is located in the code.

 */

// REGULAR FUNCTIONS

/* A new object

'this' value within Sundae's scope is a new object, because it was called with 'new'
 */
const mySundae = new Sundae('Chocolate', ['Sprinkles', 'Hot Fudge']);

/* An specific object

'this' value within printName()'s scope is obj2's reference, since the first argument of call() is explicitly
configured with the object which 'this' refers to.
 */
const result = obj1.printName.call(obj2);

/* An object's context

'this' value within teleport()'s scope refers to data object.
 */
data.teleport();

/* Global object or undefined

'this' value within teleport()'s scope is the global object, or if strict mode is activated, it's undefined.
 */
teleport();

// ===================================================================================================

// constructor
function IceCream() {
	this.scoops = 0;
}

// adds scoop to ice cream
IceCream.prototype.addScoop = function () {
	setTimeout(function () {
		this.scoops++;
		console.log('scoop added!');
	}, 500);
};

const dessert = new IceCream();
dessert.addScoop();

/*
The function passed on to setTimeout() is called without the reserved word 'new', without the method 'call()', without
'apply()' nor with an object's context. Therefore, this refers to the global object and not to the object dessert created
 */

// =========================================================================================================

IceCream.prototype.addScoopClosure = function () {
	// 'this' on this point refers to the object, since the object called the function
	const cone = this; // sets `this` to the `cone` variable
	setTimeout(function () {
		cone.scoops++; // references the `cone` variable
		console.log('scoop added!');
	}, 0.5);
};

const dessertClosure = new IceCream();
dessertClosure.addScoopClosure();

// =========================================================================================================

/*
Since arrow functions inherit 'this' from the scope they are bounded, the code works!
 */

IceCream.prototype.addScoop = function () {
	setTimeout(() => { // an arrow function is passed to setTimeout
		this.scoops++;
		console.log('scoop added!');
	}, 0.5);
};

const dessertArrow = new IceCream();
dessertArrow.addScoop();