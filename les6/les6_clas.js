const cars = [
    {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
    {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
    {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
    {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
    {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
    {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
    {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
    {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
    {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
    {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
    {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
    {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
    {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230}
];

// Відфільтрувати масив за наступними крітеріями :
//     - двигун більше 3х літрів
let engineVolumeThree = cars.filter(elem => elem.volume > 3)
console.log(engineVolumeThree);


// - двигун = 2л
let engineVolumeTwo = cars.filter(elem => elem.volume >2)
console.log(engineVolumeTwo);
// - виробник мерс
let producerMerc = cars.filter(elem => elem.producer === 'mercedes')
console.log(producerMerc);

// - двигун більше 3х літрів + виробник мерседес
let mercEngineThree = cars.filter(elem => elem.producer === 'mercedes' && elem.volume > 3)
console.log(mercEngineThree);

// - двигун більше 3х літрів + виробник субару
let subaruEngineThree = cars.filter(elem => elem.producer === 'subaru' && elem.volume > 3)
console.log(subaruEngineThree);

// - сили більше ніж 300
let powerThree = cars.filter(elem => elem.power > 300)
console.log(powerThree);

// - сили більше ніж 300 + виробник субару
let subaruPowerThree = cars.filter(elem => elem.producer === 'subaru' && elem.power > 300)
console.log(subaruPowerThree);

// - мотор серіі ej
let engineType = cars.filter(elem => elem.engine.slice(0, 2) === 'ej')
console.log(engineType);

// - сили більше ніж 300 + виробник субару + мотор серіі ej
let subaruPowerThreeEngine = cars.filter(elem => elem.producer === 'subaru' && elem.power > 300 && elem.engine.slice(0, 2) === 'ej')
console.log(subaruPowerThreeEngine);

// - двигун меньше 3х літрів + виробник мерседес
let mercVolumeThree = cars.filter(elem => elem.producer === 'mercedes' && elem.volume > 3)
console.log(mercVolumeThree);

// - двигун більше 2л + сили більше 250
let volumeTwoPower = cars.filter(elem => elem.power > 250 && elem.volume > 2)
console.log(volumeTwoPower);

// - сили більше 250  + виробник бмв
let powerBMW = cars.filter(elem => elem.power > 250 && elem.producer === 'bmw')
console.log(powerBMW);

// - взять слдующий массив
const usersWithAddress = [
    {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
    {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
    {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
    {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
    {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
    {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
    {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
    {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
    {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
    {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
    {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
];

// -- Відсортувати їх по ID
    let sortById = usersWithAddress.sort((a, b) => a.id - b.id)
    console.log(sortById);

// -- Відсортувати їх по ID в зворотньому порядку
    let sortByIdReverse = usersWithAddress.sort((a, b) => b.id - a.id)
    console.log(sortByIdReverse);

// -- Відсортувати по віку
let sortByAge = usersWithAddress.sort((a, b) => a.age - b.age)
console.log(sortByAge);

// -- Відсортувати по віку в зворотньому порядку
let sortByAgeReverse = usersWithAddress.sort((a, b) => b.age - a.age)
console.log(sortByAgeReverse);

// -- Відсорутвати по імені
let sortByName = usersWithAddress.sort((a, b) => a.name - b.name)
console.log(sortByName);

// -- Відсорутвати по назві вулиці


// -- Відсорутвати по номеру будинку
let sortByNumber = usersWithAddress.sort((a, b) => a.address.number - b.address.number)
console.log(sortByNumber);

// -- Залигити тільки тих, хто молодший ніж 30 (filter)
let ageThirty = usersWithAddress.filter(elem => elem.age > 30)
console.log(ageThirty);

// -- Залишити тільки одружених
let isMarried = usersWithAddress.filter(elem => elem.isMarried)
console.log(isMarried);

// -- Залишити тільки одружених, які молодні за 30
let isMarriedUnderThirty = usersWithAddress.filter(elem => elem.isMarried && elem.age < 30)
console.log(isMarriedUnderThirty);

// -- Залишити лише тих, в кого парні номери будинків.
let pairedNumber = usersWithAddress.filter(elem => elem.address.number % 2 === 0)
console.log(pairedNumber);

// -- Порахувати загальний вік всіх людей. (reduce)
let sum = 0
let accAge = usersWithAddress.reduce((acc = 0, current) => acc + current.age, sum)
console.log(accAge);

// -- Ті, хто одружений і старий за 30 має отримати обєкти child і попасти в новий масив (reduce)
// let underThirtyMarried = usersWithAddress.reduce((withchild = [] ,
// elem) => { if (elem.isMarried && elem.age > 30) {
// withchild.push(elem);
// return withchild;
// }
// } , [])
// console.log(underThirtyMarried);