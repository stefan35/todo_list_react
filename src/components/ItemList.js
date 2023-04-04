import React from 'react'
import LineItem from './LineItem'
import EditItem from './EditItem';

export const ItemList = ({items, handleChek, editTask, editTodo, handleDelete}) => {
  return (
    <ul>
      {items.map((item, index) => (
        item.isEditing ? (
          <EditItem
            key={item.id} 
            editTask={editTask} 
            task={item}/>
        ) : (
          <LineItem
            key={item.id}
            item={item}
            handleChek={handleChek}
            editTodo={editTodo}
            handleDelete={handleDelete}/>)  
      ))}
    </ul>
  )
}

export default ItemList