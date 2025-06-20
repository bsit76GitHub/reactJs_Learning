
// updater function = A Function passed as an argument to setState() ussually
//                    ex. setYear(arrow function)
//                    Allow for safe updates based on the previous state
//                    Used with multiple state updates and asynchronous functions
//                    Good pratice to use updater functions



import React, { useState } from 'react'

function Counter() {

    const [count, setCount] = useState(0);

    const increment = () => {
        // =========================================================
        // //Uses the CURRENT state to calculate the NEXT state.
        // // set function do not trigger an update.
        // // NEXT state becomes the CURRENT state after an update.

        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);

        // //it increse only 1 times
        // //=======================================================

        // Takes the PENDING state to calculate NEXT stste.
        // React puts your updater function in a queue (waiting in line)
        // During the next render, it will call them in the same order.

        setCount(count => count + 1);
        setCount(count => count + 1);
        setCount(count => count + 1);

        // // Acording to react doocument
        // // By convention,it's common to name the pending state argument for the first letter of the state variable name,
        // // like c for count. However, you may also call it like preCount or something else that you find clearer.

        // //----------------------------
        // setCount(preCount => preCount + 1);
        // setCount(preCount => preCount + 1);
        // setCount(preCount => preCount + 1);
        // //------------------------------
        // setCount(c => c + 1);
        // setCount(c => c + 1);
        // setCount(c => c + 1);


    }
    const decrement = () => {

        setCount(preCount => preCount - 1);
        setCount(preCount => preCount - 1);
        setCount(preCount => preCount - 1);

    }
    const reset = () => {
        setCount(0);
    }
    return (<>
        <div className="counter-container">
            <p className="counter-display">{count}</p>
            <button className="counter-button" onClick={increment}>Increment</button>
            <button className="counter-button" onClick={decrement}>Decrement</button>
            <button className="counter-button" onClick={reset}>Reset</button>
        </div>
    </>)
}
export default Counter