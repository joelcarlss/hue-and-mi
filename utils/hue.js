
exports.getStates = (lights) => {
  return lights.map(({ id, state, type, name }) => ({ name, type, id, state }))
}

exports.handleError = (error) => {
  return error
}
