//// Масиви та об'єкти:

//// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль


let arr = [1, 2, 3, true, 'today', 'friday', 'tomorrow', false, 9, 10];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);

//// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1 = {
    title: 'Harry Potter and the Sorcerer’s Stone',
    pageCount: 223,
    genre: 'fantasy'
};

let book2 = {
    title: 'Harry Potter and the Chamber of Secrets',
    pageCount: 251,
    genre: 'fantasy'
};

let book3 = {
    title: 'Harry Potter and the Prisoner of Azkaban',
    pageCount: 317,
    genre: 'fantasy'
};

//// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
//// Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let bookDescription1 = {
    title: 'How to become a millionaire',
    pageCount: 777,
    genre: 'fantasy',
    authors: [
        {
            name: 'Jeff Bezos',
            age: 60
        },
        {
            name: 'Mark Zuckerberg',
            age: 39
        }
    ]
}

let bookDescription2 = {
    title: 'How to treat you pet',
    pageCount: 25,
    genre: 'fantasy',
    authors: [
        {
            name: 'Your dog',
            age: 5
        },
        {
            name: 'Your cat',
            age: 3
        }
    ]
}

let bookDescription3 = {
    title: 'To the Moon & Back',
    pageCount: 305,
    genre: 'travel',
    authors: [
        {
            name: 'Elon Musk',
            age: 52
        },
        {
            name: 'Bill Gates',
            age: 68
        }
    ]
};

//// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.
//// Вивести в консоль пароль кожного користувача
////

let users = [
    {
        name: 'Anna',
        username: 'sunflower17',
        password: 'qwerty'
    },
    {
        name: 'Danylo',
        username: 'danya',
        password: 'qwerty123'
    },
    {
        name: 'Mark',
        username: 'abc',
        password: 'ads'
    },
    {
        name: 'Oleh',
        username: 'bigboss',
        password: 'zxcvb'
    },
    {
        name: 'Tania',
        username: 'missbeauty',
        password: 'ytrew'
    },
    {
        name: 'Antonio',
        username: 'antonio99',
        password: 'oiiuyt'
    },
    {
        name: 'John',
        username: 'johnny',
        password: 'gfdstr'
    },
    {
        name: 'Felix',
        username: 'felix777',
        password: 'mklrfh'
    },
    {
        name: 'Olena',
        username: 'lena_star',
        password: 'oprst'
    },
    {
        name: 'Katya',
        username: 'katsik',
        password: 'mnbvcx35'
    }
]

console.log(`Пароль користувача ${users[0]['name']}: ${users[0]['password']}`);
console.log(`Пароль користувача ${users[1]['name']}: ${users[1]['password']}`);
console.log(`Пароль користувача ${users[2]['name']}: ${users[2]['password']}`);
console.log(`Пароль користувача ${users[3]['name']}: ${users[3]['password']}`);
console.log(`Пароль користувача ${users[4]['name']}: ${users[4]['password']}`);
console.log(`Пароль користувача ${users[5]['name']}: ${users[5]['password']}`);
console.log(`Пароль користувача ${users[6]['name']}: ${users[6]['password']}`);
console.log(`Пароль користувача ${users[7]['name']}: ${users[7]['password']}`);
console.log(`Пароль користувача ${users[8]['name']}: ${users[8]['password']}`);
console.log(`Пароль користувача ${users[9]['name']}: ${users[9]['password']}`);

//// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів.
/// Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2.
//// Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу
////

