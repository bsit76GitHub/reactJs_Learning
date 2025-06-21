
import React, { useState } from "react";

function List() {

    const [fruit, setFruit] = useState(["Apple", "Orange", "Banana"]);

    function handleAddFruit() {

        const newFruit = document.getElementById("fruitInput").value;
        document.getElementById("fruitInput").value;

        setFruit(f => [...f, newFruit]);
    }
    function handleRemoveFruit(index) {

        setFruit(fruit.filter((_,i) => i !== index));
    }
    return (<>
        <div className="List-container">
            <h2>List of Fruit</h2>
            <ol>
                {fruit.map((fruit, index) =>
                    <li key={index} onClick={()=>handleRemoveFruit(index)}> 
                    {fruit} 
                    </li>
                )}

            </ol>
            <input type="text" id="fruitInput" placeholder="Enput fruit name" />
            <button onClick={handleAddFruit} > Add Fruit </button>
            <br />
            {/* <input type="text" id="fruitInput" placeholder="Enput fruit name" />
            <button onClick={handleRemoveFruit} > Remove Fruit </button> */}
        </div>
    </>);
}
export default List
