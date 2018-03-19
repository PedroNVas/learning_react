const order = [20.17, 18.67, 1.50, "cheese", "eggs", "milk", "bread"];
const [total, subtotal, tax, ...items] = order;
console.log(total, subtotal, tax, items);

function sum(...numbers) {
	let total = 0;
	for (const number of numbers) {
		total += number;
	}
	return total;
}


function average(...numbers) {
	if (numbers.length === 0) {
		return 0;
	}
	let total = 0;
	for (const number of numbers) {
		total += number;
	}
	return total / numbers.length;
}

console.log(sum(1, 2, 3, 4));
console.log(average(2, 6));