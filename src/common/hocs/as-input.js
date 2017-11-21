import React from 'react'
import cn from 'classnames'
import {
  defaultProps,
  withHandlers,
} from 'recompose'
import precompose from 'common/tools/hocs/precompose'
import withFocus from 'common/hocs/with-focus'

export const asInputLayout = (
  WrappedComponent,
) => ({
  className,
  handleChange,
  autoFocus,
  inputRef,
  ...props
}) => (
  <WrappedComponent
    className={cn(
      `ui-kit input`,
      className,
    )}
    ref={inputRef}
    autoFocus={autoFocus}
    {...props}
  />
)

export const enhanceHoc = precompose(
  defaultProps({
    handleChange: Function.prototype,
    onChange: Function.prototype,
  }),
  withHandlers({
    onChange: ({
      handleChange,
      onChange,
    }) =>
      (event, ...args) => {
        console.log(event.target.value)
        onChange(event, ...args)
        handleChange(event.target.value)
      },
  }),
  withFocus,
)

export const asInput = enhanceHoc(asInputLayout)

export default asInput
