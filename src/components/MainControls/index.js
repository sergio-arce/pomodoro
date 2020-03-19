
import React from 'react'

import Button from '../Button'

const MainControls = ({ onAction }) => {
    return <>
        <Button label='Start' onAction={onAction} />
        <Button label='Break' onAction={onAction} />
        <Button label='LongBreak' onAction={onAction} />
    </>
}
export default MainControls