let temp = [
    {
        id: 1,
        day: 'monday',
        temperature: {
            morningTemp: 9,
            dayTemp: 15,
            nightTemp: 12
        }
    },
    {
        id: 2,
        day: 'tuesday',
        temperature: {
            morningTemp: 7,
            dayTemp: 14,
            nightTemp: 11
        }
    },
    {
        id: 3,
        day: 'wednesday',
        temperature: {
            morningTemp: 12,
            dayTemp: 25,
            nightTemp: 20
        }
    },
    {
        id: 4,
        day: 'thursday',
        temperature: {
            morningTemp: 10,
            dayTemp: 20,
            nightTemp: 17
        }
    },
    {
        id: 5,
        day: 'friday',
        temperature: {
            morningTemp: 20,
            dayTemp: 27,
            nightTemp: 19
        }
    },
    {
        id: 6,
        day: 'saturday',
        temperature: {
            morningTemp: 21,
            dayTemp: 28,
            nightTemp: 22
        }
    },
    {
        id: 7,
        day: 'sunday',
        temperature: {
            morningTemp: 15,
            dayTemp: 18,
            nightTemp: 11
        }
    },
];


//// Логічні розгалуження:
////     - Є змінна х, якій ви надаєте довільне числове значення.
////     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
////       Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = 1;

if (x !== 0) {
    console.log('Вірно')
} else {
    console.log('Невірно')
}

//// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
//// (в першу, другу, третю или четверту частину години).

let time = 17;

if (time > 0 && time <= 15)  {
    console.log('First quarter of an hour');
} else if (time > 15 && time <= 30) {
    console.log('Second quarter of an hour');
} else if (time > 30 && time <= 45) {
    console.log('Third quarter of an hour');
} else if (time > 45 && time <= 59) {
    console.log('Fourth quarter of an hour');
}


//// - У змінній day дано якесь число від 1 до 31.
////   Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 25;

if (day > 0 && day <= 10) {
    console.log('First');
} else if (day > 10 && day <= 20) {
    console.log('Second');
} else if (day > 20 && day <= 31) {
    console.log('Third');
}

//// - Скласти розклад на тиждень за домопоги switch.
//// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день
//// (можна замість плану на день, назву дня англійською).

let week = 3;

switch (week) {
    case 1:
        console.log('monday');
        break;
    case 2:
        console.log('tuesday');
        break;
    case 3:
        console.log('wednesday');
        break;
    case 4:
        console.log('thursday');
        break;
    case 5:
        console.log('friday');
        break;
    case 6:
        console.log('saturday');
        break;
    case 7:
        console.log('sunday');
        break;
    default:
        console.log('there is no such day in the week');
}


////     - Користувач вводить або має два числа.
////         Потрібно знайти та вивести максимальне число з тих двох .
////         Також потрібно врахувати коли введені рівні числа.
////

let num1 = 7;
let num2 = 3;

if (num1 > num2) {
    console.log(`${num1} is bigger than ${num2}`)
} else if (num1 < num2) {
    console.log(`${num2} is bigger than ${num1}`);
} else if (num1 === num2) {
    console.log('both numbers are same');
}


////     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
////     Напишіть код який, буде присвоювати змінній х значення "default" якщо ви намагаєтесь
////     присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).
////

let y = 0;

if (!y) {
    y = "default";
}
console.log(y);



////     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
//// За допомоги іф перевірити кожен його елемент на тривалість навчання.
//// У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0]['monthDuration'] > 5) {
    console.log(coursesAndDurationArray[0]['title'] + " Супер");
}

if (coursesAndDurationArray[1]['monthDuration'] > 5) {
    console.log(coursesAndDurationArray[1]['title'] + " Супер");
}

if (coursesAndDurationArray[2]['monthDuration'] > 5) {
    console.log(coursesAndDurationArray[2]['title'] + " Супер");
}

if (coursesAndDurationArray[3]['monthDuration'] > 5) {
    console.log(coursesAndDurationArray[3]['title'] + " Супер");
}

if (coursesAndDurationArray[4]['monthDuration'] > 5) {
    console.log(coursesAndDurationArray[4]['title'] + " Супер");
}

if (coursesAndDurationArray[5]['monthDuration'] > 5) {
    console.log(coursesAndDurationArray[5]['title'] + " Супер");
}