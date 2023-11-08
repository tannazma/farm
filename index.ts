// interface Farm {
//   animals: Animal[];
//   buildings: FarmBuilding[];
//   farmName: string;
// }

// interface Animal {
//   kind: string;
//   id: number;
//   age: number;
//   groundSpeed: number;
//   airSpeed?: number;
// }

// interface FarmBuilding {
//   shelters: string[];
// }

// const aFarm: Farm = {
//   animals: [
//     { kind: "dog", id: 3, age: 12, groundSpeed: 23, airSpeed: 45 },
//     { kind: "cat", id: 4, age: 16, groundSpeed: 28, airSpeed: 95 },
//     { kind: "chicken", id: 5, age: 6, groundSpeed: 48, airSpeed: 15 },
//   ],
//   buildings: [{ shelters: ["anotherShelter"] }],
//   farmName: "My Farm",
// };
// // A function to removeAnimal that removes an animal from the farm based on id

// // function removeAnimalId(farm: Farm, animalId: number) {
// //   let result = [];

// //   for (let i = 0; i < farm.animals.length; i++) {
// //     if (farm.animals[i].id !== animalId) {
// //       result.push(farm.animals[i]);
// //     }
// //   }

// //   farm.animals = result;
// // }

// // removeAnimalId(aFarm, 3);
// console.log(aFarm.animals);

// // A function to addAnimal that adds an animal to the farm

// const newAnimal: Animal = {
//   kind: "horse",
//   id: 6,
//   age: 28,
//   groundSpeed: 90,
//   airSpeed: 33,
// };

// function addAnimal(farm: Farm, newAnimal: Animal) {
//   farm.animals.push(newAnimal);
// }

// addAnimal(aFarm, newAnimal);
// console.log(aFarm.animals);

// // A function to checkShelters that returns a boolean indicating if all the kinds of animals have shelter
// function checkShelters(farm: Farm, shelter: FarmBuilding) {
//   // for (let i = 0; i < farm.buildings.length; i++) {
//   //   if (farm.buildings[i] === shelter) {
//   //     return true;
//   //   } else {
//   //     return false;
//   //   }
//   // }
//   console.log(farm.buildings);
// }
// // checkShelters(aFarm,[])

interface Person {
  id: number;
  name: string;
  age: number;
}

type AnimalKind = "cow" | "sheep" | "chicken" | "pig";

interface Animal {
  id: number;
  name: string;
  kind: AnimalKind;
  age: number;
  hasBeenFed: boolean;
}

interface Farm {
  id: number;
  name: string;
  farmer: number; // a single id, pointing to a Person
  animals: number[]; // an array of ids, pointing to Animals
}
const people: Person[] = [
  { id: 1, name: "John", age: 30 },
  { id: 2, name: "Mary", age: 25 },
  { id: 3, name: "Bob", age: 40 },
  { id: 4, name: "Alice", age: 20 },
  { id: 5, name: "Mark", age: 50 },
  { id: 6, name: "Julia", age: 27 },
];

const animals: Animal[] = [
  { id: 1, name: "Bessie", kind: "cow", age: 4, hasBeenFed: false },
  { id: 2, name: "Dolly", kind: "sheep", age: 2, hasBeenFed: true },
  { id: 3, name: "Cluck", kind: "chicken", age: 1, hasBeenFed: true },
  { id: 4, name: "Porky", kind: "pig", age: 3, hasBeenFed: false },
  { id: 5, name: "Maggie", kind: "cow", age: 5, hasBeenFed: true },
  { id: 6, name: "Bo", kind: "sheep", age: 1, hasBeenFed: false },
  { id: 7, name: "Nugget", kind: "chicken", age: 2, hasBeenFed: false },
  { id: 8, name: "Wilbur", kind: "pig", age: 2, hasBeenFed: true },
  { id: 9, name: "Bella", kind: "cow", age: 7, hasBeenFed: true },
  { id: 10, name: "Fluffy", kind: "sheep", age: 3, hasBeenFed: true },
  { id: 11, name: "Wings", kind: "chicken", age: 1, hasBeenFed: false },
  { id: 12, name: "Babe", kind: "pig", age: 1, hasBeenFed: true },
  { id: 13, name: "Moo", kind: "cow", age: 3, hasBeenFed: false },
  { id: 14, name: "Fleece", kind: "sheep", age: 4, hasBeenFed: false },
  { id: 15, name: "Feathers", kind: "chicken", age: 2, hasBeenFed: true },
  { id: 16, name: "Piglet", kind: "pig", age: 4, hasBeenFed: true },
];

