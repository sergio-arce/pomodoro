
import React from 'react'
import Button from '../Button'

const SecondaryControls = ({ onAction }) => <>
        <Button label='Play' onAction={onAction} />
        <Button label='Pause' onAction={onAction} />
        <Button label='Stop' onAction={onAction} />
        <Button label='Reset' onAction={onAction} />
</>

export default SecondaryControls