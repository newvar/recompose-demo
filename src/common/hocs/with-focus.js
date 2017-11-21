import React from 'react'

// TODO generalize
export const withFocus = (
  WrappedComponent
) => (
  class Focused extends React.Component {
    inputRef = (input) => (this.input = input)
    focusMeOnUpdate = false
    componentDidMount() {
      this.props.focused
        && this.input.focus()
    }
    componentWillReceiveProps(newProps) {
      this.focusMeOnUpdate = !this.props.focused && newProps.focused
    }
    componentDidUpdate() {
      if (this.focusMeOnUpdate) {
        this.input.focus()
      }
    }
    render() {
      const {
        focused,
        ...props,
      } = this.props

      return <WrappedComponent
        inputRef={this.inputRef}
        {...props}
      />
    }
  }
)

export default withFocus
