exports.checkValue = (value) => {
  let result = false
  if (Array.isArray(value)) {
    result = (value[0] === 'ok')
  }
  return result
}
