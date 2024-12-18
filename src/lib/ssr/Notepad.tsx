import { IconBase } from '../IconBase'
import { NotepadWeights } from '../defs'
import type { Icon } from '../types'

const NotepadIcon: Icon = (props) => (
  <IconBase {...props} weights={NotepadWeights} />
)

NotepadIcon.displayName = 'NotepadIcon'
export { NotepadIcon }
