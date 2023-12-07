class PersonExtends<T extends string | number> {
  private _name: T

  constructor(name: T) {
    this._name = name
  }
}

new PersonExtends<string>('Mark')
new PersonExtends<number>(39)
