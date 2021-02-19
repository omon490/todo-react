import React from 'react'
import './buttonComp.css'

const ButtonComp = (props) => {
  return <button className="button" onClick={props.handleClick}>Add to list</button>
}

export default ButtonComp