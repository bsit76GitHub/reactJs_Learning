import { useState } from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import './App.css'

function App() {
 
  return (
    <>
     <h1 className='bg-gray-500 text-center font-bold p-2'>Learning React Redux-Toolkit</h1>
    
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
