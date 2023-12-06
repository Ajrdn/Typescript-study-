class Human2 {
  private static CITY = 'Seoul'

  public hello() {
    console.log(`Hi, I'm in ${Human2.CITY}`)
  }

  public change() {
    Human2.CITY = 'LA'
  }
}

const h21 = new Human2()
h21.hello()

const h22 = new Human2()
h22.hello()

h21.change()

h22.hello()
