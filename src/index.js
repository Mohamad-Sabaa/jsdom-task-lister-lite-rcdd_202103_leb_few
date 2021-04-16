document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let input = document.getElementById('new-task-description');
  let toDoList = document.getElementById('tasks');
  let button = document.getElementById('create-task-form');

  button.addEventListener('click', (e) => {
    let li = document.createElement('li');
    li.innerText += input.value;
    toDoList.appendChild(li);
    e.preventDefault();
  })
});
