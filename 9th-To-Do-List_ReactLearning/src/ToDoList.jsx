
import React, { useState } from "react";

function ToDoList() {

    const [task, setTask] = useState(["Morning Walk", "Take a shower", "Eat Breakfast"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim() !== "") {
            setTask(t => [...t, newTask])
            setNewTask("");
        }
    }

    function deleteTask(index) {
        const updatedTask = task.filter((_, i) => i !== index);
        setTask(updatedTask);
    }
    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTask = [...task];
            [updatedTask[index], updatedTask[index - 1]] = [updatedTask[index - 1], updatedTask[index]];
            setTask(updatedTask);
        }
    }
    function moveTaskDown(index) {
        if (index < task.length - 1) {
            const updatedTask = [...task];
            [updatedTask[index], updatedTask[index + 1]] = [updatedTask[index + 1], updatedTask[index]];
            setTask(updatedTask);
        }
    }

    return (<>
        <div className="ToDoList-container">
            <h2>To-Do List</h2>

            <input type="text" value={newTask} onChange={handleInputChange} placeholder="Enter a task..." />
            <button className="add-button" onClick={addTask} >Add Task</button>

            <ol>
                {task.map((t, index) =>
                    <li key={index}>
                        <span className="text">{t}</span>
                        <button className="delete-button" onClick={() => deleteTask(index)} > Delete </button>
                        <button className="moneUp-button" onClick={() => moveTaskUp(index)} > ⬆️ </button>
                        <button className="moveDown-button" onClick={() => moveTaskDown(index)} > ⬇️ </button>
                    </li>
                )}
            </ol>
        </div>

    </>);
}
export default ToDoList
