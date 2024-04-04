import React from 'react'

const Overlay = ({toggle}:{toggle?: () => void}) => {
  return (
    <div className='app__menubar-overlay' onClick={toggle}></div>
  )
}

export default Overlay