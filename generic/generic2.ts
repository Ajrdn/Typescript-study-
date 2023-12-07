function genericBasic<T, U>(message: T, comment: U): T {
  return message
}

genericBasic<string, number>('Mark', 39)
genericBasic(36, 39)
