
import React from 'react'

const Tempo = ({ chrono }) => {

    const changeToString = (num) => {

        let minutes = Math.floor(num / 60)
        let seconds = num % 60

        if (seconds < 10) seconds = '0' + seconds

        if (minutes < 10) minutes = '0' + minutes
         
        return `${minutes}:${seconds}`
    }
    
    return <h2>{changeToString(chrono)}</h2>
    
}
export default Tempo

// listo
// hecho
// finalizado
// creado - 

// commits
// git commit -m "button start created"
// git commit -m ""

