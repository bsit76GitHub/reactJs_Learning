
import React, { useState } from "react";

function MyComponent() {

    const [name, setName] = useState("Guest");
    const [count, setCount] = useState(0);
    const [isLoged, setState] = useState(false);


    const updateName = () => {
        setName("Pankaj");
    }

    const incrementCount = () => {
        setCount(count + 1);
    }

    const changeState = () => {
        setState(!isLoged);
    }

    return (
        <>
            <div className="component-container">
                <p>Name: {name}</p>
                <button onClick={updateName}>Set Name</button>

                <p>No of Click: {count}</p>
                <button onClick={incrementCount}>Click</button>

                <p>Login State: {isLoged ? "Yes" : "No"}</p>
                <button onClick={changeState}>Change Loged in State</button>

            </div>
        </>
    )

}
export default MyComponent