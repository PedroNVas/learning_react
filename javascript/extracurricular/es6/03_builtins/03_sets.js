const games = new Set(['Super Mario Bros.', 'Banjo-Kazooie', 'Mario Kart', 'Super Mario Bros.']);

games.add('Banjo-Tooie');
games.add('Age of Empires');
games.delete('Super Mario Bros.');

console.log(games);

/*
If you try to .add() a duplicated item to a set, you won't receive an error, but the item won't be added.
The same happens if you try to delete an item that's not currently in the set; you won't receive and error but the set
remains unaltered.

Both methods return true is the action as indeed executed, false otherwise.
 */

// ==============================================================================================================

const months = new Set(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
	'October', 'November', 'December']);

// Sets don't have length
console.log(months.size);

console.log(months.has('September'));

// Retrieve all values
console.log(months.values());

months.clear();
console.log(months);

// ==============================================================================================================

/*
Sets are, by default, iterable. This means:

* We can use the default iterator
* We can use the for... of loop to iterate over the items
 */

const iterator = months.values();
console.log(iterator.next());

for (const month of months) {
	console.log(month);
}