
import React from 'react'
import { Button as ButtonUi, withStyles } from '@material-ui/core'

const styles = (theme) => ({
    button: {
        color: 'white',
        margin: '0 2.5px',
        width: '6.4rem',
        border: '1px solid  rgba(255, 255, 255, 0.3)',
        background: 'none rgba(255, 255, 255, 0.2)',
    }
})

const Button = ({ classes, label, name, onAction }) => <>
    <ButtonUi
        className={classes.button}
        name={name}
        onClick={() => onAction(name)}
    >
        {label}
    </ButtonUi>
</>
export default withStyles(styles)(Button)