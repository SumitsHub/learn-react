import React, { useEffect, useLayoutEffect, useRef } from 'react'

const useLayoutEffectHook = () => {
    // useLayoutEffect(() => {
    //     effect
    //     return () => {
    //         cleanup
    //     };
    // }, [input]);
    const inputRef = useRef(null);
    
    useEffect(()=>{
        console.log("use effect");
        inputRef.current.value = "Changed";
    }, [])
    
    useLayoutEffect(()=>{
        console.log("use layout", inputRef.current.value);
    });

    return (
        <div>
            <input type="text" value="initial" ref={inputRef}/>
        </div>
    )
}

export default useLayoutEffectHook
