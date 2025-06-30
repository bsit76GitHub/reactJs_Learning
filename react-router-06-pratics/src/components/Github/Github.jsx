
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";

function Github() {
    // Optimize method
    const data = useLoaderData()
    
    // const [data, setDate] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/bsit76GitHub')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
            
    //         setDate(data)
    //     })
    // },[])

    return (
        <div className="bg-gray-500 m-5">
            <h1 className="bg-gray-700 text-center text-white text-5xl p-4">GitHub</h1>
            <p className="text-center">Name: {data.name}</p>
            <p className="text-center">User Name: {data.login}</p>
            <p className="text-center">Repositories: {data.public_repos}</p>
            <p className="text-center">Following: {data.following}</p>
            <p className="text-center">Followers: {data.followers}</p>
            <img src={data.avatar_url} alt="Git Profile Picture" width={200} className="p-3"/>
        </div>
    )
}
export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/bsit76GitHub')
    return response.json()
}