
import React from 'react'
import Button from '../Button'
import { withStyles } from '@material-ui/core'

const styles = (theme) => ({
	container: {
		display: 'flex',
		justifyContent: 'center',
		margin: '20px 0'
	}
})

const SecondaryControls = ({ classes, onAction, isRunning }) => <>
	<div className={classes.container}>
		<Button 
			label={!isRunning ? 'Start' : 'Pause'} 
			name='start' 
			onAction={onAction} 
		/>
		<Button
			label='Reset' 
			name='reset' 
			onAction={onAction} 
		/>
	</div>
</>

export default withStyles(styles)(SecondaryControls)