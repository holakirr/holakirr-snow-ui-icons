import { IconBase } from '../IconBase'
import { AddWeights } from '../defs'
import type { Icon } from '../types'

const AddIcon: Icon = (props) => <IconBase {...props} weights={AddWeights} />

AddIcon.displayName = 'AddIcon'
export { AddIcon }
