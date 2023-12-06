class Human1 {
  public readonly name: string
  private readonly country: string

  public constructor(name: string, country: string, private _age: number) {
    this.name = name
    this.country = country
  }

  get age() {
    return this._age
  }

  set age(newAge: number) {
    this._age = newAge
  }
}

const h11: Human1 = new Human1('Mark', 'Korea', 39)

console.log(h11.age)

h11.age = 29

console.log(h11)
