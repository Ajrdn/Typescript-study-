function genericArray<T>(message: T[]): T {
  return message[0]
}

genericArray(['Hello', 'World'])
genericArray(['Hello', 5])

function genericTuple<T, K>(message: [T, K]): T {
  return message[0]
}

genericTuple(['Hello', 'World'])
genericTuple(['Hello', 5])
