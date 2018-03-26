// start point for li id
let newLiId = 0;

function onReady() {
	const addToDoForm = document.getElementById('addToDoForm');
	const newToDoText = document.getElementById('newToDoText');
	const toDoList = document.getElementById('toDoList');

	addToDoForm.addEventListener('submit', () => {
		event.preventDefault();
		// get the text
    	let title = newToDoText.value;

		// create a new li
		let newLi = document.createElement('li');

		// create a new text input
		let checkbox = document.createElement('input');

		// create a new button
		let deleteItemButton = document.createElement('button');

		// set the input's type to checkbox
		checkbox.type = "checkbox";

		// set the title
		newLi.textContent = title;

		// attach the checkbox to the li
		newLi.appendChild(checkbox);

		// attach the delete button
		newLi.appendChild(deleteItemButton)

		// attach the li to the ul
		toDoList.appendChild(newLi);

		// set text for delete button
    	deleteItemButton.appendChild(document.createTextNode('X'));

		// set the item id for the li
    	newLi.setAttribute('id', 'listItem' + newLiId);

		// empty the input
		newToDoText.value = '';			

			// set attributes for the delete button
			deleteItemButton.setAttribute('onClick', 'deleteToDoItem("'+'listItem'+newLiId+'")');

			// set the item id for the li
			newLi.setAttribute('id', 'listItem' + newLiId);

			// lastID needs some incremental math
			newLiId += 1;

	});
}

var deleteToDoItem = function(thisLiId) {

	// assign an id
	var listItem = document.getElementById(thisLiId);

	// remove by id
	toDoList.removeChild(listItem);

}

window.onload = function() {
	onReady();
};