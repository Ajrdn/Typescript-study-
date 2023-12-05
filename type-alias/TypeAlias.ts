type StringType = string

const str = 'hello'

const strType: StringType = str

type StringOrNumber = string | number

const mark = 'Mark'

const another: StringOrNumber = mark

type PersonTuple = [string, number]

const personInfo: [string, number] = ['Mark', 35]

const anotherPerson: PersonTuple = personInfo

type FoodType = (food: string) => void
