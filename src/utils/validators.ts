export type FieldValidator = (value: string) => string | undefined

export const required: FieldValidator = value => {
  if (value) {
    return undefined
  }
  return 'Field is required'
}

export const maxLenghtCreator =
  (maxLenght: number): FieldValidator =>
  value => {
    if (value && value.length > maxLenght) {
      return `Max lenght is ${maxLenght} simbols`
    }
    return undefined
  }

export const minLenghtCreator =
  (minLenght: number): FieldValidator =>
  value => {
    if (value && value.length < minLenght) {
      return `Max lenght is ${minLenght} simbols`
    }
    return undefined
  }
