import React from 'react'
import {
  compose,
  withStateHandlers,
} from 'recompose'
import Input, {
  StatefulInput,
} from 'common/components/Input'
import TextArea from 'common/components/TextArea'
import Checkbox from 'common/components/Checkbox'
import Button from 'common/components/Button'
import Select, {
  Option,
} from 'common/components/Select'

export const SwitchFocus = ({
  focusIndex,
  increaseFocusIndex,
  setFocusIndex,
}) => (
  <div className="switch-focus">

    <Input
      focused={focusIndex === 0}
      placeholder="input"
      onFocus={() => setFocusIndex(0)}
    />

    <TextArea
      focused={focusIndex === 1}
      placeholder="textarea"
      onFocus={() => setFocusIndex(1)}
    />

    <StatefulInput
      focused={focusIndex === 2}
      placeholder="stateful input"
      onFocus={() => setFocusIndex(2)}
    />

    <Select
      focused={focusIndex === 3}
      placeholder="select"
      onFocus={() => setFocusIndex(3)}
    >
      <Option key={1}>first</Option>
      <Option key={2}>second</Option>
    </Select>

    <Checkbox
      focused={focusIndex === 4}
      label="checkbox"
      onFocus={() => setFocusIndex(4)}
    />

    <Button onClick={increaseFocusIndex} />

  </div>
)

export const enhance = compose(
  withStateHandlers(
    ({ initialFocusIndex = 0 }) => ({ focusIndex: initialFocusIndex }),
    {
      increaseFocusIndex: ({ focusIndex }) => () => ({
        focusIndex: (focusIndex + 1) % 5,
      }),
      setFocusIndex: () => (focusIndex) => ({
        focusIndex,
      })
    }
  ),
)

export default enhance(SwitchFocus)
