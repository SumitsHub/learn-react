import React, { useCallback, useState } from 'react'
import ChildComponent from './ChildComponent';

const useCallbackHook = () => {
    const [toggle, setToggle] = useState(false);
    const [data, setData] = useState("Some text")

    const returnComment = useCallback(() =>{
        return data;
    }, [data])

    return (
        <div>
            <h1>useCallback hook</h1>

            <ChildComponent returnComment={returnComment} />

            <button onClick={()=>{
                setToggle(!toggle);
            }}>Toggle</button>

            {toggle && <h2>toggled</h2>}
        </div>
    )
}

export default useCallbackHook
