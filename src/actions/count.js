let nextCount = 0
export const addCount = () => {
  return {
    type: 'ADD_COUNT',
    count: nextCount++
  }
}
