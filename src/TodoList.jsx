import React from 'react';
import TodoListItem from './TodoListItem.jsx';
import NewTododForm from './NewTododForm.jsx';

export default function TodoList({ completedTodos, incompleteTodos }) {
    return (
        <div>
            <h1>
                My Todos
            </h1>
            <NewTododForm />
            <h2>Incomplete Todos</h2>
            {incompleteTodos.map(todo => (
                <TodoListItem key={todo.text} todo={todo} />
            ))}
            <h2>Completed Todos</h2>
            {completedTodos.map(todo => (
                <TodoListItem key={todo.text} todo={todo} />
            ))}
        </div>
    )

}