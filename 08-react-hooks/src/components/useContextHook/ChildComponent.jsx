import React, { useContext, useEffect } from 'react'
import { AppContext } from './useContextHook'

const ChildComponent = () => {
    const {userName, setUserName} = useContext(AppContext);
    useEffect(()=>{
        setUserName("Yashraj");
    }, [])
    return (
        <div>
            {userName}
        </div>
    )
}

export default ChildComponent
