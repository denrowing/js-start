
// - Створити форму з інпутом для введення ім'я, та action="index2.html".
// При відправці данних з форми, зберігати ім'я в localstorage, та переходити на index2.html.
// На index2.html виводити записане в localstorage ім'я в div

// let button = loginName.button
// let data = document.getElementById('someName')
//     button.onclick = () => {
//     localStorage.setItem('name', data.value)
// }


// Чернетка
// let loginName = document.forms.loginName
// let someName = loginName.someName
//
// let userNames = {}
// let createDataName = button.onclick = (ev) => {
//     ev.preventDefault()
//     console.log(someName.value, 'Name')
//     userNames.name = someName.value
//     console.log(userNames)
//     localStorage.setItem('name', someName.value)
// }


// - Імітуємо наповнення інтернет магазину товарами : ( код також на index.html та list.html)
//     Створити форму з наступними полями :
//     - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись.
//     створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
//     До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар

let store = document.forms.store
let item = store.itemOfProduct
let quantity = store.quantityOfProduct
let price = store.priceOfProduct
let load = store.button2


load.onclick = (event) => {
    event.preventDefault()
    let info = []

    let storeage = localStorage.getItem('info')

    if (storeage) {
        info = JSON.parse(storeage)
    }


    info.push({
        item: item.value,
        quantity: quantity.value,
        price: price.value,
        id: info.length + 1,
        //picture: picture.src,
    })

    localStorage.setItem('info', JSON.stringify(info))
}



// Чернeтка
// let picture = document.getElementsByTagName('img')
// console.log(store)
// console.log(item)
// console.log(quantity)
// console.log(price)
// console.log(load)
// let item = itemInput.value
// let quantity = quantityInput.value
// let price = priceInput.value
// let picture = pictureInput.src
// let productItem = document.getElementById('itemOfProduct')
// console.log(productItem);
// let productQuantity = document.getElementById('quantityOfProduct')
// let productPrice = document.getElementById('priceOfProduct')


// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
// }];
//
// let address = []
// for (let user of users) {
//     for (let key in user) {
//         if (key === 'address') {
//             address.push(user[key])
//         }
//     }
// }
// console.log(address);



// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.

// let divUsers = document.createElement('div')
// for (let user of users) {
//     let pUser = document.createElement('div')
//     pUser.style.backgroundColor = 'yellow'
//     pUser.style.margin = '5px'
//     for (let key in user) {
//         let dataAddress = user[key]
//         if (typeof(dataAddress) == 'object') {
//             for (data in dataAddress) {
//                 pUser.innerHTML += `${data}: ${dataAddress[data]}<br>`
//                 console.log(`${data}: ${dataAddress[data]}`)
//             }
//         } else {
//             pUser.innerHTML += `${key}: ${user[key]}<br>`
//             console.log(`${key}: ${user[key]}`)
//         }
//     }
//     divUsers.appendChild(pUser)
// }
// divUsers.style.backgroundColor = 'pink'
// document.body.appendChild(divUsers)

// Чернетка
// localStorage.setItem('user', JSON.stringify('users'))
// let usersJSON = localStorage.getItem('users')
// let user = JSON.parse(usersJSON)
// console.log(user);

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)

// let divUsers = document.createElement('div')
// for (let user of users) {
//     let pUser = document.createElement('div')
//     pUser.style.backgroundColor = 'yellow'
//     pUser.style.margin = '10px'
//     for (let key in user) {
//         let divPerson = document.createElement('div')
//         divPerson.style.backgroundColor = 'blue'
//         divPerson.style.margin = '15px'
//         let dataAddress = user[key]
//         if (typeof(dataAddress) == 'object') {
//             for (data in dataAddress) {
//                 divPerson.innerHTML += `${data}: ${dataAddress[data]}<br>`
//                 console.log(`${data}: ${dataAddress[data]}`)
//             }
//         } else {
//             divPerson.innerHTML = `${key}: ${user[key]}<br>`
//             console.log(`${key}: ${user[key]}`)
//         }
//         pUser.appendChild(divPerson)
//     }
//     divUsers.appendChild(pUser)
// }
// divUsers.style.backgroundColor = 'pink'
// document.body.appendChild(divUsers)


// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості

// let divUsers = document.createElement('div')
// for (let user of users) {
//     let pUser = document.createElement('div')
//     pUser.style.backgroundColor = 'yellow'
//     pUser.style.margin = '10px'
//     for (let key in user) {
//         let divPerson = document.createElement('div')
//         divPerson.style.backgroundColor = 'blue'
//         divPerson.style.margin = '15px'
//         let dataAddress = user[key]
//         if (typeof(dataAddress) == 'object') {
//             for (data in dataAddress) {
//                 let divAddress = document.createElement('div')
//                 divAddress.style.backgroundColor = 'green'
//                 divAddress.style.margin = '7px'
//                 divAddress.innerHTML += `${data}: ${dataAddress[data]}<br>`
//                 console.log(`${data}: ${dataAddress[data]}`)
//                 divPerson.appendChild(divAddress)
//             }
//         } else {
//             divPerson.innerHTML = `${key}: ${user[key]}<br>`
//             console.log(`${key}: ${user[key]}`)
//         }
//
//         pUser.appendChild(divPerson)
//     }
//     divUsers.appendChild(pUser)
// }
// divUsers.style.backgroundColor = 'pink'
// document.body.appendChild(divUsers)


// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//     створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
//     Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.

// Розвязок на rules.html