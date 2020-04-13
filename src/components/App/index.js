
import React, { useState, useEffect } from 'react'
import Tempo from '../Tempo'
import MainControls from '../MainControls'
import SecondaryControls from '../SecondaryControls'
// material-ui
import { withStyles, AppBar, Toolbar, IconButton, Card, Drawer, Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
// import MenuIcon from '@material-ui/icons/MenuIcon'
import MenuSharpIcon from '@material-ui/icons/MenuSharp'
import ChevronLeftSharpIcon from '@material-ui/icons/ChevronLeftSharp'
import Brightness4Icon from '@material-ui/icons/Brightness4';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import soundfile from '../../assets/alarm.mp3'

const styles = (theme) => ({
	container: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		minHeight: '100vh',
		backgroundColor: 'grey',
	},
	appBar: {
		backgroundColor: '#676972',
	},
	card: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		background: 'none rgba(255, 255, 255, 0.2)',
		width: '330px',
		height: '370px'
	},
	pomodoro: {
		backgroundColor: '#f05b56'
	},
	drawerHeader: {
		display: 'flex',
		alignItems: 'center',
		width: '200px',
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
		justifyContent: 'flex-end',
	}
})

const App = ({ classes }) => {

	const [chrono, setChrono] = useState(1500)
	const [isRunning, setIsRunning] = useState(false)
	const [isReset, setIsReset] = useState(false)
	const [audio] = useState(new Audio(soundfile))
	const [timeIsComplete, setTimeIsComplete] = useState(false)
	const [open, setOpen] = useState(false)

	const onAction = (action) => {

		if (action === 'start') setIsRunning((prevIsRunning) => !prevIsRunning)

		if (action === 'pomodoro') {

			setChrono(1500)
			setIsRunning(true)
			setIsReset(action)
		}

		if (action === 'break') {
			setChrono(300)
			setIsRunning(true)
			setIsReset(action)
		}

		if (action === 'long-break') {
			setChrono(900)
			setIsRunning(true)
			setIsReset(action)
		}
		
		if (action === 'reset') {
			if(!isReset) setChrono(1500)
			if (isReset === 'pomodoro') setChrono(1500)
			if (isReset === 'break') setChrono(300)
			if (isReset === 'long-break') setChrono(900)
		}
	}

	useEffect(
		() => {
			let interval
			if (isRunning) {
				interval = setInterval(() => setChrono(prevChrono => prevChrono - 1), 1000)
				if (chrono === 0) {
					setTimeIsComplete(true)
					clearInterval(interval)
				}
			}
			return () => clearInterval(interval)
		}, [isRunning, chrono])

	if (timeIsComplete) audio.play()

	return <>
		<AppBar position="fixed" className={classes.appBar}>
			<Toolbar>
				<IconButton 
					color="inherit"
					onClick={() => setOpen(!open)}
				>
					<MenuSharpIcon />
				</IconButton>
				
			</Toolbar>
		</AppBar>

		<Drawer
			open={open}
			anchor='left'
		>
			<div className={classes.drawerHeader}>
				<IconButton onClick={() => setOpen(!open)}>
					{open && <ChevronLeftSharpIcon style={{color: 'black'}}/> }
				</IconButton>
			</div>
			<Divider />
			<List>
				<ListItem button>
					<ListItemText primary='Dark Mode'/>
					<ListItemIcon><Brightness4Icon /></ListItemIcon>
				</ListItem>
				<ListItem button>
					<ListItemText primary='Sound'/>
					<ListItemIcon><VolumeDownIcon /></ListItemIcon>
				</ListItem>
			</List>
			<Divider variant='middle' light={true}/>
		</Drawer>
		<div className={classes.container}>
			<Card className={classes.card}>
				<MainControls onAction={onAction} isRunning={isRunning}/>
				<Tempo chrono={chrono} />
				<SecondaryControls onAction={onAction} isRunning={isRunning}/>
			</Card>
		</div>
	</>
}
export default withStyles(styles)(App)