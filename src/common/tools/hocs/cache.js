export const createWeakMap = () => new WeakMap()
export const getOrAdd = (
  map,
) => (
  value = Function.prototype,
) => (
  key
) =>
  map.get(key)
    || (
      map.set(
        key,
        value(),
      )
        && map.get(key)
    )

export const enhancedComponentsMap = new WeakMap()
export const enhancedStringComponentsMap = new Map()

const getEnhancedMap = getOrAdd(
  enhancedComponentsMap
)(
  createWeakMap
)
const getStringEnhancedMap = getOrAdd(
  enhancedStringComponentsMap
)(
  createWeakMap
)

export const getEnhancedComponent = (
  enhancer,
) => (
  component,
) => getOrAdd(
  typeof component !== `string`
    ? getEnhancedMap(component)
    : getStringEnhancedMap(component)
)(
  () => enhancer(component)
)(
  enhancer
)

export default getEnhancedComponent
