
import React, { useState } from 'react'
// import './style.css'
// timing
import InitialPomodoro from '../InitialPomodoro'
import Pomodoro from '../Pomodoro'
import Breack from '../Breack'
import LongBreack from '../LongBreack'

{/* 1500000 = 25 minuts */}
{/* 300000 = 5 minuts */}
{/* 900000 = 15 minuts*/}

const App = () => {
	const [minuts, setMinuts] = useState(1500000)
	const [showInitialPomodoro, setShowInitialPomodoro] = useState(true)
	const [showPomodoro, setShowPomodoro] = useState(false)
	const [showBreack, setShowBreak] = useState(false)
	const [showLongBreack, setShowLongBreack] = useState(false)

	const onShowPomodoro = () => {
		setMinuts(1500000)
		setShowPomodoro(true)
		setShowInitialPomodoro(false)
		setShowBreak(false)
		setShowLongBreack(false)
	}

	const onShowBreack = () => {
		setMinuts(300000)
		setShowPomodoro(false)
		setShowInitialPomodoro(false)
		setShowBreak(true)
		setShowLongBreack(false)
	}

	const onShowLongbreack = () => {
		setMinuts(900000)
		setShowPomodoro(false)
		setShowInitialPomodoro(false)
		setShowBreak(false)
		setShowLongBreack(true)
	}

	const onStop = () => {
		setShowPomodoro(false)
		setMinuts(1500000)
		setShowInitialPomodoro(true)
		setShowBreak(false)
		setShowLongBreack(false)
	}

	return <div className="main--app">

		<div>
			<h1>Pomodoro</h1>

			{/* timing */}
			<button
				onClick={() => onShowPomodoro()}
			>
				Pomodoro
			</button>
			<button
				onClick={() => onShowBreack()}
			>
				Breack
			</button>
			<button
				onClick={() => onShowLongbreack()}
			>
				Long breack
			</button>
			
			{/* display */}
			{showInitialPomodoro && <InitialPomodoro minuts={minuts}/>}
			{showPomodoro && <Pomodoro minuts={minuts}/>}
			{showBreack && <Breack minuts={minuts} />}
			{showLongBreack && <LongBreack minuts={minuts} />}
			<button
				onClick={() => onStop()}
			>
				Stop
			</button>
		</div>
	</div>
}
export default App
