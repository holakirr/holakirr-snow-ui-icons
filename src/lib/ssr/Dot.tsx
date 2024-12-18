import { IconBase } from '../IconBase'
import { DotWeights } from '../defs'
import type { Icon } from '../types'

const DotIcon: Icon = (props) => <IconBase {...props} weights={DotWeights} />

DotIcon.displayName = 'DotIcon'
export { DotIcon }
