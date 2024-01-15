import React from 'react'

const FilterSection = ({updateFilter}) => {
  return (
    <div>
      <div className='filter-section'>
          <button type="button" 
                  class="all" 
                  onClick={()=> updateFilter('all') }>
                    All
          </button>
          <button type="button" 
                  class="active" 
                  onClick={()=> updateFilter('active') }>
                  Active
          </button>
          <button type="button" 
                  class="completed" 
                  onClick={()=> updateFilter('completed') }>
                  Completed
          </button>
        </div>
    </div>
  )
}

export default FilterSection
