declare const maybe: unknown

if(maybe === true) {
  const aBoolean: boolean = maybe
} else if(typeof maybe === 'string') {
  const aString: string = maybe
}
