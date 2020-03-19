
import React, { useState } from 'react'

import MainControls from '../MainControls'



const Tempo = () => {

    const [time, setTime] = useState(1500)

	const onAction = (action) => {
		//  if (action === 'start')
		
    }
    
    const convertToString = (num) => {
        return num.toString()
    }

    return <>
        
        <h2>{convertToString(time)}</h2>
    </>
}
export default Tempo

// listo
// hecho
// finalizado
// creado - 

// commits
// git commit -m "button start created"
// git commit -m ""

