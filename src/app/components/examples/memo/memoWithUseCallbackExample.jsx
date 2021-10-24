import React, {memo, useCallback, useEffect, useState} from 'react'
import PropTypes from 'prop-types'

const LogoutButton = ({onLogout}) => {
  useEffect(() => console.log('render button'))

  return (
    <button className="btn btn-primary" onClick={onLogout}>
      Log out
    </button>
  )
}

LogoutButton.propTypes = {
  onLogout: PropTypes.func
}

function areEqual(prevState, nextState) {
  if (prevState.onLogout !== nextState.onLogout) {
    return true
  }
  return true
}

// const MemoizedLogoutButton = memo(LogoutButton)
const MemoizedLogoutButton = memo(LogoutButton, areEqual)

const MemoWithUseCallbackExample = (props) => {
  const [state, setState] = useState(false)

  const handleLogout = useCallback(() => {
    localStorage.removeItem('auth')
  }, [props])

  return (
    <>
      <button className={`btn btn-${state ? 'outer-' : ''}primary`} onClick={() => setState(!state)}>Initiate rerender
      </button>
      <MemoizedLogoutButton onLogout={handleLogout}/>
    </>
  )
}

export default MemoWithUseCallbackExample
