let inputBox = document.querySelector("#input-box");
let listContainer = document.querySelector(".list-container");
let btn = document.querySelector("button");

btn.addEventListener("click", function() {
    if(inputBox.value === '') {
        alert("you must write something here..");
    } else {
        let li = document.createElement("li");
    li.innerText = inputBox.value;
    listContainer.appendChild(li);

    let crossbtn = document.createElement("crossbtn");
    crossbtn.innerHTML = "\u00d7";
    li.appendChild(crossbtn);

    }

    inputBox.value = "";
    saveData();
});

listContainer.addEventListener("click", function(e) {
    if(e.target.nodeName == "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.nodeName == "CROSSBTN") {
        e.target.parentElement.remove();
        saveData();
    }
});

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();