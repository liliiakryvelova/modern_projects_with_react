import React from 'react'

export default function TododListItem({ todo, onComlpetedClicked, onDeletedClicked }) {
  return (
    <div>
        <h3>
            {todo.text}
        </h3>
        {todo.isCompleted && <p>Complete!</p>}
        {todo.isCompleted ? <button 
            onClick={onDeletedClicked(todo.text)}>Delete Item</button> :
            <button onClick={onComlpetedClicked(todo.text)}>Mark as Completed</button>
        }
    </div>
  )
}
