// console.log(foobar(10, 20));

// function foobar(a, b) {
//     return a + b;
// }

// const foobar = function (a, b) {
//     return a + b;
// }

// const foobar = (a, b) => a + b;

// const foobar = (a, b) => {
//     let result = a + b;
//     console.log(result);
//     return result;
// };


// let newVar = function (a, b) {
//     return a + b;
// }(10, 20);


// let username = 'ahdashdfhg';//

// let user = {
//     username: 'kokos',
//     email: 'asd@foobar.com',
//     greeting:  function (msg) {
//         // arrow func - this-> window
//         console.log('hello my username is - ' + this.username);
//         console.log(this);
//     }
// }
//
// user.greeting('ola');


// let user = {
//     username: 'kokos',
//     email: 'asd@foobar.com',
//     greeting: function (msg)  {
//
//         const xxx = ()=>{
//             console.log(this);
//
//         }
//
//         xxx();
//
//     }
// }
//
// user.greeting('ola');


// function objectCreator(id, name) {
//     let obj = {id: id, name: name};
//     return {
//         getId: () => obj.id,
//         setId: (newId) => {
//             if (newId > 0 && newId !== obj.id) {
//                 obj.id = newId;
//             }
//
//         },
//         getName: () => obj.name,
//         setName: (name) => {
//             if (name) {
//                 obj.name = name;
//             }
//
//         },
//         toString: () => {
//             // return `id-${obj.id}, name - ${obj.name}`
//             return JSON.stringify(obj);
//         }
//     }
//
// }
//
// let proxy = objectCreator(1, 'kokos');
// console.log(proxy);
// proxy.setId(100500);
// console.log(proxy.getId());
//
// proxy.setName('abrikos');
// console.log(proxy.getName());
//
// console.log(proxy.toString());


// function rec() {
//     rec();
// }

// let arr = [11, 22, 33, [44, 55], [66, 77, [111, 222]]]; // [11,22,33,44,55..]
//
// let resultArray = [];
//
// // debugger;
// function flatter(arr) {
//     for (const item of arr) {
//         if (Array.isArray(item)) {
//             flatter(item);
//         }else {
//             resultArray.push(item);
//         }
//     }
//
// }
//
// flatter(arr);
//
// console.log(resultArray);


function* cardDealing() {
    let cards = [
        '6 spade', //+
        '7 spade', //+
        '8 spade',

        '6 heart',
        '7 heart',
        '8 heart',

        '6 club',
        '7 club',
        '8 club',

        '6 diamond',
        '7 diamond',
        '8 diamond',


    ];
    for (const card of cards) {
        yield card;
    }
    // yield cards[0];
    // yield cards[1];
    // yield cards[2];
    // yield cards[3];
}


// let dealer = cardDealing();
//
// console.log(dealer.next());
// //.......
// //.......
// //.......
// //.......
// console.log(dealer.next());
// //.......
// //.......
// //.......
// //.......
// console.log(dealer.next());
// console.log(dealer.next());
// console.log(dealer.next());
// console.log(dealer.next());
// console.log(dealer.next());
// console.log(dealer.next());
// console.log(dealer.next());
// console.log(dealer.next());
// console.log(dealer.next());
// console.log(dealer.next());
// console.log(dealer.next());

// console.log('start');
// try {
//     let a;
//     console.log(a);
// } catch (exception) {
//     console.error(exception);
// } finally {
//     console.log('final');
//
// }
// console.log('end');

// let obj = {};
//
// console.log(obj.wife);
// console.log(obj.wife.name);

// function foobar(obj) {
//
//     try {
//         console.log(obj.wife.name);
//     } catch (e) {
//         console.log(e);
//     } finally {
//         console.log('ashdgsajdh');
//     }
//
// }
//
// foobar({wife: {}}); //
// foobar() // error


function foobar(obj) {

    if (!obj.wife) {
        throw new Error('obj.wife is empty');
    } else {
        console.log(obj.wife.name);

    }

}


try {
    foobar({});

} catch (e) {
    //.....
    foobar({wife: {name: 'asdhashdgf'}});
}
