import React from 'react';

const Todo = ({task,toggleComplete,deleteTodo,editTodo}) => {
  return (
    <div  className='Todo'>
      <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? "completed":""}`} >{task.task}</p>
      <div>
      <i class="ri-edit-line" onClick={() => editTodo(task.id)} ></i>
      <i class="ri-delete-bin-line" onClick={() => deleteTodo(task.id)}></i>
      </div>
    </div>
  )
}

export default Todo
