
import React from 'react'
import { Button as ButtonUi } from '@material-ui/core'

const styles = {
    button: {
        color: 'white',
        width: '6.85rem',
        margin: '20px 0',
    }
}

const Button = ({ label, name, onAction }) => {
    return <>
        <ButtonUi
            style={styles.button}
            name={name}
            onClick={() => onAction(name)}
        >
            {label}
        </ButtonUi>
    </>
}
export default Button