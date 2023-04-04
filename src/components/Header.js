import React from 'react'

export const Header = (props) => {
  return (
    <header>
      <h1 style={{fontSize: 28}}>{props.title}</h1>
    </header>
  )
}

export default Header