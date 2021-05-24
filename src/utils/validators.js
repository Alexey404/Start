export const required = value => {
  if (value) {
    return undefined
  }
  return 'Field is required'
}

export const maxLenghtCreator = maxLenght => value => {
  if (value && value.length > maxLenght) {
    return `Max lenght is ${maxLenght} simbols`
  }
  return undefined
}

export const minLenghtCreator = minLenght => value => {
  if (value && value.length < minLenght) {
    return `Max lenght is ${minLenght} simbols`
  }
  return undefined
}
