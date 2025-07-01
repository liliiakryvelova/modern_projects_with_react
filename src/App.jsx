import React from 'react'
import './App.css'
import TodoList from  './TodoList.jsx'
import { useState } from 'react'

function App() {

  const [completedTodos, setCompletedTodos ] = useState([
    { text: 'Take out the garbage', isCompleted: true},
    { text: 'Make dinner', isCompleted: true},
  ])
  const [incompleteTodo, setIncompleteTodo ] = useState([
    { text: 'Paint the house', isCompleted: false}
  ])

  return (
    <>
      <TodoList
        completedTodos={completedTodos}
        incompleteTodos={incompleteTodo}
      />
    </>
  )
}

export default App
