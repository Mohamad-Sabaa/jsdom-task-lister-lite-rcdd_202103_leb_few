document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let input = document.getElementById("new-task-description");
  let toDos = document.getElementById("tasks");
  let button = document.getElementById("btnId");

  button.addEventListener('click', (e) => {
    let li = document.createElement('li')
    toDos.appendChild(li);
    toDos.innerText = input.value;
  })

};
