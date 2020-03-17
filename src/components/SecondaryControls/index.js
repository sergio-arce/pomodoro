
import React from 'react'
import Button from '../Button'

const SecondaryControls = ({ selected }) => {
    return <>
        <Button label='Play' selected={selected} />
        <Button label='Pause' selected={selected} />
        <Button label='Stop' selected={selected} />
        <Button label='Reset' selected={selected} />
    </>
}
export default SecondaryControls