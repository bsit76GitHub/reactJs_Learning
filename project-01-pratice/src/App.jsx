
import './App.css'
import { useState } from 'react'

function App() {

  let [count1, setCount1] = useState(0);
  let [count2, setCount2] = useState(0);

  function increaseValue1() {
    setCount1(count1 + 1);
  }
  function decreaseValue1() {
    setCount1(count1 - 1);
  }

  function increaseValue2() {
    setCount2((count2 < 20) ? count2 + 1 : `${count2} Upper Limit Reacted`);
  }
  function decreaseValue2() {
    setCount2((count2 > 0) ? count2 - 1 : `${count2} Loewr Limit reacted`
  );
  }

  return (
    <>
      <h1>project-01-pratice || Brajendra</h1>

      <div className="box1">
        <h5>Counter value : {count1}</h5>
        <button onClick={increaseValue1}>Increase</button>
        <button onClick={decreaseValue1}>Decrease</button>
      </div>

      <div className="box2">

        <h5>Counter value : {count2}</h5>
        <button onClick={increaseValue2}>Increase</button>
        <button onClick={decreaseValue2}>Decrease</button>
      </div>
    </>
  )
}

export default App
