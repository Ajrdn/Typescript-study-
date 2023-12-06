class Students {
  [index: string]: 'male' | 'female'
}

const aClass = new Students()
aClass.mark = 'male'
aClass.jade = 'male'

console.log(aClass)

const bClass = new Students()
bClass.chloe = 'female'
bClass.alex = 'male'
bClass.anna = 'female'
