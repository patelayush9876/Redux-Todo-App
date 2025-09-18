import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

function AddTodo() {
  const [input, setInput] = useState("")
  const [todos, setTodos] = useState([])
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!input.trim()) return
    setTodos([...todos, input])
    setInput("") // clear input
  }
  const addTodoHandler = (e) => {
    e.preventDefault()
    dispatch(addTodo(input))
    setInput('')
  }

  return (
    <div className="mt-12">
      <form onSubmit={addTodoHandler} className="space-x-3">
        <input
          type="text"
          className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          placeholder="Enter a todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-1 rounded hover:bg-indigo-700 transition-colors duration-200"
        >
          Add
        </button>
      </form>

      <ul className="mt-6 text-gray-100">
        {todos.map((todo, idx) => (
          <li key={idx} className="py-1">
            • {todo}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AddTodo