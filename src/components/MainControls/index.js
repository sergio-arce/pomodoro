
import React from 'react'
import Button from '../Button'

const MainControls = ({ onAction }) => <div className="main-controls">

        <Button label='Pomodoro' name='pomodoro' onAction={onAction} />
        <Button label='Break' name='break' onAction={onAction} />
        <Button label='LongBreak' name='long-break' onAction={onAction} /> 
</div>

export default MainControls