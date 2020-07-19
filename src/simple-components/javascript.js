console.clear();
class Human {
  /*   KIND = 'HUMAN'; */

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayName() {
    console.log('Name ', this.name);
  }

  sayAge() {
    console.log('Age ', this.age);
  }

  /*   sayKind = () => {
      console.log('Kind ', this.KIND);
    } */
}

const gendalf = new Human('Gendalf', 666);

gendalf.sayAge();
gendalf.sayName();
/* gendalf.sayKind(); */

export const a = 1;
export const b = 2;
const c = a + b;

console.log(c);

/* if (module.hot) {
  module.hot.accept();
} */