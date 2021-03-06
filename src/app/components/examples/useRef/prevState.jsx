import React, {useEffect, useRef, useState} from 'react'
import CardWrapper from '../../common/Card'
import SmallTitle from '../../common/typografy/smallTitle'
import Divider from '../../common/divider'

const PrevStateExample = () => {
  const prevState = useRef('')

  const [otherState, setOtherState] = useState('false')

  useEffect(() => {
    prevState.current = otherState
  }, [otherState])

  const toggleOtherState = () => {
    setOtherState(prev => prev === 'false' ? 'true' : 'false')
  }

  return (
    <CardWrapper>
      <SmallTitle>Предыдущее состояние</SmallTitle>
      <Divider/>

      <p>Prev State: {prevState.current}</p>
      <p>Current State: {otherState}</p>
      <button className="btn btn-primary" onClick={toggleOtherState}>Toggle state</button>

    </CardWrapper>
  )
}

export default PrevStateExample
