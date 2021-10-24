import React from 'react'
import CollapseWrapper from '../common/collapse'
import PropTypes from 'prop-types'
import Divider from '../common/divider'

const ChildrenExercise = () => {
  return (
    <CollapseWrapper title="Упражнение">
      <p className="mt-3">
        У вас есть компоненты Списка. Вам необходимо к каждому из них
        добавить порядковый номер, относительно того, как они
        располагаются на странице. Вы можете использовать как{' '}
        <code>React.Children.map</code> так и{' '}
        <code>React.Children.toArray</code>
      </p>

      <Divider/>

      <MyList>
        <Component/>
        <Component/>
        <Component/>
      </MyList>

      <Divider/>

      <AnotherList>
        <Component/>
        <Component/>
        <Component/>
      </AnotherList>

    </CollapseWrapper>
  )
}

const Component = () => {
  return <div>Компонент списка</div>
}

export default ChildrenExercise

const MyList = ({children}) => {
  return (
    React.Children.map(children, (child, i) => (
      <div className="d-flex gap-1">
        <div style={{color: 'red', fontWeight: 'bold'}}>{i + 1}.</div>
        {
          React.cloneElement(child)
        }
      </div>
    )))
}

MyList.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
}

const AnotherList = ({children}) => {
  return React.Children.toArray(children).map((child, i) => (
    <div className="d-flex gap-1" key={child.key}>
      <div style={{color: 'magenta', fontWeight: 'bold'}}>{i + 1}.</div>
      {
        child
      }
    </div>
  ))
}

AnotherList.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
}

/*
//============== For future discovery ==================

const MyList = ({children}) => {
  const clonedElements = React.Children.map(children, (child, i) => {
    const clonedElement = React.cloneElement(child, {style: {color: 'red'}})
    console.log('clonedElement', clonedElement)
    return clonedElement
  })
  console.log('clonedElements', clonedElements)

  return (<div>{clonedElements.map((child, i) => {
      console.log('child', child)
      return <div key={child.key} style={{color: 'red'}}>{i + 1}. {child}</div>
    })}</div>
  )
}

 */
