const taskInput = document.querySelector('#tasks');
const taskToAdd = document.querySelector('input[name="task"]');
const newTask = document.querySelector('#taskList');
let itemCount = 0;
const taskList = [];

taskInput.addEventListener('submit', function(e){
    e.preventDefault();
    const newToDo = document.createElement('li');
    const remvBtn = document.createElement('button');
    remvBtn.innerText = 'Delete';
    newToDo.innerText = taskToAdd.value + " ";
    ++itemCount;
    let  = 
    newToDo.setAttribute('id', `${newToDo}`)
    newToDo.appendChild(remvBtn);
    taskToAdd.value = '';
    newToDo.isCompleted = false;
    newTask.appendChild(newToDo);

    newToDo.setAttribute('id', itemCount);
   
    taskList.push({ task: newToDo.innerText});
    localStorage.setItem("todos", JSON.stringify(taskList))
    

});



const savedTasks = JSON.parse(localStorage.getItem("taskList")) || [];
    for(let i = 0; i < taskList.length; i++){
        let newTodo = document.createElement("li");
        newTodo.innerText = taskList[i].task;
        newTodo.isCompleted = taskList[i].isCompleted ? true : false;
        taskList.appendChild(newTodo);
      }


newTask.addEventListener('click', function(e){
    let clickedListItem = e.target;
    if( e.target.tagName === 'BUTTON'){
        e.target.parentElement.remove();
        localStorage.removeItem(`${e.target}`)
        e.target.parentElement.isCompleted = true;
    }
    else if(e.target.tagName === 'LI'){
        e.target.classList.toggle('finished');
}
// Adapted from the example
for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].task === clickedListItem.innerText) {
      taskList[i].isCompleted = !taskList[i].isCompleted;
      localStorage.setItem("todos", JSON.stringify(taskList));
    }
  }
})







// I really wanted to include a timer to see how long I've been working on a task. 
// Had to do some digging in forder for this to work, 
// it took too much time but I'm happy I kinda got it to work. 
// It still has a problem with resetting seconds and minutes.
// I'm still working on this part. I was thinking of wraping this in a while loop but it doesn't seem to work.
// More research, or progression in the course, is needed.
const timer = document.getElementById('timer');
const time = document.getElementById('Time');
time.addEventListener('click', function(e){     
    time.disabled = true;
    
    let timeStart = Date.now();  
    
            let startTime = setInterval( function(){
            let start = Date.now() - timeStart;
            let seconds = Math.floor(start / 1000);
            let hours = Math.floor(start / 3600000);
            let minutes = Math.floor(start / 60000);
             
                if((seconds> 59)){
                seconds = seconds - 60;
                } 
                
                if(minutes> 59){
                minutes = minutes - 60;
                }
            

            timer.innerText = `Time ${hours}: ${minutes}: ${seconds}`;
            })  
    document.getElementById('Stop').addEventListener('click', function() {
        clearInterval(startTime); 
        time.disabled = false;
             
});
  
  });     