import React, { useState } from 'react'
import './index.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import AddItem from './components/AddItem';
import SearchItem from './components/SearchItem';

function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('todoList')))
  const [newItem, setNewItem] = useState('')
  const [search, setSearch] = useState('')

  const setAndSaveItems = (newItems) => {
    setItems(newItems)
    localStorage.setItem('todoList', JSON.stringify(newItems))
  }

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1
    const myNewItem = {id, checked: false, isEditing: false, item}
    const listItems = [...items, myNewItem]
    
    setAndSaveItems(listItems)
  }

  const handleChek = (id) => {
    const listItems = items.map((item) => item.id === id ? {
        ...item, checked: !item.checked } : item)
    
    setAndSaveItems(listItems)
  }

  const editTask = (task, id) => {
    const listItems = items.map(item => item.id === id ? {
      ...item, item: task, isEditing: !item.isEditing }: item)
    
    setAndSaveItems(listItems)
  }

  const editTodo = id => {
    const listItems = items.map(item => item.id === id ? {
      ...item, isEditing: !item.isEditing }: item)

    setAndSaveItems(listItems)
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id)

    setAndSaveItems(listItems)
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    if (!newItem) 
      return
    addItem(newItem)
    setNewItem('')
  }

  return (
    <div className='App'>
      <Header title="ToDo List"/>
      <SearchItem
        search={search}
        setSearch={setSearch}/>
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}/>
      <Content
        items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
        handleChek={handleChek}
        editTask={editTask}
        editTodo={editTodo}
        handleDelete={handleDelete}/>
      <Footer length={items.length}/>
    </div>
  );
}

export default App;
