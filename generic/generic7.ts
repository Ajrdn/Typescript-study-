interface GPerson {
  name: string
  age: number
}

const gPerson: GPerson = {
  name: 'Mark',
  age: 39,
}

function getProp<T, K extends keyof T>(person: T, key: K): T[K] {
  return person[key]
}

getProp(gPerson, 'age')

function setProp<T, K extends keyof T>(person: T, key: K, value: T[K]): void {
  person[key] = value
}

setProp(gPerson, 'name', 'John')