const farms: Farm[] = [
  {
    id: 1,
    name: "Old McDonald's Farm",
    farmer: 1, // John
    animals: [1, 2, 3, 4, 9, 10],
  },
  {
    id: 2,
    name: "Green Acres Farm",
    farmer: 2, // Mary
    animals: [5, 6, 7, 8, 12, 14],
  },
  {
    id: 3,
    name: "Happy Farm",
    farmer: 3, // Bob
    animals: [11, 13],
  },
  {
    id: 4,
    name: "Julia's Farm",
    farmer: 6, // Julia,
    animals: [15, 16],
  },
];

// s there a person named Bob in our people array?
// with for loop

const isBobInPeopleArray = (people: Person[]): Person | undefined => {
  for (let i = 0; i < people.length; i++) {
    if (people[i].name === "Bob") {
      return people[i];
    }
  }
  return undefined;
};
// here with find()
// const isBobInPeopleArray2 = (people: Person[]): Person => {

const bob = people.find((person: Person): boolean => {
  const isBob = person.name === "Bob";
  return isBob;
});
console.log(bob);
// console.log(people)

// Is there a person aged 39 in our people array?
const personAge27 = people.find((people: Person) => {
  const IsPerson27Age = people.age === 27;
  return IsPerson27Age;
});
console.log(personAge27);

// Is there an animal older than 2 years that hasn't been fed yet in our animals array?
// with for loop

const findUnfedOlderThan2 = (animals: Animal[]): Animal | undefined => {
  for (let i = 0; i < animals.length; i++) {
    if (animals[i].age > 2 && animals[i].hasBeenFed === false) {
      return animals[i];
    }
  }
  return undefined;
};

console.log(findUnfedOlderThan2(animals));

// with filter

const AnimalOlderNotFed = animals.filter((an: Animal) => {
  const animalOlderThan2 = an.age > 2;
  const animalNotFed = an.hasBeenFed === false;
  if (animalOlderThan2 && animalNotFed) {
    return true;
  } else {
    return false;
  }
});

console.log(AnimalOlderNotFed);

// Is there a farm in farms that has a farmer with id === 4?

const farmWithId4 = farms.find((myFarm: Farm) => {
  return myFarm.id === 4;
});
console.log(farmWithId4);

// Is there an animal in animals that is a pig?

const isAnimalPig = animals.find((an: Animal) => {
  return an.kind === "pig";
});
console.log(isAnimalPig);
// Is there a farm in farms that has 6 animals?

const aFarmHas6Animals = farms.find((af: Farm) => {
  return af.animals.length === 6;
});
console.log(aFarmHas6Animals);
// Is there an animal older than 2 years who hasn't been fed yet in our animals array?
const animalOlderThan2Notfed = animals.find((an: Animal) => {
  an.age > 2 && an.hasBeenFed === false;
});
console.log(animalOlderThan2Notfed);

// Which animals in animals are sheep?

const animalsAreSheep = animals.filter((an: Animal) => an.kind === "sheep");
console.log(animalsAreSheep);

// Which farms in `farms have less than 3 animals?
const farmsHaveLessThan3Animals = farms.filter(
  (fa: Farm) => fa.animals.length < 3
);
console.log(farmsHaveLessThan3Animals);

// Which animals in animals have a name shorter then 4 characters?
const animalsNameShorterThan4 = animals.filter(
  (an: Animal) => an.name.length < 4
);
console.log(animalsNameShorterThan4);

// Show the name of every person in people
const nameEveryPersonInPeople = people.map((pe: Person) => pe.name);
console.log(nameEveryPersonInPeople);

// For every animal in animals create a string that tells their age. So for the first animal, it should be "Bessie is 4 years old"
const stringForEveryAnimals = animals.map(
  (an: Animal) => `${an.name} is ${an.age} years old`
);
console.log(stringForEveryAnimals);

// Show the length of every farm name in `farms
const lengthOfEveryFarmName = farms.map((fa: Farm) => fa.name.length);
console.log(lengthOfEveryFarmName);

// Ardi's assesment

interface Persons {
  name: string;
  family: string;
  age: number;
}

type people2 = Persons[];

const people3: Persons[] = [
  { name: "Tannaz", family: "moh", age: 30 },
  { name: "Ardi", family: "ygg", age: 33 },
  { name: "Sanaz", family: "uyug", age: 23 },
  { name: "Ali", family: "nhee", age: 29 },
];

const fullNamesOfPeopleYoungerThan30 = people3
  .filter((pe: Persons) => pe.age < 30)
  .map((pe: Persons) => `${pe.name} ${pe.family}`)
  .map(capitalize);

console.log({fullNamesOfPeopleYoungerThan30});

function capitalize(input: string) {
  return input
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.substring(1))
    .join(" ");
}
