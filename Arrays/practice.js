let customers = [
    {
       'id': 1,
       'f_name': 'Abby',
       'l_name': 'Thomas',
       'gender': 'M',
       'married': true,
       'age': 32,
       'expense': 500,
       'purchased': ['Shampoo', 'Toys', 'Book']
    },
    {
        'id': 2,
        'f_name': 'Abby',
        'l_name': 'Thomas',
        'gender': 'M',
        'married': true,
        'age': 32,
        'expense': 1000,
        'purchased': ['Shampoo', 'Book']
     }
    ,
    {
       'id': 3,
       'f_name': 'Jerry',
       'l_name': 'Tom',
       'gender': 'M',
       'married': true,
       'age': 64,
       'expense': 100,
       'purchased': ['Stick', 'Blade']
    },
    {
       'id': 4,
       'f_name': 'Dianna',
       'l_name': 'Cherry',
       'gender': 'F',
       'married': true,
       'age': 22,
       'expense': 1500,
       'purchased': ['Lipstik', 'Nail Polish', 'Bag', 'Book']
    },
    {
       'id': 5,
       'f_name': 'Dev',
       'l_name': 'Currian',
       'gender': 'M',
       'married': true,
       'age': 82,
       'expense': 90,
       'purchased': ['Book']
    },
    {
       'id': 6,
       'f_name': 'Maria',
       'l_name': 'Gomes',
       'gender': 'F',
       'married': false,
       'age': 7,
       'expense': 300,
       'purchased': ['Toys']
    },
    {
        'id': 7,
        'f_name': 'Dev',
        'l_name': 'Currian',
        'gender': 'M',
        'married': true,
        'age': 82,
        'expense': 25000,
        'purchased': ['Book','Mobile']
     },
 ];

 const temp = {}

 customers.forEach((customer) => {
    if(temp[customer.f_name]){
        let previousValue = temp[customer.f_name]
        previousValue.expense = previousValue.expense + customer.expense
        previousValue.purchased = previousValue.purchased.concat(customer.purchased)
        temp[customer.f_name] = previousValue
    }else{
        temp[customer.f_name] = customer
    }
 })

 console.log(temp);
 
//  console.log(customers);
 

console.log('Start');

const p1 = new Promise((resolve, reject) => {
  console.log('Inside p1');
  setTimeout(() => {
    resolve('Resolved p1');
  }, 0);
});

const p2 = p1.then(res => {
  console.log(res);
  return new Promise((resolve, reject) => {
    console.log('Inside chained p2');
    resolve('Resolved p2');
  });
});

p2.then(res => {
  console.log(res);
});

(async function() {
  const res = await p2;
  console.log('Awaited:', res);
})();

console.log('End');


console.log('1');

const p1 = new Promise((resolve, reject) => {
  console.log('2');
  setTimeout(() => {
    console.log('3');
    resolve('4');
  }, 0);
});

p1.then(res => {
  console.log('5');
  return Promise.resolve('6');
}).then(res => {
  console.log('7');
});

setTimeout(() => {
  console.log('8');
}, 0);

(async () => {
  const res = await p1;
  console.log('9');
})();

console.log('10');