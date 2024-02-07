// const Name = prompt('Введите ваше имя')
// alert('Ваше имя: ' + Name)

// const a = 5
// const b = 'привет'
// const c = true
// let d
// console.log(typeof a)
// console.log(typeof b)
// console.log(typeof c)
// console.log(typeof d)
// console.log(null)

// const a = 42
// const b = '42'
// console.log(a == b)
// console.log(a === b)
//
// const isReady = true
//
// if (isReady){
//     console.log('Готово')
// } else {
//     console.log('Не готово')
// }
//
// isReady ? console.log('Готово') : console.log('Не готово')
//
// function calcAge(year){
//     return 2023 - year
// }
// console.log(calcAge(1999))

// const cars = ['Киа', 'Бугатти', 'Мерседес', 'Мазда']
// console.log(cars.length)
// cars[cars.length] = 'бмв'
// console.log(cars)
//
// for (let i = 0; cars.length > i; i++){
//     const car = cars[i]
//     console.log(car)
// }
//
// cars[cars.length] = 'Шевроле'
// for (let car of cars){
//     console.log(car)
// }

// const person = {
//     firstName: 'Alex',
//     lastName: 'Kolyagin',
//     year: 1999,
//     languages: ['en', 'ru'],
//     marriage: false
// }
//
// person.isProgrammer = false
//
// console.log(person)

// function LogPerson(a,name,age,gender){
//     return `${a[0]}${name}${a[1]}${age}${a[2]}${gender}`
// }
//
// function LogPerson2(name,age,gender){
//     if (age > 20){
//         age = 'Вы дед'
//     }
//     return 'Имя: ' + name + ', Возраст: ' + age + ', пол: ' + gender
// }
//
// const yourName = 'Александр'
// const yourAge = 24
// const yourGender = 'Муж'
// const output = LogPerson`Имя: ${yourName}, возраст: ${yourAge}, пол: ${yourGender}`
// const output2 = LogPerson2(yourName,yourAge,yourGender)
// console.log(output)
// console.log(output2)


// document.querySelector(".main-page-button").onclick = myFunction
//
// function myFunction() {
//     window.open("https://vk.com", '_blank')
//     window.location.href = "https://vk.com"
// }

// document.addEventListener('DOMContentLoaded', doSomething, false);
//
// function doSomething () {
//     document.getElementById("id1").onclick = myFunction
//
//     function myFunction() {
//         window.open("https://vk.com", '_blank')
//     }
// }

// const arrayBracket = ['(','(','(',')',')',')']
// // function validation(){
//     i = 0;
//     for (let key in arrayBracket){
//         if (arrayBracket[key] === '(') i++
//         else if (arrayBracket[key] === ')') i--
//         if (i < 0) break;
//     }
//     switch(i) {
//         case i = 0:
//             alert('строка валидна');
//             break;
//         case i = -1:
//         default:
//             alert('строка невалидна');
//             break;
//     }
// // }

setTimeout(() => {
    console.log('Время вышло')
}, 1000)    