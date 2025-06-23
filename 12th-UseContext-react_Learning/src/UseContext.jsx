
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


import React from "react";

function UseContext(){
    return (<> 
    <div className="usecontext-container">
        <h1>UseContext</h1>
        
    </div>
        
        </>);
}
export default UseContext