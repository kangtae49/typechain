class Human {
  public name: string;
  public age: number;
  public gender: string;
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const lynn = new Human('kkt', 18, 'femain');

const sayHi = (person: Human): string => {
  return `${person.name} ${person.age} ${person.gender}!`;
};

// console.log(sayHi('kkt', 444, 'male'));
console.log(sayHi(lynn));

export {};
