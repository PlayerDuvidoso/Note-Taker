function checkTasksView() {
    tasksView.hidden = tasksView.hasChildNodes() ? false : true
};

class TaskItem {
    constructor(taskId, text) {
        this.taskId = taskId;
        this.text = text;
        this.element = this.createElement();
    }
    
    createElement() {
        const taskItem = document.createElement('div');
        taskItem.classList.add('taskItem');
        taskItem.setAttribute('task-id', this.taskId);
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('taskItemCheck');
        taskItem.appendChild(checkbox);
        
        const taskText = document.createElement('span');
        taskText.classList.add("taskItemText");
        taskText.innerText = this.text;
        taskItem.appendChild(taskText);
        
        //Creating the Buttons
        const iconButtons = document.createElement('div');
        iconButtons.classList.add("taskIconButtons");
        
        const editBtn = document.createElement('button');
        editBtn.classList.add("taskItemBtn");
        const editIco = document.createElement('i');
        editIco.classList.add("fa-solid", "fa-pencil");
        editBtn.appendChild(editIco);
        iconButtons.appendChild(editBtn);
        editBtn.addEventListener("click", () => {
            taskText.innerText = prompt("Bro what? ");
        })

        const delBtn = document.createElement('button');
        delBtn.classList.add("taskItemBtn");
        const delIco = document.createElement('i');
        delIco.classList.add("fa-solid", "fa-x");
        delBtn.appendChild(delIco);
        iconButtons.appendChild(delBtn);
        
        delBtn.addEventListener("click", () => {
            this.element.remove();
            checkTasksView();
        })

        taskItem.appendChild(iconButtons);
        
        return taskItem;
        
    }
    
    render() {
        return this.element;
    }
}


const addTaskBtn = document.getElementById("addTaskBtn");
const tasksView = document.getElementById("tasksView");


addTaskBtn.addEventListener("click", (event) => {
    const taskAddInput = document.getElementById("taskAddInput");

    if (taskAddInput.value.length <= 0) {
        taskAddInput.placeholder = "What is the task?";
        return;
    }
    
    tasksView.appendChild(new TaskItem(1, taskAddInput.value).render())
    checkTasksView()
})