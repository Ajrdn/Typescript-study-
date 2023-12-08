interface IPerson1 {
  name: string
  age?: number
  hello(): void
}

class Person implements IPerson1 {
  name: string
  age?: number | undefined

  constructor(name: string) {
    this.name = name
  }

  hello(): void {
    console.log(`Hello, I'm ${this.name}`)
  }
}

const cPerson1: IPerson1 = new Person('Mark')
cPerson1.hello()
