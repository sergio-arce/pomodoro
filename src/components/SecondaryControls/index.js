
import React from 'react'
import Button from '../Button'

const SecondaryControls = ({ onAction, isRunning }) => <div className="secondary-controls">
        <Button label={!isRunning ? 'Start' : 'Pause'} name='start' onAction={onAction} />
        <Button label='Reset' name='reset'  onAction={onAction} />
</div>

export default SecondaryControls