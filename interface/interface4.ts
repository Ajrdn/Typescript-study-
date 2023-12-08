interface Person4 {
  name: string
  age: number
  hello(): void
}

const p41: Person4 = {
  name: 'Mark',
  age: 39,
  hello: function(): void {
    console.log('hello')
  },
}

const p42: Person4 = {
  name: 'Anna',
  age: 29,
  hello(): void {
    console.log('hello')
  },
}

const p43: Person4 = {
  name: 'John',
  age: 19,
  hello: (): void => {
    console.log('hello')
  },
}

p41.hello()
p42.hello()
p43.hello()
