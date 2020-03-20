
import React from 'react'

const Button = ({ label, name, onAction }) => {
    return <>
        <button 
            name={name}
            onClick={() => onAction(name)}
        >
            {label}
        </button>
    </>
}
export default Button