
import React, { useState, useEffect } from 'react'
import Tempo from '../Tempo'
import MainControls from '../MainControls'
import SecondaryControls from '../SecondaryControls'

const App = () => {

	const [chrono, setChrono] = useState(1500)
	const [isRunning, setIsRunning] = useState(false)

	const onAction = (action) => {

		if (action === 'start') setIsRunning((prevIsRunning) => !prevIsRunning)

		if (action === 'stop') setIsRunning((prevIsRunning) => !prevIsRunning)
		
		if (action === 'reset') setChrono(1500)
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

	return <>
		<MainControls onAction={onAction} isRunning={isRunning}/>
		<Tempo chrono={chrono} />
		<SecondaryControls onAction={onAction} isRunning={isRunning}/>
	</>
}
export default App