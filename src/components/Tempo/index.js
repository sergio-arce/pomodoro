
import React from 'react'
import { Typography } from '@material-ui/core'

const styles = {
    typography: {
        color: '#fff',
        fontSize: '6.25rem'
    }
}

const Tempo = ({ chrono }) => {

    const changeToString = (num) => {

        let minutes = Math.floor(num / 60)
        let seconds = num % 60
        if (seconds < 10) seconds = '0' + seconds
        if (minutes < 10) minutes = '0' + minutes

        return `${minutes}:${seconds}`
    }

    return <>
        <Typography
            style={styles.typography}
            align='center'
        >
            {changeToString(chrono)}
        </Typography>
    </>
}
export default Tempo