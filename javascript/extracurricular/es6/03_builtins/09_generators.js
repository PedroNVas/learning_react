// Generator function
function* getEmployeeSimple() {
	console.log('the function has started');

	const names = ['Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita', 'Orit', 'Richard'];

	for (const name of names) {
		console.log(name);
	}

	console.log('the function has ended');
}

const generatorIteratorSimple = getEmployeeSimple();
generatorIteratorSimple.next();

function* getEmployeeYield() {
	console.log('the function has started');

	const names = ['Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita', 'Orit', 'Richard'];

	for (const name of names) {
		console.log(name);
		yield name;
	}

	console.log('the function has ended');
}

const generatorIteratorYields = getEmployeeYield();
let result = generatorIteratorYields.next();
result.value; // is "Amanda"

/*
'yield' stops the execution flow right where 'yield' is. When .next() is called, the execution starts where it had
stopped.
 */

// ================================================================================================================

/*
The reserved key word 'yield' will be replaced by the parameters provided to the .next() method
 */

function* displayResponse() {
	const response = yield;
	console.log(`Your response is "${response}"!`);
}

const iterator = displayResponse();

iterator.next(); // starts running the generator function
iterator.next('Hello Udacity Student'); // send data into the generator
// the line above logs to the console: Your response is "Hello Udacity Student"!

// =========================================================================================================

function* getEmployee() {
	const names = ['Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita', 'Orit', 'Richard'];
	const facts = [];

	for (const name of names) {
		// yield *out* each name AND store the returned data into the facts array
		facts.push(yield name);
	}

	return facts;
}

const generatorIterator = getEmployee();

// get the first name out of the generator
let name = generatorIterator.next().value;

// pass data in *and* get the next name
name = generatorIterator.next(`${name} is cool!`).value;

// pass data in *and* get the next name
name = generatorIterator.next(`${name} is awesome!`).value;

// pass data in *and* get the next name
name = generatorIterator.next(`${name} is stupendous!`).value;

// you get the idea
name = generatorIterator.next(`${name} is rad!`).value;
name = generatorIterator.next(`${name} is impressive!`).value;
name = generatorIterator.next(`${name} is stunning!`).value;
name = generatorIterator.next(`${name} is awe-inspiring!`).value;

// pass the last data in, generator ends and returns the array
const positions = generatorIterator.next(`${name} is magnificent!`).value;

// displays each name with description on its own line
positions.join('\n');