abstract class AbstractClass {
  protected _name: string = 'abstractClass'

  abstract setName(name: string): void
}

class PerfectClass extends AbstractClass {
  setName(name: string): void {
    this._name = name
  }
}

const perfectClass = new PerfectClass()
perfectClass.setName('perfectClass')
