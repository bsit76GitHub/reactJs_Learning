
// useEffect() = React Hooks that tells React DO SOME CODE WHEN (pick one):
//               This component re-renders
//                This component mounts
//                This state of a value

// useEffect(function,[dependencies])

// 1. useEffect(() => {})               // Runs after every re-render
// 2. useEffect(() => {},[])            // Runs only on mount
// 3. useEffect(() => {},[value])       // Runs on mount + when value changes

// Uses
// #1 Event Listeners
// #2 DOM Manipulation
// #3 Subscription
// #4 Fetching Data from an API
// #5 Clean up when a component unmounts

import React, { useState, useEffect } from "react";

function UseEffectHooks() {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    useEffect(() => {
        document.title = `Count: ${count} ${color} `;
    }, [count, color]);


    function addCount() {
        setCount(c => c + 1);
    }

    function substractCount() {
        setCount(c => c - 1);
    }

    function changeColor() {
        setColor(c => c === "green" ? "Red" : "green");
    }

    return (<>

        <h1>useEffect learning <br /> =============== <br /></h1>
        <div className="container1">
            <p style={{ color: color }}>Count : {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={substractCount} >Subtract</button>
            <button onClick={changeColor}>Change Color</button>
        </div>
    </>);
}
export default UseEffectHooks