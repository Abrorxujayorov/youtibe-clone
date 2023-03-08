import React from 'react'

const Setbaber = ({text , icon}) => {
  return (
      <>
      <div className='sidebar__category'>
        <div className="sidebar__category">
            <i className="material-icons">{icon}</i>
            <span>{text}</span>
        </div>
      </div>
    </>
  )
}

export default Setbaber