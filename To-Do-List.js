const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const taskText = taskInput.value.trim();
    if (taskText) {
      const taskItem = document.createElement('li');
      taskItem.className = 'list-group-item d-flex justify-content-between align-items-center';
      taskItem.innerHTML = `
        ${taskText}
        <button class="btn btn-sm btn-danger">Delete</button>
      `;
      taskList.appendChild(taskItem);
      taskInput.value = '';
    }
  });

  // Delete Task
  taskList.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-danger')) {
      e.target.parentElement.remove();
    }
  });