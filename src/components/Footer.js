import React from 'react'

export const Footer = ({length}) => {

  return (
    <footer>
      <p style={{textAlign: 'center',  marginTop: '1rem'}}>{length} List {length === 1 ? "item" : "items"}</p>
    </footer>
  )
}

export default Footer