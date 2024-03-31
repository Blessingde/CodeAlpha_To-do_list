//Getting require field
const inputField = document.querySelector(".input-field textarea"),
todoList = document.querySelector(".todolists"),
pendingNum = document.querySelector(".pending-num"),
clearButton = document.querySelector("button")

function allTasks() {
    let tasks = document.querySelectorAll(".pending");
    pendingNum.textContent = tasks.length === 0 ? "no" : tasks.length;

    let allLists = document.querySelectorAll(".list")
    if (allLists.length>0) {
        todoList.style.marginTop = "20px"
        clearButton.style. pointerEvents = "auto"
        return;
        
    }
    todoList.style.marginTop = "0px";
    clearButton.style. pointerEvents = "none"
}

inputField.addEventListener('keyup', (e)=>{
   let inputValue = inputField.value.trim();
    //console.log(inputValue)
    if (e.key === "Enter") {
       let liTag = `<li class="list pending" onclick="handleStatus(this)">
       <input type="checkbox">
       <span class="task">${inputValue}</span>

       <i class="fa-solid fa-trash trash" onclick="deleteTask(this)"></i>
   </li>`
   todoList.insertAdjacentHTML("beforeend", liTag)
        inputField.value = "";
        allTasks()
    }
})

function handleStatus(e){
    const checkbox = e.querySelector('input')
    checkbox.checked = checkbox.checked ? false:true;
    e.classList.toggle("pending")
    allTasks()
}

function deleteTask(e) {
    e.parentElement.remove()
}
clearButton.addEventListener("click", ()=>{
    todoList.innerHTML = "";
    allTasks();
})



