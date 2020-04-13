
import React from 'react'
import { Typography, withStyles } from '@material-ui/core'

const styles = (theme) => ({
    typography: {
        color: '#fff',
        fontSize: '6.25rem'
    }
})

const Tempo = ({ classes, chrono }) => {

    const changeToString = (num) => {

        let minutes = Math.floor(num / 60)
        let seconds = num % 60
        if (seconds < 10) seconds = '0' + seconds
        if (minutes < 10) minutes = '0' + minutes

        return `${minutes}:${seconds}`
    }

    return <>
        <Typography
            className={classes.typography}
            align='center'
        >
            {changeToString(chrono)}
        </Typography>
    </>
}
export default withStyles(styles)(Tempo)