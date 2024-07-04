const users = [
	{
		name: {
			firstName: 'Kamau',
			lastName: 'Muchangi',
		},
		age: 30,
		occupation: 'Software Engineer',
		hobbies: ['reading', 'hiking', 'coding'],
		image: 'https://placeholder.com/100x100',
	},

	{
		name: {
			firstName: 'William',
			lastName: 'Omondi',
		},
		age: 25,
		occupation: 'Data Scientist',
		hobbies: ['swimming', 'traveling', 'cooking'],
		image: 'https://placeholder.com/100x100',
	},

	{
		name: {
			firstName: 'Kabi',
			lastName: 'Wa Judas',
		},
		age: 35,
		occupation: 'Manager',
		hobbies: ['fishing', 'hiking', 'coding'],
		image: 'https://placeholder.com/100x100',
	},

	{
		name: {
			firstName: 'Alice', // h2
			lastName: 'Makori', // h3
		},
		age: 40, // p
		occupation: 'Designer', // p
		hobbies: ['reading', 'hiking', 'painting'], // p
		image: 'https://placeholder.com/100x100', // img
	},
];

const mainTag = document.querySelector('main');

users.map((user) => {
	console.log(user);
	const userCard = document.createElement('div');
	appendAnElement(userCard, mainTag);
	userCard.className = 'user-card';

	/*
		This is a custom reusable function to create element.
		Check the first function I have written at the bottom.
		Here, it works the same as document.createElement("img") would
	*/
	const userImage = createAnElement('img');

	/*
		This is a custom reusable function to add an attribute to an element.
		Check the last function I have written at the bottom.
		Here, it works the same as userImage.src = user.image would
	*/
	addAttribute(userImage, 'src', user.image);

	userImage.className = 'profile-image';
	userCard.appendChild(userImage);

	const userFirstName = createAnElement('h2');
	/*
		This is a custom reusable function to add an attribute to an element.
		Check the last function I have written at the bottom.
		Here, it works the same as userFirstName.textContent = user.name.firstName would
	*/
	addAttribute(userFirstName, 'textContent', user.name.firstName);

	/* 
		The advantage of using this custom function is that it can also be used to set a class.
		Here, the same function works the same as userFirstName.className = 'name' would
	*/
	addAttribute(userFirstName, 'class', 'name');
	userCard.appendChild(userFirstName);

	const userSecondName = createAnElement('h3');
	userSecondName.textContent = user.name.lastName;
	userCard.appendChild(userSecondName);

	const hobbies = createAnElement('p');
	hobbies.textContent = 'Hobbies: ' + user.hobbies.join(', ');
	hobbies.className = 'hobbies';
	userCard.appendChild(hobbies);

	const occupation = createAnElement('p');
	occupation.textContent = 'Occupation: ' + user.occupation;
	userCard.appendChild(occupation);

	const age = createAnElement('p');
	age.textContent = user.age;
	userCard.appendChild(age);
});

// You can define custom functions to avoid too much repetition.

// This function creates an element
function createAnElement(elementName) {
	return document.createElement(elementName);
}

// This function appends an element
function appendAnElement(childElement, parentElement) {
	return parentElement.appendChild(childElement);
}

// This function adds an attribute to an element
function addAttribute(element, attribute, value) {
	return element.setAttribute(attribute, value);
}
