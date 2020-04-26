export default {
  setUpdateValue(state,palyload) {
    const { colorKey, color } = palyload
    state[colorKey] = color;
  }
}