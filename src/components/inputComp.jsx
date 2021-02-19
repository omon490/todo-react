import {React} from 'react'
import "./inputComp.css"


const InputComp = (props) => {

  return (
    <>
    <h2 className="heading">Todo List</h2>
    <input className="input" value={props.text} onChange={props.handleFunction} placeholder="Enter a task" />
    </>
  )
}

export {InputComp}

