class Parent {
  constructor(protected _name: string, private _age: number) {}

  public introduce(): void {
    console.log(`I'm ${this._name}, and I'm ${this._age} old.`)
  }

  protected print(): void {
    console.log(`Name: ${this._name}, age: ${this._age}`)
  }
}

class Child extends Parent {
  constructor(name: string, age: number) {
    super(name, age)
    this.print()
  }
}

const child = new Child('child', 5)
child.introduce()
