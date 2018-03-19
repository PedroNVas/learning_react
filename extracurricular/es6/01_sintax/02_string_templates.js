const student = {
	name: 'Richard Kalehoff',
	guardian: 'Mr. Kalehoff'
};

const teacher = {
	name: 'Mrs. Wilson',
	room: 'N231'
};

// HINT: With string templates you can execute operations, call 02_functions and even iterate!
const message = `${student.name} please see ${teacher.name} in ${teacher.room} to pick up your report card.`;


const cardHTML = `<div class="card">
					<h3 class="name">${animal.name}</h3>
					<img src="${animal.name}.jpg" alt="${animal.name}" class="picture">
					<div class="description">
						<p class="fact">${animal.fact}</p>
						<ul class="details">
							<li><span class="bold">Scientific Name</span>: ${animal.scientificName} </li>
							<li><span class="bold">Average Lifespan</span>: ${animal.lifespan} </li>
							<li><span class="bold">Average Speed</span>: ${animal.speed} </li>
							<li><span class="bold">Diet</span>: ${animal.diet} </li>
						</ul>
						<p class="brief">${animal.summary}</p>
					</div>
				   </div>
                 `;
