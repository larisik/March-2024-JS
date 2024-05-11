//// 1) - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

document.write(`<p class="task">Task #1</p>`)
for (let i = 1; i <= 10; i++) {
    document.write(`
                <div>
                    <p>This is a div inside an iteration</p>
                </div>`);
}

//// 2) - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
document.write(`<p class="task">Task #2</p>`)

for (let i = 1; i <= 10; i++) {
    document.write(`
                <div>
                    <p>Div #${i}</p>
                </div>`);
}

//// 3) - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

document.write(`<p class="task">Task #3</p>`)

let y = 1
while (y < 21) {
    document.write(`
                <h1>
                    Title
                </h1>`);
    y++;
}

//// 4) - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

document.write(`<p class="task">Task #4</p>`)

let i = 1
while (i < 21) {
    document.write(`
                <h1>
                    Title <span style="color:red">${i}</span>
                </h1>`);
    i++;
}

//// 5) - Використовуючи данні з масиву, за допомоги document.write та циклу
//// побудувати структуру по шаблону
//// Масив:
////
////     let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
////
//// ШАБЛОН:
////     <ul>
////        <li>ITEM OF ARRAY</li>
////         <!--
////             і тд інші об'єкти масиву
////              ...
////              ...
////              ...
////         -->
////     </ul>
////
//// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву

document.write(`<p class="task">Task #5</p>`)

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

document.write('<ul>');
for (const item of listOfItems) {
    document.write(`
                <li style="text-transform: uppercase;">
                    ${item}
                </li>`);

}
document.write('</ul>');
////
//// -----------------------------------------------
////
////     6) Використовуючи данні з масиву, за допомоги document.write та циклу
//// побудувати структуру по шаблону
//// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
////

document.write(`<p class="task">Task #6</p>`)

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];
////
//// ШАБЛОН
//// <div class="product-card">
////     <h3 class="product-title">TITLE. Price - PRICE</h3>
//// <img src="IMAGE" alt="" class="product-image">
//// </div>
//// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту
////
////


for (const product of products) {
    document.write(`
                <div class="product-card">
                    <h3 class="product-title">${product.title}. Price - ${product.price}</h3>
                    <img src="${product.image}" alt="" class="product-image">
                </div>`);

}
////
//// --------------------
////     7) є масив
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
//// за допомоги циклу вивести:
////     - користувачів зі статусом true
//// - користувачів зі статусом false
//// - користувачів які старші за 30 років

document.write(`<p class="task">Task #7</p>`)

document.write(`<p>7.1 Користувачі зі статусом true:</p>`)
for (const user of users) {
    if (user.status){
        document.write(`
                <p style="text-transform: capitalize">
                    ${user.name}
                </p>`);
    }
}

document.write(`<p>7.2 Користувачі зі статусом false:</p>`)
for (const user of users) {
    if (!user.status){
        document.write(`
                <p style="text-transform: capitalize">
                    ${user.name}
                </p>`);
    }
}

document.write(`<p>7.3 Користувачі які старші за 30 років:</p>`)
for (const user of users) {
    if (user.age > 30){
        document.write(`
                <p style="text-transform: capitalize">
                    ${user.name}
                </p>`);
    }
}