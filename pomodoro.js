document.addEventListener('DOMContentLoaded', () => {
  const pomodoroBtn = document.querySelector('.pomodoro-btn');
  const longBreakBtn = document.querySelector('.long-break-btn');
  const timeDisplay = document.querySelector('.time-display');
  const taskListDisplay = document.querySelector('.task-list-display');
  const taskManager = document.querySelector('.task-manager');
  const taskList = document.querySelector('.task-list');
  const controls = document.querySelector('.controls');
  const addTaskBtn = document.querySelector('.add-task-btn');
  const taskInput = document.querySelector('.task-input');
  const taskStartTime = document.querySelector('.task-start-time');
  const taskDuration = document.querySelector('.task-duration');

  const defaultTasks = ['Dorucak', 'Rucak', 'Vecera'];

  function switchToMojDan() {
    timeDisplay.style.display = 'none';
    taskListDisplay.style.display = 'block';
    taskManager.style.display = 'none';
    controls.style.display = 'flex';
    taskList.innerHTML = defaultTasks.map(task => `<li>${task}</li>`).join('');
  }

  function switchToNapraviSavrsenDan() {
    timeDisplay.style.display = 'none';
    taskListDisplay.style.display = 'none';
    taskManager.style.display = 'block';
    controls.style.display = 'none';
  }

  function addTask() {
    const taskText = taskInput.value.trim();
    const startTime = taskStartTime.value;
    const duration = taskDuration.value;

    if (taskText !== '' && startTime !== '' && duration !== '') {
      const li = document.createElement('li');
      li.innerHTML = `${taskText} - Start: ${startTime}, Duration: ${duration} minutes <button class="delete-task-btn">Delete</button>`;
      li.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-task-btn')) {
          li.remove();
        } else {
          li.classList.toggle('completed');
        }
      });
      taskList.appendChild(li);
      taskInput.value = '';
      taskStartTime.value = '';
      taskDuration.value = '';
    }
  }

  pomodoroBtn.addEventListener('click', switchToMojDan);
  longBreakBtn.addEventListener('click', switchToNapraviSavrsenDan);
  addTaskBtn.addEventListener('click', addTask);

  // Initialize the default view
  switchToMojDan();
});