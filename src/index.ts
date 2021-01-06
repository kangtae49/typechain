interface Human {
  name: string;
  age: number;
  gender: string;
}

const person = {
  name: 'kkt',
  gender: 'male',
  age: 22,
};

const sayHi = (person: Human): string => {
  return `${person.name} ${person.age} ${person.gender}!`;
};

// console.log(sayHi('kkt', 444, 'male'));
console.log(sayHi(person));

export {};
