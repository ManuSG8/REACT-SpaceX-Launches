import React from 'react'

function Button({ children, type, handleClick }) {
  return(
    <button
      className={type}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}

export default Button