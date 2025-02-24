import { useState } from "react";
import './App.css';

function App(){
    let [tasks, setTasks] = useState([]);
    let [newTask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){
        if(newTask.trim()!=""){
            setTasks(prevTasks => [...prevTasks,newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index){
        let updatedTasks = tasks.filter((_,i)=> i!=index);
        setTasks(updatedTasks);
    }

    return(
        <>
            <h3>To-Do List</h3>
            <div>
                <input type="text" placeholder="Enter tasks" value={newTask} onChange={handleInputChange}/>
                <button onClick={addTask} className="addBtn">Add Task</button>
            </div>
            <ol>
                {tasks.map((task,index)=> <li key={index}>
                    <span>{task}</span>
                    <button onClick={()=>deleteTask(index)} className="deleteBtn">Delete Task</button>
                </li>)}
            </ol>
        </>
    );
}

export default App