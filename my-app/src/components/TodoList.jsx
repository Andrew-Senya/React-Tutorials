import { useState } from "react"



function TodoList() {

    const [tasks, setTask] = useState(["Eat breakfast", "Take my shower", "Read a book"]);
    const [newTask, setNewTask] = useState();

    function handleInputTask(event) {
        setNewTask(event.target.value)
    } 


    function handleAddTask() {
        if (newTask.trim() !== "") {
            setTask((t) => [...t, newTask]);
            setNewTask("");

        }
        
    }

    function handleRemoveTask(index) {
        const taskUpdated = tasks.filter((_, i) => i !== index);
        setTask(taskUpdated);
    }

    function handleMoveUpTask(index) {
        if (index > 0) {
            const updatedTask = [...tasks];
            [updatedTask[index], updatedTask[index - 1]] = [updatedTask[index - 1], updatedTask[index]];
            setTask(updatedTask);
        }

    }

    function handleMoveDownTask(index) {
         if (index < tasks.length - 1) {
           const updatedTask = [...tasks];
           [updatedTask[index], updatedTask[index + 1]] = [
             updatedTask[index + 1],
             updatedTask[index],
           ];
           setTask(updatedTask);
         }
    }


  return (
      <div>
          <h1>TO-DO-LIST</h1>
      <input
        type="text"
        onChange={handleInputTask}
        value={newTask}
        placeholder="Enter your Task..."
      />
      <button onClick={handleAddTask}>Add</button>
      <div>
        <ol>
          {tasks.map((task, index) => (
            <li>
              <span>{task}</span>
              <button onClick={() => handleRemoveTask(index)}>Remove</button>
              <button onClick={() => handleMoveUpTask(index)}>UP</button>
              <button onClick={() => handleMoveDownTask(index)}>DOWN</button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default TodoList
