
import React from 'react'
import Timer from 'react-compound-timer'
// controls
import Start from '../Start'
import Pause from '../Pause'
import Reset from '../Reset'

const Breack = ({ minuts }) => {

    return <>
        <Timer
            initialTime={minuts}
            direction='backward'
        >
            {({ start, pause, reset}) => <>
                {/* display */}
                <div className="main__control--center">
                    <h1 className="main__control--display">
                        <Timer.Minutes />
                    </h1>
                    <h1 className="main__control--display">
                        :
                    </h1>
                    <h1 className="main__control--display">
                        <Timer.Seconds />
                    </h1>
                </div>
                {/* controls */}
                <div>
                    <Start start={start}/>
                    <Pause pause={pause} />
					<Reset reset={reset} /> 
                </div>
            </>}
        </Timer>
    </>
}
export default Breack