import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

function Todos() {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()

  return (
    <>
      <div className="text-2xl font-semibold text-center mb-4 text-white-800">
        Todo List
      </div>
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex items-center justify-between bg-gray-100 px-4 py-2 mb-2 rounded-lg shadow-sm hover:bg-gray-200 transition"
        >
          <span className="text-gray-900">{todo.text}</span>
          <button
            onClick={() => dispatch(removeTodo(todo.id))}
            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm font-medium transition"
          >
            ✕
          </button>
        </li>
      ))}
    </>
  )
}

export default Todos
