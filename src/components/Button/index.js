
import React from 'react'

const Button = ({ label, selected }) => {
    return <>
        <button 
            onClick={() => selected(label)}
        >
            {label}
        </button>
    </>
}
export default Button