import React, {useEffect, useMemo, useState} from 'react'
import CardWrapper from '../../common/Card'
import SmallTitle from '../../common/typografy/smallTitle'
import Divider from '../../common/divider'

function factorial(n) {
  return n ? n * factorial(n - 1) : 1
}

function runFactorial(n) {
  console.log('RUN FACTORIAL')
  return factorial(n)
}

const ComplexCalculateExample = () => {
  const [value, setValue] = useState(10)
  const [otherState, setOtherState] = useState(false)

  const buttonColor = otherState ? 'primary' : 'outer-primary'

  useEffect(() => {
    console.log('render')
  })

  const fact = useMemo(() => runFactorial(value), [value])

  const handleButtonOtherState = () => {
    setOtherState(!otherState)
  }
  return (
    <>
      <CardWrapper>
        <SmallTitle>Кэширование сложных вычислений</SmallTitle>
        <Divider/>

        <p>Value: {value}</p>
        <p>Result fact: {fact}</p>

        <button className="btn btn-primary" onClick={() => setValue(prev => (prev + 10))}>Increment</button>
        <button className="btn btn-primary" onClick={() => setValue(prev => (prev - 10))}>Decrement</button>

      </CardWrapper>
      <CardWrapper>
        <SmallTitle>Зависимость от сторонних setState</SmallTitle>
        <Divider/>

        <button className={'btn btn-' + buttonColor} onClick={handleButtonOtherState}>Other State</button>
      </CardWrapper>
    </>
  )
}

export default ComplexCalculateExample
