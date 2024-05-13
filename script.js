const InputBox = document.getElementById("input-box");
const ListContainer = document.getElementById("list-container");

function addTask(){
    if(InputBox === ""){
        alert("You must Write sometning before adding!!!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = InputBox.Value;
        ListContainer.appendChild(li);
    }
    InputBox.Value= "";
}

addTask();