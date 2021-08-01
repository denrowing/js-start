// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// -- отримує текст з параграфа з  id "content"
//
let textID1 = document.getElementById('content')
let inText1 = textID1.innerText
console.log(inText1)

let textTag = document.getElementsByTagName('p')
for (const tag of textTag) {
    console.log(tag.innerText)
}

// -- отримує текст з блоку з id "rules"
let textID2 = document.getElementById('rules')
let inText2 = textID2.innerText
console.log(inText2)

// -- замініть текст параграфа з id 'content' на будь-який інший
textID1.innerText = 'Одного разу ти дізнаєшся, що твій брат зник у невідомому напрямку, приятелі займаються фінансовими аферами, ' +
    'а бізнес намагаються перекупити представники незрозумілих структур. ' +
    'Реальність виявляється хисткою та зникомою, життя робить крок убік, і ти несподівано опиняєшся поміж своїм минулим, ' +
    'де на тебе чекають друзі, й майбутнім, де на тебе чекають вороги.(Ворошиловград)'


// -- замініть текст параграфа з id 'rules' на будь-який інший
textID2.innerText = 'Артем Чех. Журналіст та письменник, творчість якого критики описують так: ' +
    '"Для книг Артема Чеха характерний "джентльменський набір" молодіжної прози: фізіологічні одкровення, ' +
    'нецензурна лексика, вуличний сленг...", але при цьому "є щось абсолютно своє, якась гірка нота, чи що, ' +
    'яка звучить то голосніше, то глухо, але завжди є".'

// -- змініть кожному елементу колір фону на червоний
let redFone = document.getElementsByTagName('body')
for (const body of redFone) {
    body.style.backgroundColor = 'red'
}

// -- змініть кожному елементу колір тексту на синій
for (const body of redFone) {
    body.style.color = 'blue'
}

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
console.log(textID2.classList);


// -- отримати всі елементи з класом fc_rules. визначити їм 2 події "клік", одна вивдоить текст елементу, інша довільний ьексь
// -- поміняти колір тексту у всіх елементів fc_rules на червоний
let textID3 = document.getElementsByClassName('fc_rules')
for (const rule of textID3) {
    rule.onclick = () =>  console.log(rule.innerText);
    rule.ondblclick = () => {
        rule.innerHTML = ''
        rule.append('some another Rule');

    }
    rule.style.color = 'black' // change on black  color for readability
}
