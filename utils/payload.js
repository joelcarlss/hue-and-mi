module.exports = (path, data) => {
  let next = {}
  for (let key in path) {
    if (key !== 'method' && key !== 'link') {
      next[key] = path[key]
    }
  }
  return {
    data,
    links: {
      self: path.link,
      method: path.method,
      next
    }
  }
}
