import { IconBase } from '../IconBase'
import { XLSXWeights } from '../defs'
import type { Icon } from '../types'

const XLSXIcon: Icon = (props) => <IconBase {...props} weights={XLSXWeights} />

XLSXIcon.displayName = 'XLSXIcon'
export { XLSXIcon }
