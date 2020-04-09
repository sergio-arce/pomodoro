
import React from 'react'

const Button = ({ label, name, onAction }) => {
    return <>
        <button 
            className="main-button"
            name={name}
            onClick={() => onAction(name)}
        >
            {label}
        </button>
    </>
}
export default Button