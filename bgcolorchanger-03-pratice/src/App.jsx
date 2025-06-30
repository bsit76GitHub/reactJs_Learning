import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-amber-100 px-3 py-2 rounded-3xl' >
            <button className='outline-none p-1 text-white font-bold rounded-xl w-15 ' onClick={() => setColor("black")} style={{ backgroundColor: "black" }}>black</button>
            <button className='outline-none p-1 text-white font-bold rounded-xl w-15 ' onClick={() => setColor("red")} style={{ backgroundColor: "red" }}>red</button>
            <button className='outline-none p-1 text-white font-bold rounded-xl w-15 ' onClick={() => setColor("orange")} style={{ backgroundColor: "orange" }}>orange</button>
            <button className='outline-none p-1 text-white font-bold rounded-xl w-15 ' onClick={() => setColor("pink")} style={{ backgroundColor: "pink" }}>pink</button>
            <button className='outline-none p-1 text-white font-bold rounded-xl w-15 ' onClick={() => setColor("blue")} style={{ backgroundColor: "blue" }}>blue</button>
            <button className='outline-none p-1 text-white font-bold rounded-xl w-15 ' onClick={() => setColor("gray")} style={{ backgroundColor: "gray" }}>gray</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
