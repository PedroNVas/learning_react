/*
A proxy's constructor receives two parameters:

* The object of which it will e a proxy
* An object with a list of methods that will be used to access data from the first object
 */

let richard = {status: 'looking for work'};
let handler = {
	get(target, propName) {
		console.log(target); // the `richard` object, not `handler` and not `agent`
		console.log(propName); // the name of the property the proxy (`agent` in this case) is checking
	}
};
let agent = new Proxy(richard, handler);
agent.status; // logs out the richard object (not the agent object!) and the name of the property being accessed (`status`)

// ===================================================================================================

richard = {status: 'looking for work'};
handler = {
	get(target, propName) {
		console.log(target);
		console.log(propName);
		return target[propName];
	}
};
agent = new Proxy(richard, handler);
agent.status; // (1)logs the richard object, (2)logs the property being accessed, (3)returns the text in richard.status

// ===================================================================================================


richard = {status: 'looking for work'};
handler = {
	set(target, propName, value) {
		if (propName === 'payRate') { // if the pay is being set, take 15% as commission
			value = value * 0.85;
		}
		target[propName] = value;
	}
};

agent = new Proxy(richard, handler);
agent.payRate = 1000; // set the actor's pay to $1,000
agent.payRate; // $850 the actor's actual pay

/* All 13 traps used on proxies

* get - allows the proxy control over properties access
* set - allows the proxy control over properties changes
* apply - allows the proxy control over whether the target object is invoked or not.
* has - allows the proxy control over the operator 'in'
* deleteProperty - allows the proxy control when a property is deleted
* ownKeys - allows the proxy control when all keys are requested
* construct - allows the proxy control when the proxy is used with the keyword 'new', as it would with a constructor
* defineProperty - allows the proxy control when defineProperty is used to create a new property on the object
* getOwnPropertyDescriptor - allows the proxy control over property description retrieval
* preventExtensions - allows the proxy control over Object.preventExtensions() calls on the proxy object
* isExtensible - allows the proxy control over Object.isExtensible calls on the proxy object
* getPrototypeOf - allows the proxy control over Object.getPrototypeOf calls on the proxy object
* setPrototypeOf - allows the proxy control over Object.setPrototypeOf calls on the proxy object
 */

// ===================================================================================================

const proxyObj = new Proxy({age: 5, height: 4}, {
	get(targetObj, property) {
		console.log(`getting the ${property} property`);
		console.log(targetObj[property]);
	}
});

proxyObj.age; // logs 'getting the age property' & 5
proxyObj.height; // logs 'getting the height property' & 4

proxyObj.weight = 120; // set a new property on the object
proxyObj.weight; // logs 'getting the weight property' & 120