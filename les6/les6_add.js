// Створити обєкт автомобіля з полями:
//     Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
//     Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
//     Створити не менше 7 та не більше 20 машинок.
//     Для початку вкладіть всі наші створені автомобілі в масив cars.

function Car(brand, volume, name, age, experience, price, year) {
    this.brand = brand
    this.volume = volume
    this.owner = {}
    this.owner.name = name
    this.owner.age = age
    this.owner.experience = experience
    this.price = price
    this.year = year
    }

    let cars1 = [
        new Car('mercedes', 2, 'Vova', 35, 12, 20, 2012),
        new Car('daewoo', 1.4, 'Oleh', 25, 7, 4, 2014),
        new Car('bmw', 2.4, 'Zina', 31, 5, 9, 2010),
        new Car('acura', 3, 'Oleksiy', 41, 23, 28, 2013),
        new Car('volvo', 2, 'Kolia', 35, 12, 15, 2014),
        new Car('skoda', 2, 'Inna', 37, 15, 20, 2009),
        new Car('zaz', 2, 'Ivan', 21, 2, 2, 2007),
        new Car('renault', 2, 'Vialiy', 43, 23, 6, 2015),
        new Car('peogeout', 2, 'Roma', 48, 25, 8, 2008),
        new Car('audi', 2.5, 'Viktor', 57, 35, 25, 2017),
]
console.log(cars1[0].volume);

//     Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
let overhaul = () => {

}

// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25,
//     то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
//     Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі

// Задача: дан отсортированный по возрастанию массив целых чисел.
//     Необходимо вернуть наименьший и наибольший индекс заданного элемента.
//     Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
//     Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.
//
// Пример:
//     Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.