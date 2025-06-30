import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {

  let myObj1 = {
    userName: "Brajendra",
    course: "B.Sc.IT"
  }
  let myObj2 = {
    userName: "Shidharth",
    course: "Information Technology"
  }

  let myArr = [1, 2, 3, 4, 5]

  return (
    <>
      <h1 className='bg-green-500 text-red-500 rounded-xl p-3 mb-5'>Tailwind-Props</h1>
      <Card someObj={myObj1} />
      <Card someObj={myObj2} />
      <Card someObj="" />
    </>
  )
}

export default App
