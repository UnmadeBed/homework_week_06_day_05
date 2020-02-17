document.addEventListener('DOMContentLoaded', () => {
  const newItemForm = document.querySelector('#new-item-form');
  newItemForm.addEventListener('submit', handleNewItemFormSubmit);

    const deleteAllButton = document.querySelector('#delete-all');
    deleteAllButton.addEventListener('click', handleDeleteAllClick);

})

const handleNewItemFormSubmit = function (event) {
  event.preventDefault();
  const toDoListItem = createtoDoListItem(event.target);
  const toDoList = document.querySelector('#to-do-list');
  toDoList.appendChild(toDoListItem);
  event.target.reset();

}

const createtoDoListItem = function (form) {
  const toDoListItem = document.createElement('li');
  toDoListItem.classList.add('to-do-list-item');

  const task = document.createElement('h2');
  task.textContent = form.task.value;
  toDoListItem.appendChild(task);

  const radio = document.createElement('p');
  radio.textContent = form.importance.value;
  toDoListItem.appendChild(radio);

  const deadline = document.createElement('p');
  deadline.textContent = form.deadline.value.toUpperCase();
  toDoListItem.appendChild(deadline);

  const owner = document.createElement('p');
  owner.textContent = form.owner.value.toUpperCase();
  toDoListItem.appendChild(owner);

  return toDoListItem;
}

const handleDeleteAllClick = function (event) {
  const toDoList = document.querySelector('#to-do-list');
  toDoList.innerHTML = '';
}
