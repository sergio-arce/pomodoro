
import React from 'react'

const Button = ({ label, onAction }) => {
    return <>
        <button 
            onClick={() => onAction('start')}
        >
            {label}
        </button>
    </>
}
export default Button