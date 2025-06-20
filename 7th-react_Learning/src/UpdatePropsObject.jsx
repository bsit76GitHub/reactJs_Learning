
import React, { useState } from "react";

function UpdatePropsObject() {
    const [car, setCar] = useState({ company: "Tata", model: "Safari", year: 2025 });

    function handleCompanyChange(event) {
        // setCar({ ...car, company: event.target.value });

        setCar(c => ( { ...c, company: event.target.value }));
    }
    function handleModelChange(event) {
        setCar(c => ({ ...c, model: event.target.value }));
    }
    function handleYearChange(event) {
        setCar(c => ({ ...c, year: event.target.value }));
    }
    return (<>
        <div className="UpdatePropsObject-container">
            <p>Your Favourite Car is : {car.company} {car.model} {car.year} </p>

            <input type="text" value={car.company} onChange={handleCompanyChange} /><br />
            <input type="text" value={car.model} onChange={handleModelChange} /><br />
            <input type="number" value={car.year} onChange={handleYearChange} /><br />
        </div>
    </>);
}
export default UpdatePropsObject