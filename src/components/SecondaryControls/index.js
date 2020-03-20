
import React from 'react'
import Button from '../Button'

const SecondaryControls = ({ onAction, isRunning }) => <>

        <Button label='stop' name={isRunning ? 'stop' : null} onAction={onAction} />
        <Button label='reset' name='reset'  onAction={onAction} />
</>

export default SecondaryControls