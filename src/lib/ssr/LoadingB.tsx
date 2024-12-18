import { IconBase } from '../IconBase'
import { LoadingBWeights } from '../defs'
import type { Icon } from '../types'

const LoadingBIcon: Icon = (props) => (
  <IconBase {...props} viewBox="0 0 24 24" weights={LoadingBWeights} />
)

LoadingBIcon.displayName = 'LoadingBIcon'
export { LoadingBIcon }
