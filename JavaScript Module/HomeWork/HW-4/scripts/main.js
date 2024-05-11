//// 1) - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function squareArea (a,b) {
    return a*b
}
let result = squareArea(3,4);
console.log(result);

//// 2) - створити функцію яка обчислює та повертає площу кола з радіусом r

function circleArea (r) {
    return 3.14*(r**2)
}
let result2 = circleArea(4);
console.log(result2);

//// 3) - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cylinderArea (r,h) {
    return 2*3.14*r*h
}
let result3 = cylinderArea (2,3);
console.log(result3);


//// 4) - створити функцію яка приймає масив та виводить кожен його елемент

function displayArrayItems (arr) {
    for (const item of arr) {
                console.log(item);
            }
}

let arr = [11,22,33,44,55,66,77,88,99];
displayArrayItems(arr);

//// 5) - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function createParagraph (a){
    document.write(`<p>${a}</p>`)

}
createParagraph('This is paragraph');



//// 6) - створити функцію яка створює ul з трьома елементами li.
//// Текст li задати через аргумент всім однаковий

function createList (text){
    document.write(`<ul>`);
    for (let i = 1; i <= 3; i++) {
        document.write(`
                <li>
                    ${text}
                </li>`);
    }
    document.write(`</ul>`);
}
createList('This is item in list');


//// 7) - створити функцію яка створює ul з трьома елементами li.
//// Текст li задати через аргумент всім однаковий.
//// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function createList2 (text, count){
    document.write(`<ul>`);
    for (let i = 1; i <= count; i++) {
        document.write(`
                <li>
                    ${text} №${i}
                </li>`);
    }
    document.write(`</ul>`);
}
createList2('Item',3);

//// 8) - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function createArrayList (arr2) {
    document.write(`<ul>`);
        for (const item of arr2) {
            document.write(`
                    <li>
                        ${item}
                    </li>`);
        }
    document.write(`</ul>`);
}

let arr2 = [11, 22, true, "Hello", false, "today", 55];
createArrayList(arr2);

//// 9) - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
//// Для кожного об'єкту окремий блок.

function createUsersList (users){
    for (const user of users) {
        document.write(`<div>`);
            for (const key in user) {
                document.write(`
                         <span>
                             ${key} - ${user[key]},
                         </span>`);
            }
        document.write(`</div>`);
    }
}

let users = [
    {
        id: 1,
        name: 'Felix',
        age: 25
    },
    {
        id: 2,
        name: 'Antonio',
        age: 15
    },
    {
        id: 3,
        name: 'Clara',
        age: 27
    }
]
createUsersList(users);

//// 10) - створити функцію яка повертає найменьше число з масиву

// debugger
function findMinNumber (arr) {
    let a = arr[0];
    for (let i = 0; i <= arr.length-1; i++) {
        if (arr[i]<a){
            a = arr[i];
        }
    }
    return a;
}

let arr3 = [101,705,96,4,777,895,5,67,954,12,476,6];

let minNum = findMinNumber(arr3);
console.log(minNum);

//// 11) - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
//// Приклад sum([1,2,10]) //->13

function sum(arr) {
    let total = 0;
    for (let i = 0; i <= arr.length-1; i++) {
        total += arr[i];
    }
    return total;
}

console.log(sum([1,2,10]));

//// 12) - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
//// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

function swap(arr,index1,index2){
    let newIndex = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = newIndex;

    return arr;
}

console.log(swap([11,22,33,44],0,1));

//// 13) - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
//// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
// debugger
function exchange(sumUAH,currencyValues,exchangeCurrency){
    let exchangeRate = 0;
    for (const currency of currencyValues) {
        if(currency.currency === exchangeCurrency){
            exchangeRate = currency.value
        }
    }

    return sumUAH/exchangeRate
}

let exchangeResult = exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD')
console.log(exchangeResult);
