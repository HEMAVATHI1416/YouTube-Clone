import React from 'react';



function Downrow({ selected, Icon, title }) {
  return (
    <div className={`sidebarrow ${selected ? 'selected' : ''}`}>
      <Icon className='sidebarrow__icon' />
      <h2 className='sidebarrow__title'>{title}</h2>
    </div>
  )
}

export default Downrow;
