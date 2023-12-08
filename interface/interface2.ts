interface Person2 {
  name: string
  age?: number
}

function hello2(person: Person2): void {
  console.log(`Hello, I'm ${person.name}`)
}

hello2({name: 'Mark', age: 39})
hello2({name: 'Anna'})
