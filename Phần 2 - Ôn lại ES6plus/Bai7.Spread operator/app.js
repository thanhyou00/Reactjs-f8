

// Ví dụ 1 : Nối mảng

var array1 = ['Javascript', 'Ruby', 'PHP'];
var array2 = ['ReactJS', 'Dart'];

var array3 = [...array1, ...array2];
var array4 = [...array2, ...array1];
console.log(array3); // Output : (5) ['Javascript', 'Ruby', 'PHP', 'ReactJS', 'Dart']
console.log(array4); // Output : (5) ['ReactJS', 'Dart', 'Javascript', 'Ruby', 'PHP']

// Ví dụ 2 : Nối objects

var object1 = {
    name : 'Javascript'
};
var object2 = {
    price : 1000
};

var object3 = {
    ...object1,
    ...object2
};
console.log(object3); // Output : {name: 'Javascript', price: 1000}

// Ví dụ 3 : Override - Ghi đè

var person1 = {
    name : 'John',
    age : 20,
    address : 'New York'
};
var person2 = {
    ...person1,
    name : 'Ana'
}
console.log(person2); // Output : {name: 'Ana', age: 20, address: 'New York'}

// Ví dụ 4 : 

var array = ['Javscript', 'PHP', 'Ruby'];
const logger = (...rest) => {
    for(var i = 0; i< rest.length; i++) {
        console.log(rest[i]);
    };
};

logger(...array); // logger('Javscript', 'PHP', 'Ruby');