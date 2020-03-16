
import React from 'react'
import MainControls from '../MainControls'
import Tempo from '../Tempo'
import SecondaryControls from '../SecondaryControls'

const App = () => {
	return <div className="main--app">
		<MainControls />
		<Tempo />
		<SecondaryControls />
	</div>
}
export default App