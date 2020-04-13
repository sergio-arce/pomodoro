
import { createMuiTheme } from '@material-ui/core/styles'

import { palette } from './colors'
import { typography } from './fonts'
import { overrides } from './utils'
import { flexy, gradient, convertToRGB } from './mixins'

const theme = createMuiTheme({
    spacing: value => value * 2,
    palette,
    overrides,
    typography,
    mixins: {
        flexy,
        gradient,
        convertToRGB
    }
})

export default theme
export { palette }