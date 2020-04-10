
import React, { useState, useEffect } from 'react'
import Tempo from '../Tempo'
import MainControls from '../MainControls'
import SecondaryControls from '../SecondaryControls'
// material-ui
import { AppBar, Toolbar, IconButton, Card } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import soundfile from '../../assets/alarm.mp3'

const styles = {

	container: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		minHeight: '100vh',
		backgroundColor: '#f05b56',
	},
	appBar: {
		backgroundColor: '#f05b56',
	},
	card: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		background: 'none rgba(255, 255, 255, 0.2)',
		width: '330px',
		height: '370px'
	}
}

const App = () => {

	const [chrono, setChrono] = useState(1500)
	const [isRunning, setIsRunning] = useState(false)
	const [isReset, setIsReset] = useState(false)
	const [audio] = useState(new Audio(soundfile))
	const [timeIsComplete, setTimeIsComplete] = useState(false)




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
		<AppBar position="fixed" style={styles.appBar}>
			<Toolbar>
				<IconButton color="inherit">
					<MenuIcon />
				</IconButton>
			</Toolbar>
		</AppBar>
		<div style={styles.container}>
			<Card
				style={styles.card}
			>
				<MainControls onAction={onAction} isRunning={isRunning}/>
				<Tempo chrono={chrono} />
				<SecondaryControls onAction={onAction} isRunning={isRunning}/>
			</Card>
		</div>
	</>
}
export default App