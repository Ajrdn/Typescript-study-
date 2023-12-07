class GenericPerson<T, K> {
  private _name: T
  private _age: K

  constructor(name: T, age: K) {
    this._name = name
    this._age = age
  }
}

new GenericPerson('Mark', 39)
new GenericPerson<string, number>('Mark', 39)
