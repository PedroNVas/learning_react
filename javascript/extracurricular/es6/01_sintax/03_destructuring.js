// ARRAY DESTRUCTURING

const point = [10, 25, -34];

const [x, y, z] = point;

console.log(x, y, z);

// It;s possible to skip values when using array destructuring.
// For instance, const [x, , z] = point will skip the y coordinate

// ==================================================================================================================

// OBJECT DESTRUCTURING

const gemstone = {
	type: 'quartz',
	color: 'rose',
	karat: 21.29
};

const {type, color, karat} = gemstone;

console.log(type, color, karat);

// It's possible to pick properties
// For instance let {color} = gemstone

// ==================================================================================================================

const circle = {
	radius: 10,
	color: 'orange',
	getArea: function () {
		return Math.PI * this.radius * this.radius;
	},
	getCircumference: function () {
		return 2 * Math.PI * this.radius;
	}
};

let {radius, getArea, getCircumference} = circle;

// Calling getArea() will return NaN. When you destructure and object and store the method getArea() in a variable getArea
// it no longer can access the "this" in the circle object, resulting in a NaN area

// ==================================================================================================================

const things = ['red', 'basketball', 'paperclip', 'green', 'computer', 'earth', 'udacity', 'blue', 'dogs'];

const [one, , , two, , , , three,] = things;

const colors = `List of Colors
1. ${one}
2. ${two}
3. ${three}`;

console.log(colors);