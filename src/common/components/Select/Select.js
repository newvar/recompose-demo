import React from 'react'
import cn from 'classnames'
import Select, {
  Option,
} from 'rc-select'
import {
  compose,
  withProps,
  defaultProps,
} from 'recompose'
import Input from 'common/components/Input'
import asMounted from 'common/hocs/as-mounted'

// TODO label proxying?
export const optionsMapper = ({
  label,
  ...props
}) => (
  <Option
    label={label}
    {...props}
  >
    {label}
  </Option>
)

export const enhance = compose(
  defaultProps({
    showArrow               : false,
    combobox                : true,
    defaultActiveFirstOption: true,
    notFoundContent         : ``,
  }),
  asMounted,
  withProps(({
    className,
    dropdownClassName,
    focused,
    mounted,
    placeholder,
    options,
    children,
  }) => ({
    className: cn(
      `select ui-kit`,
      className,
    ),
    dropdownClassName: cn(
      `select-dropdown ui-kit`,
      dropdownClassName,
    ),
    getInputElement: () => (
      <Input
        focused={mounted && focused}
        placeholder={placeholder}
      />
    ),
    placeholder: undefined,
    children   : [
      ...children,
      ...(!!options && options.map(optionsMapper)),
    ],
  })),
)

export default enhance(Select)
