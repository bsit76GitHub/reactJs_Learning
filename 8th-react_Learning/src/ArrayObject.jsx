
import React, { useState } from "react";

function ArrayObject() {
    const [car, setCar] = useState([]);
    const [carCompany, setCarCompany] = useState("");
    const [carModel, setCarModel] = useState("");
    const [carYear, setCarYear] = useState(new Date().getFullYear());

    function handleAddCar() {
        const newCar = {
            company: carCompany,
            model: carModel,
            year: carYear
        };
        setCar(c => [...c, newCar]);

        setCarCompany("");
        setCarModel("");
        setCarYear(new Date().getFullYear());

    }

    function handleRemoveCar(index) {
        setCar(c => c.filter((_,i) => i !== i));
    }

    function handleCarCompany(event) {
        setCarCompany(event.target.value);
    }
    function handleCarModel(event) {
        setCarModel(event.target.value);
    }
    function handleCarYear(event) {
        setCarYear(event.target.value);
    }

    return (<>
        <div className="ArrayObject-container">
            <h2>List of Car Object</h2>
 
            <ol>
                {car.map((car, index) =>
                    <li key={index} onClick={() => handleRemoveCar(index)}>
                        {car.company} {car.model} {car.year}
                    </li>)}
            </ol>

            <input type="text" value={carCompany} onChange={handleCarCompany}
                placeholder="Enter Car Company Name" /> <br />
            <input type="text" value={carModel} onChange={handleCarModel}
                placeholder="Enter Model name of Cars" /> <br />
            <input type="number" value={carYear} onChange={handleCarYear} /> <br />

            <button onClick={handleAddCar}>Add Car</button>
            <p>To remove car from list just click on that option.</p>

        </div>
    </>);
}
export default ArrayObject
