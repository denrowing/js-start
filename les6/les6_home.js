// 1) Створити масив з 20 чисел та:
//     a) відсортувати його від меншого до більшого.
let arr = [40, -10, 3, 8, -5, 0, 107, 44, 67, 17,  -20, 11, 88, 31, 32, 50, 49, 21, 71, 6]
let sortFromLess = arr.sort((a,b) => a - b)
console.log(sortFromLess);

//     b) відсортувати його від більшого до меншого.
let sortFromMore = arr.sort((a,b) => b - a)
console.log(sortFromMore);


//     c) Відфілтрувати числа які є кратними 3.
let multyOfThree = arr.filter(elem => elem % 3 === 0)
console.log(multyOfThree);

// d) Відфілтрувати числа які є більшими за 10.
let moreThenTen = arr.filter(elem => elem > 10)
console.log(moreThenTen);

// e) Проітерувати його forEach та вивести кожеш елмент за допомогою document.write
let writeArr = arr.forEach(elem => document.write(`${elem} `))
console.log(writeArr);

// f) За допомогою map збільшити кожен елемент в масиві в три рази.
let increaseThreeold = arr.map(elem => elem * 3)
console.log(increaseThreeold);

//     g) Порахувати загальну суму всіх елментів у масиві (reduce)
let sumArr = arr.reduce((a, b) =>  a + b)
console.log(sumArr);

// 2) Створити масив з 20 стрічок та:
//     a) Відсортувати його в алфавітному порядку
let str = ['ворон', 'воронові', 'кряче', 'чайка', 'чайці', 'вторить', 'happy', 'happiness', 'any', 'some', 'text',
    'must', 'be', 'a', 'good', 'how', 'much', 'what', 'problem', 'now']
let sortText = str.sort()
console.log(sortText);

// b) Відсортувати в зворотньому порядку
let sortTextReverse = str.reverse()
console.log(sortTextReverse);


// c) Отримати в новому масиві тільки ті слова, довжина яких більша за 4 букви (filter)
let lengthFour = str.filter(elem => elem.length > 4)
console.log(lengthFour);


// d) Змінити кожне слово в масиві додавши на початок 'Sam says *ваше слово*'
let saysSam = str.map(elem => 'Sam says ' + elem)
console.log(saysSam);

// 3) Все робити тільки за допомогою методів масивів!
//     Дано масив :
    const users = [
        {name: 'vasya', age: 31, isMarried: false},
        {name: 'petya', age: 30, isMarried: true},
        {name: 'kolya', age: 29, isMarried: true},
        {name: 'olya', age: 28, isMarried: false},
        {name: 'max', age: 30, isMarried: true},
        {name: 'anya', age: 31, isMarried: false},
        {name: 'oleg', age: 28, isMarried: false},
        {name: 'andrey', age: 29, isMarried: true},
        {name: 'masha', age: 30, isMarried: true},
        {name: 'olya', age: 31, isMarried: false},
        {name: 'max', age: 31, isMarried: true}
    ];
// a) відсортувати його за  віком (зростання , а потім окремо спадання)
let ascendingAge = users.sort((a, b) => a.age - b.age)
console.log(ascendingAge);

// b) відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)

// let nameLengthGrowth = users.sort((c, d) => c.name.length - d.name.length)
// console.log(nameLengthGrowth);
// let nameLengthFall = users.sort((a, b) =>  b.name.length - a.name.length)
// console.log(nameLengthFall);


// c) пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення),
// та зберегти це в новий масив (первинний масив залишиться без змін)
let a = JSON.stringify(users)
let userCopy = JSON.parse(a)

console.log(userCopy);
let addId = userCopy.map((elem, index) =>  elem.id = index + 1)
console.log(addId);

// for (const user of usersCopy) {
//     let i = 1
//     user.id = i++
// }


// d) відсортувати його за індентифікатором



// e) Всі хто одружений мають попасти у новий масив та отрмати квартиру (reduce)
let married = users.filter(elem => elem.isMarried)
console.log(married);
