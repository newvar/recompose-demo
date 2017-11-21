import {
  compose,
  lifecycle,
  withState,
} from 'recompose'

export default compose(
  withState(
    `mounted`,
    `setMounted`,
    false,
  ),
  lifecycle({
    componentDidMount() {
      this.props.setMounted(true)
    },
    componentWillUnmount() {
      this.props.setMounted(false)
    },
  }),
)
