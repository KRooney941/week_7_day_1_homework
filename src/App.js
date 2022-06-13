import './App.css';
import React, {useState} from 'react';

function App() {
  const [tasks, setTasks] = useState([
      { name: "Buy shopping", HighPriority: true },
      { name: "Clean bathroom", HighPriority: false },
      { name: "Car's MOT", HighPriority: false }
  ]);

  const [newTask, setNewTask] = useState("")


  const taskNodes = tasks.map((task, index) => {
    return (
      <li key={index} className={task.HighPriority ? "high": "low"}><span>{task.name}</span>
      {task.HighPriority ? <button className='low-button' onClick={() => taskUncompleted(index)}>Make Low Priority</button> : <button className='high-button' onClick={() => taskCompleted(index)}>Make High Priority</button>}
      </li>
    )
  })


  const handleTaskInput = (event) => {
    setNewTask(event.target.value)
  }


  const saveNewTask =(event) => {
    event.preventDefault();
    const copyTasks = [...tasks]
    copyTasks.push({name: newTask, HighPriority: false})
    setTasks(copyTasks)
    setNewTask("")  
  }

    
  const taskCompleted = (index => {
    const copyTasks = [...tasks]
    copyTasks[index].HighPriority = true
    setTasks(copyTasks)
  })

  const taskUncompleted = (index => {
    const copyTasks = [...tasks]
    copyTasks[index].HighPriority = false
    setTasks(copyTasks)
  })


return (
  <div className="App">

    <h1>To Do List:</h1>
    <hr></hr>

    <ul>
      {taskNodes}
    </ul>

    <form onSubmit={saveNewTask}>
      <label htmlFor='new-task'> Add a new task</label>
      <input id="new-task" type="text" value={newTask} onChange={handleTaskInput} />
      <input type="submit" value="Save New Task"/>
      <input type="radio" id="html" name="HighPriority" value="HIGH" />
      <label for="high">HIGH</label>
      <input type="radio" id="css" name="HighPriority" value="LOW" />
      <label for="low">LOW</label>
    </form>
  </div>
)

}
export default App;
