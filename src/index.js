
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { ThemeProvider } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'

import theme from './theme'

if (process.env.NODE_ENV === 'development') console.log('@mui-theme', theme)

ReactDOM.render(
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <App />
            </ThemeProvider>
                , document.getElementById('root'))

