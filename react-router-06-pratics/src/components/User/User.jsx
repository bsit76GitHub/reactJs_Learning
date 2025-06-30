import React from "react";
import { useParams } from "react-router";

function User(){

 const {userid} = useParams() ;

    return (
        <div className="bg-gray-700 text-4xl text-white text-center"> User: {userid}</div>
    )
}
export default User