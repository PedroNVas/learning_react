/*
A WeakSet is just a regular set, except:

* Can only contain objects
* It's not iterable
* Does not has a .clear() method
 */

const student1 = {name: 'James', age: 26, gender: 'male'};
const student2 = {name: 'Julia', age: 27, gender: 'female'};
const student3 = {name: 'Richard', age: 31, gender: 'male'};

const roster = new WeakSet([student1, student2, student3]);
console.log(roster);

// student3 = null;
// console.log(roster);

/*

If you change an object's value to nul, you are basically removing the object. When the Javascript's Garbage Collector
runs, the memory used for that object will be freed.

Therefore, you don't have to manually exclude deleted object's references in WeakSets.
When that given object is deleted, it's also deleted from the WeakSet
 */