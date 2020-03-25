
import React from 'react'
import Button from '../Button'

const MainControls = ({ onAction }) => <>

        <Button label='Pomodoro' name='pomodoro' onAction={onAction} />
        <Button label='Break' name='break' onAction={onAction} />
        <Button label='LongBreak' name='long-break' onAction={onAction} /> 
</>

export default MainControls