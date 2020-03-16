
import React, { useState } from 'react'

const App = () => {
	
	const [minuts, setMinuts] = useState('25:00')

	return <div className="main--app">
		<div>
			<botton>Start</botton>
			<botton>Breack</botton>
			<botton>Long Breack</botton>
		</div>

		<h2>{minuts}</h2>

		<div>
			<botton>Play</botton>
			<botton>Pause</botton>
			<botton>Stop</botton>
			<botton>Reset</botton>
		</div>
	</div>

}
export default App
