export const parses = search => {
  const id = parseInt(search.match(/\d+/))
  console.log(search)
  console.log(id)
  return id
}
