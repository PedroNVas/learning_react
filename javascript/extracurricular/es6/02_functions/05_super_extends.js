// ES6

class TreeES6 {
	constructor(size = '10', leaves = {spring: 'green', summer: 'green', fall: 'orange', winter: null}) {
		this.size = size;
		this.leaves = leaves;
		this.leafColor = null;
	}

	changeSeason(season) {
		this.leafColor = this.leaves[season];
		if (season === 'spring') {
			this.size += 1;
		}
	}
}

class MapleES6 extends TreeES6 {
	constructor(syrupQty = 15, size, barkColor, leaves) {

		// super used as a function

		super(size, barkColor, leaves);
		this.syrupQty = syrupQty;
	}

	changeSeason(season) {

		// super used as an object

		super.changeSeason(season);
		if (season === 'spring') {
			this.syrupQty += 1;
		}
	}

	gatherSyrup() {
		this.syrupQty -= 3;
	}
}

const myMapleES6 = new MapleES6(15, 5);
myMapleES6.changeSeason('fall');
myMapleES6.gatherSyrup();
myMapleES6.changeSeason('spring');

// ===========================================================================================

function TreeES5() {
	this.size = size || 10;
	this.leaves = leaves || {spring: 'green', summer: 'green', fall: 'orange', winter: null};
	this.leafColor;
}

TreeES5.prototype.changeSeason = function (season) {
	this.leafColor = this.leaves[season];
	if (season === 'spring') {
		this.size += 1;
	}
};

function MapleES5(syrupQty, size, barkColor, leaves) {
	TreeES5.call(this, size, barkColor, leaves);
	this.syrupQty = syrupQty || 15;
}

MapleES5.prototype = Object.create(TreeES5.prototype);
MapleES5.prototype.constructor = MapleES5;

MapleES5.prototype.changeSeason = function (season) {
	TreeES5.prototype.changeSeason.call(this, season);
	if (season === 'spring') {
		this.syrupQty += 1;
	}
};

MapleES5.prototype.gatherSyrup = function () {
	this.syrupQty -= 3;
};

const myMaple = new MapleES5(15, 5);
myMaple.changeSeason('fall');
myMaple.gatherSyrup();
myMaple.changeSeason('spring');

// ===========================================================================================

class Vehicle {
	constructor(color = 'blue', wheels = 4, horn = 'beep beep') {
		this.color = color;
		this.wheels = wheels;
		this.horn = horn;
	}

	honkHorn() {
		console.log(this.horn);
	}
}

class Bicycle extends Vehicle {
	constructor(color, wheels = 2, horn = 'honk honk') {
		super(color, wheels, horn)
	}
}


// your code goes here

// tests
const myVehicle = new Vehicle();
myVehicle.honkHorn(); // beep beep
const myBike = new Bicycle();
myBike.honkHorn(); // honk honk