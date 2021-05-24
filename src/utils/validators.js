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
<<<<<<< HEAD
export const minLenghtCreator = minLenght => value => {
  if (value && value.length < minLenght) {
    return `Max lenght is ${minLenght} simbols`
  }
  return undefined
}
=======
>>>>>>> 5e5a38064b815b6bb33114e1c98dd42823ca3da1
