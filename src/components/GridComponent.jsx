
import React from 'react';
// import './App.css'; // Import the CSS file with grid styles
import { FaMoon } from "react-icons/fa";

import Header from './Header';
import Form from './Form';
import FilterSection from './FilterSection';
// import TaskView from './TaskView';
import StatsView from './StatsView';

const GridComponent = ({tasks,
                        handleAddition,
                        deleteTask,
                        updateFilter,
                        filterView,
                        clearCompletedTasks,
                        taskCount,
                      }) => {
  return (
    <div className="grid-container">
      <div className="grid-item item1">
        <Header/>
        <Form handleAddition={handleAddition} />
      </div> 
      <div className="grid-item item2"></div>

      <div className="grid-item item3">
        <FilterSection updateFilter={updateFilter}/>
        {filterView()}
      </div>
      
      <div className="grid-item item4"></div>

      <div className="grid-item item5">
        <StatsView clearCompletedTasks={clearCompletedTasks} taskCount={taskCount}/>
      </div>
      {/* Add more grid items as needed */}
    </div>
  );
};

export default GridComponent;
