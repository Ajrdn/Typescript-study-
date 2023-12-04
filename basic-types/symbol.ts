console.log(Symbol('symbol') === Symbol('symbol'))

const sym: symbol = Symbol()

const obj = {
  [sym]: 'symbol',
}

console.log(obj[sym])
