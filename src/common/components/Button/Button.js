import React from 'react'
import cn from 'classnames'

const Button = ({
  className,
  type = `primary`,
  children,
  onClick = Function.prototype,
  ...props
}) => (
  <button
    {...props}
    className={cn(
      `button`,
      type,
      className,
    )}
    onClick={onClick}
  >
    {children}
  </button>
)

export default Button
