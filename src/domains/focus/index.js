export const SET_FOCUS_INDEX = `SET_FOCUS_INDEX`
export const INCREMENT_FOCUS_INDEX = `INCREMENT_FOCUS_INDEX`

export const setFocusIndex = (index) => ({
  type: SET_FOCUS_INDEX,
  payload: {
    index,
  },
})

export const incrementFocusIndex = () => ({
  type: INCREMENT_FOCUS_INDEX,
})

//export const reducer = ()
