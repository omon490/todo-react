import React, {useState} from 'react'
import {InputComp} from './components/inputComp'
import ButtonComp from './components/buttonComp'
import ListComponent from './components/listComp'


const App = () => {


  const [text, setText] = useState("")

  const [list, setList] = useState([])

  const handleInputText = val => {
    setText(val.target.value)
  }

  const handleClick = (e) => {
    setText("");
    setList([...list, text])
  }

  return (
    <div>
      <InputComp text={text} handleFunction = {handleInputText}/>
      <ButtonComp handleClick = {handleClick}/>
      <ListComponent listToDo = {list}/>
    </div>
  )
}

export default App
