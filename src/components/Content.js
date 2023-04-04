import ItemList from './ItemList'

export const Content = ({items, handleChek, editTask, editTodo, handleDelete}) => {
  
  return (
    <main>
      {items.length ? (
        <ItemList
          items={items}
          handleChek={handleChek}
          editTask={editTask}
          editTodo={editTodo}
          handleDelete={handleDelete}/>
        ) : (
          <p style={{color: 'aliceblue',  textAlign: 'center',  marginTop: '1rem'}}> Your list is empty.</p>
      )}
    </main>
  )
}

export default Content