function greet(name = 'Student', greeting = 'Welcome') {
	return `${greeting} ${name}!`;
}

function createGrid([width = 5, height = 5]) {
	return `Generates a ${width} x ${height} grid`;
}

createGrid([]); // Generates a 5 x 5 grid
createGrid([2]); // Generates a 2 x 5 grid
createGrid([2, 3]); // Generates a 2 x 3 grid
createGrid([undefined, 3]); // Generates a 5 x 3 grid

function createGridImproved([width = 5, height = 5] = []) {
	return `Generating a grid of ${width} by ${height}`;
}

createGridImproved();

// ========================================================================

function createSundae({scoops = 1, toppings = ['Hot Fudge']} = {}) {
	const scoopText = scoops === 1 ? 'scoop' : 'scoops';
	return `Your sundae has ${scoops} ${scoopText} with ${toppings.join(' and ')} toppings.`;
}

createSundae({}); // Your sundae has 1 scoop with Hot Fudge toppings.
createSundae({scoops: 2}); // Your sundae has 2 scoops with Hot Fudge toppings.
createSundae({scoops: 2, toppings: ['Sprinkles']}); // Your sundae has 2 scoops with Sprinkles toppings.
createSundae({toppings: ['Cookie Dough']}); // Your sundae has 1 scoop with Cookie Dough toppings

// Will ignore the 'scoops' parameter
createSundae({toppings: ['Hot Fudge', 'Sprinkles', 'Caramel']});

function createSundaeArray([scoops = 1, toppings = ['Hot Fudge']] = []) {

}

// Cannot ignore the first parameter, you have to explicitly declare it
createSundaeArray([undefined, toppings
:
['Hot Fudge', 'Sprinkles', 'Caramel']
])
;