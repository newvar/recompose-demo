import React, { Component } from 'react'
import cn from 'classnames'

export class StatefulInput extends Component {
  static defaultProps = {
    handleChange: Function.prototype,
    onChange: Function.prototype,
  }

  inputRef = (input) => (this.input = input)

  componentDidMount () {
    if (this.props.focused) {
      this.input.focus()
    }
  }

  componentWillReceiveProps (nextProps) {
    if (!this.props.focused && nextProps.focused) {
      this.input.focus()
    }
  }

  onChange = (event, ...args) => {
    const {
      onChange,
      handleChange,
    } = this.props

    onChange(event, ...args)
    handleChange(event.target.value)
  }

  render() {
    const {
      className,
      handleChange,
      onChange,
      focused,
      ...props,
    } = this.props

    return <input
      className={cn(
        `ui-kit input`,
        className,
      )}
      ref={this.inputRef}
      onChange={this.onChange}
      {...props}
    />
  }
}

export default StatefulInput
