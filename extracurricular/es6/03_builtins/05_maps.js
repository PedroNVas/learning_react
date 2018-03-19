/*
Map is an object that can store key-value pairs where both key and value can be objects, primitive values or
a combination of the two.
 */

const employees = new Map();

employees.set('james.parkes@udacity.com', {
	firstName: 'James',
	lastName: 'Parkes',
	role: 'Content Developer'
});
employees.set('julia@udacity.com', {
	firstName: 'Julia',
	lastName: 'Van Cleve',
	role: 'Content Developer'
});
employees.set('richard@udacity.com', {
	firstName: 'Richard',
	lastName: 'Kalehoff',
	role: 'Content Developer'
});

console.log(employees);

employees.delete('julia@udacity.com');
employees.delete('richard@udacity.com');

employees.clear();
console.log(employees);


/*

If you try to use set() to add a key-value par to a map that already has that key, you'll actually override the existent
pair. If you try to delete() a key-value pair that's not on the map, you won't receive an error and the map stays the
same.

Both methods return true if a key-value pair is added or deleted, and false otherwise.
 */

// ================================================================================================

const members = new Map();

members.set('Evelyn', 75.68);
members.set('Liam', 20.16);
members.set('Sophia', 0);
members.set('Marcus', 10.25);

console.log(members.has('Xavier'));
console.log(members.has('Marcus'));

console.log(members.get('Evelyn'));

// ================================================================================================

/*
When iterating over a map you can:

* Access each key through the map's default iterator
* Iterate over the map through the for... of loop
* Iterate over the map through the .forEach() method
 */

let iteratorObjForKeys = members.keys();
iteratorObjForKeys.next();

let iteratorObjForValues = members.values();
iteratorObjForValues.next();

for (const member of members) {
	console.log(member);
}

for (const member of members) {
	let [key, value] = member;
	console.log(key, value);
}

members.forEach((value, key) => console.log(value, key));
