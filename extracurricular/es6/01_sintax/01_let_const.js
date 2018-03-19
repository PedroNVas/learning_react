// let e const remove the hoisting problem, because their scope is within the block they have been declared

// let can have its value reassigned, but cannot be declared in the same scope

// const must have an initial attributed value, but cannot be re-declared in the same scope and cannot be reassigned

// variable should be declared with const

const CHARACTER_LIMIT = 255;
const posts = [
	"#DeepLearning transforms everything from self-driving cars to language translations. AND it's our new Nanodegree!",
	"Within your first week of the VR Developer Nanodegree Program, you'll make your own virtual reality app",
	"I just finished @udacity's Front-End Web Developer Nanodegree. Check it out!"
];

// prints posts to the console
function displayPosts() {
	for (let i = 0; i < posts.length; i++) {
		console.log(posts[i].slice(0, CHARACTER_LIMIT));
	}
}

displayPosts();