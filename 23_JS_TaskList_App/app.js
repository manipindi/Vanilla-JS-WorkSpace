let taskForm = document.querySelector('#task-form');
taskForm.addEventListener('submit', function(event){

    let taskInput = document.querySelector('#input-item');
    let task = taskInput.value.trim();
    
    //get tasks from localstorage
    let taskList = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
    taskList.unshift(task);

    localStorage.setItem('tasks',JSON.stringify(taskList));
    displayTask();
});

//display task
let displayTask = () => {
    let taskListEl = document.querySelector('#task-list');
    let taskList = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
    if(taskList.length !== 0){
        let eachOne = '';
        for(let task of taskList){
            eachOne += `<li class="list-group-item list-group-item-action list-group-item-warning">
            <span class="font-weight-bold">${task}
            </span>
            <button class="close">
                <i class="fa fa-times-circle"></i>
            </button>
            </li>`
        }
    taskListEl.innerHTML= eachOne;
    }
};
displayTask();

//remove task

let taskListEl =document.querySelector('#task-list');
taskListEl.addEventListener('click', function(event){
    let targetEl = event.target;
    if(targetEl.classList.contains('fa-times-circle')){
        let actualEl = targetEl.parentElement.parentElement;
        let selectedText = actualEl.innerText;

        //get task 
        let taskList = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
        taskList = taskList.filter(function(task){
            return task.trim() !== selectedText.trim();
        });
        localStorage.setItem('tasks', JSON.stringify(taskList));
        displayTask();
        window.location.reload();
    }
    else{
        console.log('no');
    }
});
