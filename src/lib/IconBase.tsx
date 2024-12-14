import type { BaseIcon, IconBaseProps } from './types'

const role = 'img'

export const CustomIconBase: BaseIcon = ({
  alt,
  color = 'currentColor',
  size,
  weight = 'regular',
  weights,
  mirrored,
  className,
  ref,
  ...restProps
}: IconBaseProps) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill={color}
    viewBox="0 0 32 32"
    transform={mirrored ? 'scale(-1, 1)' : undefined}
    style={{ transition: 'all .15s' }}
    className={className}
    role={role}
    {...restProps}
  >
    <title>{alt}</title>
    {weights.get(weight) || weights.get('regular')}
  </svg>
)
