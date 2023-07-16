const todoInput = document.getElementById('todo-input')
const addTaskButton = document.getElementById('add-task-btn')
const todoList = document.getElementById('todo-list')
const slj = document.querySelector('.slj')

const addTask = () => {
    const taskText = todoInput.value.trim()

    if(taskText !== '') {
        const taskItem = createTaskItem(taskText)
        todoList.appendChild(taskItem)
        todoInput.value = ''
    }
}

const createTaskItem = (taskText) => {
    const taskItem = document.createElement('li')
    taskItem.className = "todo-item"

    const checkbox = document.createElement('input')
    checkbox.type = "checkbox"
    checkbox.classList.add("checkbox")

    const taskTextSpan = document.createElement('span')
    taskTextSpan.textContent = taskText + ', m@th*rf#{k^r!'

    const deleteBtn = document.createElement('button')
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>'
    deleteBtn.classList.add('delete-btn')
    deleteBtn.addEventListener('click', deleteTask)

    taskItem.appendChild(checkbox)
    taskItem.appendChild(taskTextSpan)
    taskItem.appendChild(deleteBtn)

    return taskItem
}

const deleteTask = (event) => {
    const taskItem = event.target.parentNode
    todoList.removeChild(taskItem)
    // taskItem.remove()
}

const toggleTask = (event) => {
    const taskItem = event.target.parentNode
    taskItem.classList.toggle('completed')
    let audio = new Audio('SLJ.mp3');
    audio.play();
    slj.style.display = "block"
    const myTimeout =
    setTimeout(() => { 
        slj.style.display = "none"
    }, 3600);
    // clearTimeout(myTimeout);
    // clearInterval(myInterval);
    
}

addTaskButton.addEventListener('click', addTask)
todoInput.addEventListener('keydown', function(event) {
    if(event.key === 'Enter') {
        addTask()
    }
})

todoList.addEventListener('change', toggleTask)

// const initialTasks = ['buy groceries', 'fuck bitches', 'shoot some videos']

// initialTasks.forEach((task) => {
//     const taskItem = createTaskItem(task)
//     todoList.appendChild(taskItem)
// })