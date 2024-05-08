import React, { useEffect, useState } from 'react'
import axios from 'axios';
const useEffectHook = () => {
    const [data, setData] = useState("");

    useEffect(async ()=>{
        const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
        console.log(data);
        setData(data);
    }, []); // dependency array

    return (
        <div>
            <h1>{data.title}</h1>
        </div>
    )
}

export default useEffectHook