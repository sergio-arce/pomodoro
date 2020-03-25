
import React from 'react'
import Button from '../Button'

const SecondaryControls = ({ onAction, isRunning }) => <>

        <Button label={!isRunning ? 'Start' : 'Continue'} name='start' onAction={onAction} />
        <Button label='Stop' name={isRunning ? 'stop' : null} onAction={onAction} />
        <Button label='Reset' name='reset'  onAction={onAction} />
</>

export default SecondaryControls