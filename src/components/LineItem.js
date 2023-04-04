import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const LineItem = ({item, handleChek, editTodo, handleDelete}) => {
  return (
    <li className='item' key={item.id}>
      <input 
        type="checkbox" 
        checked={item.checked}
        onChange={() => handleChek(item.id)}/>
      <label 
        style={(item.checked) ? {textDecoration: 'line-through'} : null}
        onDoubleClick={() => handleChek(item.id)}>{item.item}</label>
      <FontAwesomeIcon className="edit-icon" icon={faPenToSquare} onClick={() => editTodo(item.id)}/>
      <FontAwesomeIcon icon={faTrash} onClick={() => handleDelete(item.id)} role="button" aria-label={`Delete ${item.item}`}/>
    </li>
  )
}

export default LineItem