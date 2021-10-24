import React, {useCallback, useEffect, useRef, useState} from 'react'
import CardWrapper from '../../common/Card'
import SmallTitle from '../../common/typografy/smallTitle'
import Divider from '../../common/divider'

const UseCallBackExample = () => {
  const [data, setData] = useState({})

  const withoutCallbackRef = useRef(0)
  const withCallbackRef = useRef(0)

  const validateWithoutCallback = (data) => {
    console.log('data', data)
  }

  const validateWithCallback = useCallback((data) => {
    console.log('data', data)
  }, [])

  useEffect(() => {
    withoutCallbackRef.current++
  }, [validateWithoutCallback])

  useEffect(() => {
    withCallbackRef.current++
  }, [validateWithCallback])

  useEffect(() => {
    validateWithoutCallback(data)
    validateWithCallback(data)
  }, [data])

  const handleChange = (event) => {
    setData(prev => ({...prev, [event.target.name]: event.target.value}))
  }

  return (
    <CardWrapper>
      <SmallTitle>Example</SmallTitle>
      <Divider/>

      <p>Render without Callback: {withoutCallbackRef.current}</p>
      <p>Render with Callback: {withCallbackRef.current}</p>

      <label htmlFor="email" className="form-label">Email</label>
      <input id="email" type="email" className="form-control" onChange={handleChange} value={data.email || ''}
             name="email"/>
    </CardWrapper>
  )
}

export default UseCallBackExample
