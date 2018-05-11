class Dessert {
	constructor(calories = 250) {
		this.calories = calories;
	}
}

class IceCream extends Dessert {
	constructor(flavor, calories, toppings = []) {
		super(calories);
		this.flavor = flavor;
		this.toppings = toppings;
	}

	addTopping(topping) {
		this.toppings.push(topping);
	}
}

/*
Javascript still uses functions and prototype inheritance under the hood when creating objects.

* Javascript is not a class based language
* Uses functions to create objects
* Link objects together through prototype inheritance
 */

// ================================================================================================================

// Classes in ES5

function PlaneES5(numEngines) {
	this.numEngines = numEngines;
	this.enginesActive = false;
}

// methods "inherited" by all instances
PlaneES5.prototype.startEngines = function () {
	console.log('starting engines...');
	this.enginesActive = true;
};

const richardsPlane = new PlaneES5(1);
richardsPlane.startEngines();

const jamesPlane = new PlaneES5(4);
jamesPlane.startEngines();

/* Classes in ES6

Both implementation work as the same, it just changes how you write it, albeit the constructor method is not
on the prototype.
 */

class PlaneES6 {
	constructor(numEngines) {
		this.numEngines = numEngines;
		this.enginesActive = false;
	}

	static badWeather(planes) {
		for (let plane of planes) {
			plane.enginesActive = false;
		}
	}

	startEngines() {
		console.log('starting engines…');
		this.enginesActive = true;
	}
}

// PlaneES6.badWeather([plane1, plane2, plane3]);
