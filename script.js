document.getElementById("todo-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const input = document.getElementById("todo-input");
  const taskText = input.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;
  document.getElementById("todo-list").appendChild(li);
  input.value = "";
});

const deleteBtn = document.createElement("button");
deleteBtn.textContent = "❌";
deleteBtn.onclick = () => li.remove();
li.appendChild(deleteBtn);

li.addEventListener("click", () => {
  li.classList.toggle("completed");
});

function saveTasks() {
  const tasks = [];
  document.querySelectorAll("#todo-list li").forEach((li) => {
    tasks.push({
      text: li.childNodes[0].nodeValue,
      completed: li.classList.contains("completed"),
    });
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
