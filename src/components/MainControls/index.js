
import React from 'react'
import Button from '../Button'

const MainControls = ({ selected }) => {
    return <>
        <Button label='Start' selected={selected} />
        <Button label='Break' selected={selected} />
        <Button label='LongBreak' selected={selected} />
    </>
}
export default MainControls