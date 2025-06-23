
// usecontext() = react hook that allows you to share values
//                between multiple levels of components
//                without passing props through each level


//PROVIDER COMPONENT
// 1. import {createContext} from 'react';
// 2. export const MyContext = createContext();
// 3. <MyContext.Provider value = {calue}>
//     <child />

//CONSUMER COMPONENT
// 1. import React,{useContext} from 'react';
//    import {MyContext} from './componentA';
// 2. const value = useContext(MyContext);


import React, { useState, useContext, createContext } from "react";
import ComponentB from "./ComponentB";

export const UserContext = createContext();

function ComponentA() {

    const [user, setUser] = useState("Brajendra Sharma");

    return (<>
        <div className="component-A">
            <h1>ComponentA</h1>
            <h2>{`Hello ${user}`}</h2>
            <UserContext.Provider value={user}>
                <ComponentB user={user} />
            </UserContext.Provider>
        </div>
    </>);
}
export default ComponentA