
// React hook = Special function that allows functional components
//              to the use Rect feactures without writing class compoent (React v16.8)
//               (useState,useEffect, useCallback, and more...)

// useState() = A React hook that allows the creation of a stateful variable
//               and a setter function to update its value in the Virtual DOM.

// onchange = event handler used primarily with form elements
//             ex. <input>,<textarea>,<select>,<radio>
//           Triger a function every time the value of the input changes

import MyComponent from "./MyComponent"
import Counter from "./Counter"
import OnChange from "./OnChange"
function App() {

  return (
    <>
      <OnChange />
      <Counter />
      <MyComponent />
    </>
  )
}

export default App
