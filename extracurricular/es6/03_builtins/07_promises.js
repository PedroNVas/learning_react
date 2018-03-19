/*

A promise allow you to start a job that will be finished asynchronously and frees you to execute other jobs.
When you create a promise, you have to write the code that will be executed asynchronously. You deliver this piece
of code as a parameter of the constructor function.
 */

// We have to provide the promise with a function that will be executed asynchronously.
// const myPromise = new Promise();


/*
This code creates a promise that will start a few seconds after the requisition and then will execute the necessary
steps of the createSundae function.
 */
let myPromise = new Promise(function () {
	window.setTimeout(function createSundae(flavor = 'chocolate') {
		const sundae = {};
		// request ice cream
		// get cone
		// warm up ice cream scoop
		// scoop generous portion into cone!
	}, Math.random() * 2000);
});

// ==================================================================================================================

/*

We use 'resolve' and 'reject' to indicate whether the request successfully finished or not.

We have to use 'resolve' when the request finished successfully and reject when it did not.

If the sundae was created successfully, we must call the 'resolve' method with the object that we want to return. In that
way, we are indicating that the promise was successfully concluded and the sundae was returned.

If by some chance we could not create the sundae, we must call 'reject' and let the requester know that its request
failed.
 */

myPromise = new Promise(function (resolve, reject) {
	window.setTimeout(function createSundae(flavor = 'chocolate') {
		const sundae = {};
		// request ice cream
		// get cone
		// warm up ice cream scoop
		function iceCreamConeIsEmpty(flavor) {
			return true;
		}

		// scoop generous portion into cone!
		if (iceCreamConeIsEmpty(flavor)) {
			reject(`Sorry, we're out of that flavor :-(`);
		}
		resolve(sundae);
	}, Math.random() * 2000);
});

/*
When using 'then' method of a promise we have to provide with two functions. The first will be executed if the promise
successfully finished ('resolve' was called). The second if it could not finalize the request ('reject' was called)
 */
myPromise.then(sundae => {
		console.log(`Time to eat my delicious ${sundae}`);
	},
	(message) => {
		console.log(message)
	});