
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

const MainControls = ({ classes, onAction }) => <>
	<div className={classes.container}>
		<Button label='Pomodoro' name='pomodoro' onAction={onAction} />
		<Button label='Break' name='break' onAction={onAction} />
		<Button label='LongBreak' name='long-break' onAction={onAction} />
	</div>
</>

export default withStyles(styles)(MainControls)