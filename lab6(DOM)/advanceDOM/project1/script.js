const input = document.getElementById("taskInput");
const list = document.getElementById("taskList");
document.getElementById("addBtn").addEventListener("click", () => {
if (input.value.trim() !== "") {
    let li = document.createElement("li");
    li.textContent = input.value;
    li.addEventListener("click", () => li.remove());
    list.appendChild(li);
    input.value = "";
  }
});

