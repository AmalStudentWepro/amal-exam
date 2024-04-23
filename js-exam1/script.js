// *// ИСХОДНЫЕ ДАННЫЕ НЕ ТРОГАТЬ!*

let discount = +prompt('Какая скидка?')

let totalSale = 0

let total = 0

let max = {}

let min = {}

let average = 0

let arr = [

    {

        name: 'Milk',

        price: 3.25

    },

    {

        name: 'Coffee',

        price: 1.5

    },

    {

        name: 'Ice Cream',

        price: 7.85

    },

    {

        name: 'Tomatos',

        price: 4.14

    },

    {

        name: 'Onion',

        price: 2.25

    }

]

let arr_sale = []


// *// 1. Сохранить самый дорогой товар в переменную`max`*

// *// 2. Сохранить самый дешевый товар в переменную`min`*

// *// 3. Сохранить общую цену без скидок в переменную`total`*

// *// 4. Сохранить общую цену со скидкой в переменную`totalSale`*

// *// 5. Сохранить элементы из массива arr с обновленной ценой (цена со скидкой) в переменную `arr_sale`*

// *// 6. Сохранить в переменной`average` среднюю цену всех продуктов без скидок*

// *// * Писать весь код в функции `setup()`*

// *// ТРИ ОЦЕНКИ. ЧИСТОТА КОДА, ЛОГИКА РАБОТЫ, УНИКАЛЬНОСТЬ КОДА*

const setup = () => {
    
    // 1
    total = 0;
    max = {
         price : 0 
        };
    
  
    // 2

    min = { price : Infinity }

   
    arr_sale = []

    // 3
    arr.forEach(item => {
        if (item.price > max.price) {
            max = item;
        }

        else if(item.price < min.price) {
            min = item;
        }

        total += item.price
    })
    
    // 4 

    // totalSale = total - total * (discount / 100)

   

    // 5 
    arr_sale = arr.map(item => ({
        ...item,
        salePrice: item.price - item.price * (discount / 100)
        
    }))

    // 6 
    average = total / arr.length;

    // console
    console.log(max);
    console.log(min);
    console.log(total);
    console.log(arr_sale);
    console.log(average);


}

setup()
