import React from 'react'

export default (
  WrappedComponent,
) => ({
  label,
  ...props,
}) => (
  <label>
    <WrappedComponent {...props} />
    {label}
  </label>
)
