let tasks = [];

const loadTasks = () => {
    tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    console.log('📥 Tasks loaded:', tasks);
};

const saveTasks = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    console.log('💾 Tasks saved:', tasks);
};

const addTask = () => {
    const text = document.getElementById('taskInput').value.trim();
    if (!text) return;
    const task = { id: Date.now(), text, completed: false };
    tasks.push(task);
    console.log('✅ Task added:', task);
    saveTasks();
    document.getElementById('taskInput').value = '';
    render();
};

const deleteTask = (id) => {
    console.log('🗑️ Task deleted:', id);
    tasks = tasks.filter(t => t.id !== id);
    saveTasks();
    render();
};

const toggleTask = (id) => {
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.completed = !task.completed;
        console.log('✏️ Task toggled:', id, '| Completed:', task.completed);
        saveTasks();
        render();
    }
};

const clearAll = () => {
    if (tasks.length === 0) return alert('No tasks to clear!');
    if (confirm('Delete all tasks?')) {
        console.log('🔄 All tasks cleared');
        tasks = [];
        saveTasks();
        render();
    }
};

const render = () => {
    console.log('🎨 Rendering', tasks.length, 'tasks');
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    tasks.forEach(task => {
        const li = document.createElement('li');
        if (task.completed) li.classList.add('completed');
        li.innerHTML = `
            <input type="checkbox" class="checkbox" ${task.completed ? 'checked' : ''} onchange="toggleTask(${task.id})">
            <span class="task-text">${task.text}</span>
            <button class="mark-done-btn" onclick="toggleTask(${task.id})">${task.completed ? 'Undo' : 'Done'}</button>
            <button class="delete-btn" onclick="deleteTask(${task.id})">Delete</button>
        `;
        taskList.appendChild(li);
    });
};

document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 App started');
    loadTasks();
    render();
    document.getElementById('taskInput').addEventListener('keypress', (e) => e.key === 'Enter' && addTask());
    document.getElementById('addBtn').addEventListener('click', addTask);
    document.getElementById('clearAllBtn').addEventListener('click', clearAll);
});
