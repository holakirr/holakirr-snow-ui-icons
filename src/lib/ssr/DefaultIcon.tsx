import { CustomIconBase } from '../IconBase'
import { DefaultIconWeights } from '../defs'
import type { CustomIcon } from '../types'

const DefaultIcon: CustomIcon = (props) => (
  <CustomIconBase {...props} weights={DefaultIconWeights} />
)

DefaultIcon.displayName = 'DefaultIcon'
export { DefaultIcon }
