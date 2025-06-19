
// onChange = event handler used primarily with form elements
//             ex. <input>,<textarea>,<select>,<radio>
//           Triger a function every time the value of the input changes

import React, { useState } from "react";

function OnChange() {

    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(0);
    const [comment, setComment] = useState("Leave your message for delivery person.")
    const [paymentMode, setPaymentMode] = useState("Change Payment Mode");
    const [shippingStates, setShippingStates] = useState("Not Updated");


    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleQuantityChange(event) {
        setQuantity(event.target.value);
    }

    function handleCommentChange(event) {
        setComment(event.target.value);
    }

    function handlePaymentModeChange(event) {
        setPaymentMode(event.target.value);
    }

    function handleShippingStates(event) {
        setShippingStates(event.target.value);
    }

    return (<>
        <div className="OnChange-container">
            <input value={name} onChange={handleNameChange} />
            <p>Name: {name}</p>

            <input value={quantity} onChange={handleQuantityChange} type="number" />
            <p>Quentity: {quantity}</p>
            <textarea value={comment} onChange={handleCommentChange} />
            <p>Comment: {comment}</p>

            <select value={paymentMode} onChange={handlePaymentModeChange}>
                <option value="">Select Payment Mode Option</option>
                <option value="CreditCard">Credit Card</option>
                <option value="DebitCard">Debit Card</option>
                <option value="NetBanking">Net Banking</option>
                <option value="UPI">UPI</option>
                <option value="Check">Check</option>
                <option value="Cash">Cash</option>
            </select>
            <p>Payment Mode: {paymentMode}</p>

            <label>
                <input type="radio" value="Pick Up"
                    checked={shippingStates === "Pick Up"}
                    onChange={handleShippingStates} />
                Pick Up
            </label> <br />
            <label>
                <input type="radio" value="Delivered"
                    checked={shippingStates === "Delivered"}
                    onChange={handleShippingStates} />
                Delivered
            </label> <br />
            <p>Shipping States: {shippingStates}</p>

        </div>
    </>);
}
export default OnChange