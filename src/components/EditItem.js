import React, {useState} from 'react'

export const EditItem = ({editTask, task}) => {
  const [value, setValue] = useState(task.item)
  const handleSubmit = e =>{
    e.preventDefault();
    editTask(value, task.id)
    setValue("")
  }
  
  return (
    <form className='editForm' onSubmit={handleSubmit}>
      <input
        id="edit" 
        type="text"
        value={value} 
        placeholder='Update task'
        onChange={(e) => setValue(e.target.value)}/>
      <button 
        type='submit'>
          Update
      </button>
    </form>
  )
}

export default EditItem