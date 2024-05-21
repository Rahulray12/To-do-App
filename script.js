const InputBox = document.getElementById("input-box");
const ListContainer = document.getElementById("list-container");

function addTask(){
    if(InputBox.value === ""){
        alert("You must write something before adding!!!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = InputBox.value; 
        ListContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    InputBox.value = ""; 
    savedata();
}

ListContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
},false)

function savedata() {
    localStorage.setItem("data",ListContainer.innerHTML);
}

function showTask(){
    ListContainer.innerHTML = localStorage.getItem("data");
}

InputBox.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        addTask();
    }
});
showTask();
