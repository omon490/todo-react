import React from 'react'
import './listComp.css'

const ListComponent = (props) => {
  return (
    <div className="div">
      <ul className="list">
        {props.listToDo.map(el => (
        <li className="item">{el}</li>))
        }</ul>
    </div>
  )
}

export default ListComponent