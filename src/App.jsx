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

  const markTodoAsCompleted = (text) => {
    setIncompleteTodo(incompleteTodo.filter(t => t.text !== text))
    setCompletedTodos([...completedTodos, incompleteTodo.find(t => t.text === text)]);

  }

  const deleteTodo = (text) => {
    setCompletedTodos(completedTodos.filter(t => t.text !== text))

  }

  return (
    <>
      <TodoList
        completedTodos={completedTodos}
        incompleteTodos={incompleteTodo}
        onCompletedlicked={markTodoAsCompleted}
        onDeleteClicked={deleteTodo}
      />
    </>
  )
}

export default App
