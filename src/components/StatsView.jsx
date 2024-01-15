import React from 'react'

const StatsView = ({clearCompletedTasks, taskCount}) => {
  return (
    <div>
      <div className='stats'>
          <div className='count'>{taskCount()}</div>
          <button className='Clear' onClick={()=> clearCompletedTasks}>Clear Completed</button>
        </div>
    </div>
  )
}

export default StatsView
