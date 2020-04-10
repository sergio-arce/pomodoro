
import React from 'react'
import Button from '../Button'

const styles = {
	container: {
		textAlign: 'center',
	}
}

const SecondaryControls = ({ onAction, isRunning }) => <>
	<div style={styles.container}>
		<Button label={!isRunning ? 'Start' : 'Pause'} name='start' onAction={onAction} />
		<Button label='Reset' name='reset' onAction={onAction} />
	</div>
</>

export default SecondaryControls