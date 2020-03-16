
import React from 'react'

const Button = ({ name }) => {
    return <>
        <button onClick={() => console.log('button')}>{name}</button>
    </>
}
export default Button