import React from 'react';
import { useState } from 'react';
import './App.css';
import GridComponent from './components/GridComponent';
import TaskView from './components/TaskView';


function App() {
  const[tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  const handleTaskAddition = (text) => {
    const newTask = {
      id: Date.now(),
      taskDescription: text,
      complete: false,
    }
    setTasks([newTask, ...tasks]);
  }

  const handleDeleteTask = (id) => {
    const updatedTaskArray= tasks.filter((task) => task.id !==id);
    setTasks(updatedTaskArray);
  }

  const handleToggle = (id) => {
    setTasks(
      tasks.map(task => { if(task.id===id) {return {...task, complete: !task.complete}}})
    )
  }
  //Function to clear completed tasks
  const clearCompletedTasks = () => {
    const completedTasks = tasks.filter(task => !task.complete);
    setTasks(completedTasks);
  }

  //function to set filter value
  const setFilterValue = (value) => setFilter(value);

  //function to filter the TaskView based on the state of the filterSection
  const filterView = () => {
    let filteredState;

    if (filter === "all") {
      filteredState = tasks;
    } else if (filter === "active") {
      filteredState = tasks.filter(task => !task.complete);
    } else if (filter === "completed") (
      filteredState = todos.filter(task => task.complete)
    )

    return filteredState.map(task => (<TaskView key={task.id} tasks={tasks} deleteTask={deleteTask}
    toggle={handleToggle}/>))
  }

  const taskCount = () => {
    if (filter === "all") {
      return tasks.length;
    } else if (filter === "active") {
      return tasks.filter(task => !task.complete).length;
    } else if (filter === "completed") {
      return tasks.filter(task => task.complete).length;
    }

    return 0;
  }






  return (
    
      <div className="App">
        {/* <h1>React App with CSS Grid</h1> */}
        <GridComponent taskAddition={handleTaskAddition}
                       tasks={tasks}
                       deleteTask={handleDeleteTask}
                       toggle={handleToggle}
                       updateFilter={setFilterValue}
                       filterView={filterView}
                       clearCompletedTasks={clearCompletedTasks}
                       taskCount={taskCount}
        />
      </div>
        
    
  )
}

export default App
