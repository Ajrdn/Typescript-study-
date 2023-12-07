type GenericFunction1 = <T>(message: T) => T

const genericFunction1: GenericFunction1 = <T>(message: T): T => {
  return message
}

interface GenericFunction2 {
  <T>(message: T): T
}

const genericFunction2: GenericFunction2 = <T>(message: T): T => {
  return message
}
