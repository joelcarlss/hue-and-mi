module.exports = (path, data, response) => {
  let next = {}
  for (let key in path) {
    if (key !== 'method' && key !== 'link') {
      next[key] = path[key]
    }
  }
  return {
    response,
    data,
    links: {
      self: path.link,
      method: path.method,
      next
    }
  }
}
