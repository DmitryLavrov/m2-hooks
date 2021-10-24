import React, {useRef} from 'react'
import CardWrapper from '../../common/Card'
import SmallTitle from '../../common/typografy/smallTitle'
import Divider from '../../common/divider'

const ProgrammablActionsExample = () => {
  const inputRef = useRef()

  const handleClickFocus = () => {
    inputRef.current.focus()

    console.log('inputRef.current', inputRef.current)
    console.log('inputRef.current.clientWidth', inputRef.current.clientWidth)
  }

const handleClickWidth = () => {
  inputRef.current.style.width = '100px'
}

  return (
    <CardWrapper>
      <SmallTitle className="card-title">Программируемые действия и свойства</SmallTitle>
      <Divider/>

      <label htmlFor="email" className="form-label">Email</label>
      <input ref={inputRef} id="email" type="email" className="form-control"/>
      <button className="btn btn-primary" onClick={handleClickFocus}>Focus on Input</button>
      <button className="btn btn-outline-primary" onClick={handleClickWidth}>Change width of Input</button>

    </CardWrapper>
  )
}

export default ProgrammablActionsExample
