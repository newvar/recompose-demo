import cn from 'classnames'
import {
  compose,
  withProps,
} from 'recompose'
import asInput from 'common/hocs/as-input'
import withLabel from 'common/hocs/with-label'

export const enhance = compose(
  withLabel,
  withProps(({
    className,
  }) => ({
    type: `checkbox`,
    className: cn(
      `checkbox`,
      className
    )
  })),
  asInput,
)

export default enhance(`input`)
