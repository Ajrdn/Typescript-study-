class ClassName {
  private static instance: ClassName | null

  private constructor() {}

  public static getInstance() {
    if(ClassName.instance === null) ClassName.instance = new ClassName()
    return ClassName.instance
  }
}

const class1 = ClassName.getInstance()
const class2 = ClassName.getInstance()

console.log(class1 === class2)
