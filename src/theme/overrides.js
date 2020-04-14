
import { convertToRGB } from './mixins'
import { palette } from './palette'

const overrides = {

    // all icons should be white
    MuiIconButton: {
        root: {
            color: 'white'
        }
    },

    // all typography should be grey
    MuiTypography: {
        root: {
            color: convertToRGB('#000000', 0.8)
        }
    },

    // all input should have the same font-size
    MuiInputBase: {
        root: {
            fontSize: '1.3rem',
            padding: '5px 15px',
            borderRadius: '4px'
        }
    },

    // all divider should have a color back
    MuiDivider: {
        root: {
            backgroundColor: palette.secondary.main
        }
    }
}

export { overrides }
