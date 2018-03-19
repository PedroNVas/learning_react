const james = {
	name: 'James',
	height: `5'10"`,
	weight: 185,
	[Symbol.iterator]() {
		const properties = Object.keys(this);
		let done = false;
		let index = 0;
		return {
			next: () => {
				done = (index === properties.length - 1);
				let obj = {done: done, value: this[properties[index]], key: properties[index]};
				index++;
				return obj;
			}
		}
	}
};

const iterator = james[Symbol.iterator]();

console.log(iterator.next().value); // 'James'
console.log(iterator.next().value); // `5'10`
console.log(iterator.next().value); // 185
