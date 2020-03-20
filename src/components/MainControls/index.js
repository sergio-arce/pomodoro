
import React from 'react'
import Button from '../Button'

const MainControls = ({ onAction, isRunning }) => {

    return <>
       <Button label={!isRunning ? 'Start' : 'Continue'} name='start' onAction={onAction} />
    
        {/* <Button label='Break' onAction={onAction} />
        <Button label='LongBreak' onAction={onAction} /> */}
    </>
}
export default MainControls