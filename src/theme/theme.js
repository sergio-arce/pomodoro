
import { createMuiTheme } from '@material-ui/core/styles'

import { palette } from './palette'
import { typography } from './typography'
import { overrides } from './overrides'
import { flexy, convertToRGB } from './mixins'

const theme = createMuiTheme({
    spacing: value => value ** 2,
    palette,
    overrides,
    typography,
    mixins: {
        flexy,
        convertToRGB
    }
})

export default theme
export { palette }