import React from 'react';

import { MdCancel } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";

function TaskView({tasks, description, deleteTask, toggle}) {
  return (
    <div>
       <div className='task-view'>
          {Tasks.complete ? <FaCheck className='check' onClick={toggle(tasks.id)}/> : 
            <MdCancel className='cancel' onClick={toggle(tasks.id)}/>
          }
          <p className='task-description'>
            {description}
          </p>
          <div className='taskDelete'>
            <MdDeleteForever onClick={() => deleteTask(task.id)}/>
          </div>
       
      </div>
    </div>
  )
}

export default TaskView
  