import React, { useEffect } from 'react'

const ChildComponent = ({returnComment}) => {
    useEffect(()=>{
        console.log('Function was called');
    }, [returnComment])
    return (
        <div>
            <h1>Child Component</h1>
            <h2>{returnComment()}</h2>
        </div>
    )
}

export default ChildComponent
