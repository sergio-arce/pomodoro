
import React, { useState, useEffect } from 'react'
import Tempo from '../Tempo'
import MainControls from '../MainControls'
import SecondaryControls from '../SecondaryControls'


const styles = {

	container: {
		background: 'red'
	}
}

const App = () => {

	const [chrono, setChrono] = useState(1500)
	const [isRunning, setIsRunning] = useState(false)
	const [isReset, setIsReset] = useState(false)

	const onAction = (action) => {

		if (action === 'start') setIsRunning((prevIsRunning) => !prevIsRunning)

		// if (action === 'stop') setIsRunning((prevIsRunning) => !prevIsRunning)

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
				if (chrono === 0) clearInterval(interval)
			}
			return () => clearInterval(interval)
		}, [isRunning, chrono])

	return <div style={styles.container}>
		<MainControls onAction={onAction} isRunning={isRunning}/>
		<Tempo chrono={chrono} />
		<SecondaryControls onAction={onAction} isRunning={isRunning}/>
	</div>
}
export default App