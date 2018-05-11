let type = 'quartz';
let color = 'rose';
let carat = 21.29;

const gemstone_01 = {
	type: type,
	color: color,
	carat: carat
};

console.log(gemstone_01);

// It's possible to remove the name of the duplicate property variable when the objetc's properties has the same as
// the variables that are attributed to them

const gemstone_02 = {type, color, carat};

console.log(gemstone_02);

// =============================================================================

const gemstone_03 = {
	type,
	color,
	carat,
	calculateWorth: function () {
		// function body
	}
};

let gemstone_04 = {
	type,
	color,
	carat,
	calculateWorth() {
		// function body
	}
};

// =============================================================================
