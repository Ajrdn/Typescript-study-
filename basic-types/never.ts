function error(message: string): never {
  throw new Error(message)
}

function fail() {
  return error('failed')
}

function infiniteLoop(): never {
  while(true) {}
}

declare const numOrStr: string | number

if(typeof numOrStr !== 'string') {
  numOrStr
}

type Indexable<T> = T extends string ? T & {[index: string]: any} : never
