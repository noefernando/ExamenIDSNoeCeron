/* 1. Generar un programa en JS, HTML, CSS que nos ayude a generar una lista de tareas por
hacer, estas son las siguientes características que deberás completar:
● Agregar tareas
● Tareas de lectura
● Actualizar tareas
● Eliminar tareas
● Contar el número de tareas completadas e incompletas */
let tasks = [];
        function updateCounts() {
            const completed = tasks.filter(task => task.completed).length;
            document.getElementById("completedCount").innerText = completed;
            document.getElementById("incompleteCount").innerText = tasks.length - completed;
        }
        function addTask() {
            const taskText = document.getElementById("taskInput").value;
            if (taskText.trim() === "") return;
            const task = { text: taskText, completed: false };
            tasks.push(task);
            document.getElementById("taskInput").value = "";
            renderTasks();
        }
        function toggleTask(index) {
            tasks[index].completed = !tasks[index].completed;
            renderTasks();
        }
        function updateTask(index) {
            const newText = prompt("Actualizar tarea:", tasks[index].text);
            if (newText) tasks[index].text = newText;
            renderTasks();
        }
        function deleteTask(index) {
            tasks.splice(index, 1);
            renderTasks();
        }
        function renderTasks() {
            const taskList = document.getElementById("taskList");
            taskList.innerHTML = "";
            tasks.forEach((task, index) => {
                const li = document.createElement("li");
                li.className = "list-group-item d-flex justify-content-between align-items-center";
                li.innerHTML = `
                    <span class="${task.completed ? 'text-decoration-line-through text-muted' : ''}" onclick="toggleTask(${index})">${task.text}</span>
                    <div>
                        <button class="btn btn-success btn-sm me-2" onclick="toggleTask(${index})">✔</button>
                        <button class="btn btn-warning btn-sm me-2" onclick="updateTask(${index})">✏</button>
                        <button class="btn btn-danger btn-sm" onclick="deleteTask(${index})">🗑</button>
                    </div>
                `;
                taskList.appendChild(li);
            });
            updateCounts();
        }