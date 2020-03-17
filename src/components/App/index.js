
import React, { useState } from 'react'
import MainControls from '../MainControls'
import Tempo from '../Tempo'
import SecondaryControls from '../SecondaryControls'

const App = () => {
	const [minuts, setMinuts] = useState('00:00')

	const selected = (item) => {
		 item === 'Start' && setMinuts('25:00')
		 item === 'Break' && setMinuts('05:00')
		 item === 'LongBreak' && setMinuts('15:00')
		 item === 'Play' && console.log('Play...')
		 item === 'Pause' && console.log('Pause...')
		 item === 'Stop' && console.log('Stop...')
		 item === 'Reset' && console.log('Reset...')
	}

	return <div className="main--app">
		<MainControls selected={selected}/>
		<Tempo minuts={minuts}/>
		<SecondaryControls selected={selected}/>
	</div>
}
export default App