/*
The for...of loop is the latest addition to the for's in Javascript.,

It combines the for loop and for... in loop, to iterate over iterable data (which follows the iterable protocol).
By defaults, it includes the string, array, map and set data structures. Objects are not iterables by default.
 */

const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// The for loop
for (let i = 0; i < digits.length; i++) {
	console.log(digits[i]);
}

/* The for... in loop --- DON'T USE THEM

for...in loops iterate over all enumerable properties, which will make properties added to the array's prototype also
appear in the loop

 */

//
for (const index in digits) {
	console.log(digits[index]);
}


/*
The forEach loop is an array's method, and can only be used on arrays.
Bare in mind that ypu cannot stop or interrupt a forEach loop.
 */

/* The for... of loop

Used to iterate over any data that's an iterable.

You can stop/interrupt a for... of loop

Only iterates over collection's values, not properties
 */

for (const digit of digits) {
	console.log(digit);
}

for (const digit of digits) {
	if (digit % 2 === 0) {
		continue;
	}
	console.log(digit);
}