
// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) змінює колір тексту елементу з ід main_header на назву групи в якій ви вчитесь (mon-year)
let classChange = document.getElementById('main_header')
classChange.classList.add('june_2021')
classChange.classList.remove('main_header')

// b) робить ширину елементу ul 400px
let ulElem = document.getElementsByTagName('ul')
for (const elem of ulElem) {
    elem.style.width = '400px'
    elem.style.backgroundColor = 'green' // additional style
}


// c) робить ширину всіх елементів з класом linkList шириною 50%
let link = document.getElementsByClassName('linkList')
for (const lin of link) {
    lin.style.width = '50%'
}

// d) отримує текст, який зберігається в елементі з класом listElement2
let link2 = document.getElementsByClassName('listElement2')
for (const lin of link2) {
    console.log(lin.innerText);
}

// e) отримує всі елементи li та змінює ім колір фону на сірий
let greyLi = document.getElementsByTagName('li')
for (const elem of greyLi) {
    elem.style.backgroundColor = 'grey'
}

// f) отримує всі елементи 'a' та додає їм клас anchor
let aClass = document.getElementsByTagName('a')
for (const elem of aClass) {
    let createAClass = document.createElement('class')
    elem.appendChild(createAClass)
    elem.classList.add = 'anchor'
}

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
let changeWidthText = document.getElementsByTagName('a')
for (const text of changeWidthText) {
    if (text.innerText === 'link3') {
     text.style.fontSize = '40px'
    }
}


// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
for (const text of changeWidthText) {
    text.classList.toggle(`element_${text.innerText}`)
}


// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

// let header = document.getElementsByClassName('sub-header')
// for (const head of header) {
//     head.style.backgroundColor = prompt('create headers color', 'rgb(XXX,XXX,XXX)')
// }



// j) отримує всі елементи 'sub-header' та змінює колір тексту у випадку якщо текст елементу = content 2 segment . Колір отримати з prompt()

// let header = document.getElementsByClassName('sub-header')
// for (const head of header) {
//     if (head.innerText == 'content 2 segment') {
//         head.style.backgroundColor = prompt('create headers color', 'rgb(XXX,XXX,XXX)')
//     }
// }



// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

// let content1 = document.getElementsByClassName('content_1')
// for (const content of content1) {
//     content.innerText = prompt('create your own content','')
// }


// l) отримати елементи p та змінити їм padding на 20px
let abzatz = document.getElementsByTagName('p')
for (const elem of abzatz) {
    elem.style.margin = '20px'
}


// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)
let textClass = document.getElementsByClassName('text2')
for (const text of textClass) {
    text.innerText = 'june-2021'
}
