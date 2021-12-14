
// Ví dụ 1 : 
var array = ['Javascript','PHP','Ruby'];

var [a, b, c] = array;
// Chỉ lấy a và c [a, , c];
// console.log(a, c);
console.log(a, b, c); // Output : Javascript PHP Ruby

// Rest parameters
var [a, ...rest] = array;
console.log(rest); // Output : ['PHP', 'Ruby']

// Ví dụ 2 :
var course = {
  name : 'Javascript',
  price : 1000,
  image : 'img-address',  
};

var {name, price, image, description = 'description value'} = course;
console.log(name, price, image); // Output : Javascript 1000 img-address
// Rest parameters
var {name, ...rest} = course;
console.log(rest); // Output : {price: 1000, image: 'img-address'}
console.log(name, description) // Output : Javascript description value

// Ví dụ 3 : 
const logger = (...rest) => {
    console.log(rest); // Output : (8) [1, 2, 3, 4, 5, 6, 7, 8]
}
logger(1,2,3,4,5,6,7,8); 

// Ví dụ 4 :
const logger2 = (a, ...rest) => {
    console.log(rest); // Output : (3) [2, 3, 4]
}
logger2(1, 2, 3, 4);

// Ví dụ 5 :

const logger3 = ({name, price, ...rest}) => { // Tham số là 1 objects
    console.log(name); // Output :  Javascript
    console.log(price); // Output : 1000
    console.log(rest); // Output : {description: 'description content'}
}
logger3({
  name : 'Javascript',
  price : 1000,
  description : 'description content',
});

// Ví dụ 6 : 
const logger4 = ([a, b, ...rest])=> {
    console.log(a); // Output : 1
    console.log(b); // Output : 2
    console.log(rest); // Output : (4) [3, 4, 5, 6]
}
logger4([1, 2, 3, 4, 5, 6]);