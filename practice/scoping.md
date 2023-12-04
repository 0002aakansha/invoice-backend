- ```
  let a = 'Hello';
  function greet() {
      let b = 'World';
      console.log(a + ' ' + b);
      if (b == 'World') {
          let c = 'hello';
          console.log(a + ' ' + b + ' ' + c);
      }
      console.log(a + ' ' + b + ' ' + c);
  }
  greet();
  ```

- ```

  ```

```

var text = 'outside';
function logIt(){
console.log(text);
var text = 'inside';
};
logIt();

```

- ```

  ```

console.log(a);
a = 10;

````

- ```

a = 5;
console.log(a);
let a;

````

```

const fruitBasket = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig' ];
const collection = fruitBasket.reduce((obj, fruit, index, fruitBasket)=>{
obj[fruit] = (obj[fruit] || 0) + 1
return obj
}, {})

```

```

let str = 'aakansha'
let str2 = Object.assign([], str)
console.log(str, str2)

```

// console.log(a); // hello

// greet();
// console.log(a);  // 3

// program to display value
// a = 5;
// console.log(a);
// let a; // error


// a = 5
// console.log(a)
// let a

// let str = 'aakansha'
// let str2 = Object.assign([], str)
// console.log(str, str2)

// const string = "character";
// const method3 = Array.from(string);
// console.log(method3);

// function getCount(objects) {
//     let count = 0;
//     for(let i=0; i<objects.length ; i++){
//         if(objects[i].x == objects[i].y){
//             count += 1;
//         }
//     }
//     return count;
//     }
// console.log(getCount([{x:1,y:3},{x:2,y:2},{x:3,y:3}]))



// let count = 1
// const collection = fruitBasket.reduce((obj, fruit, index, fruitBasket)=>{
//     for(let f of fruitBasket){
//         if(f === fruit) obj[fruit] = ++count
//     }
//     count = 0
//     return obj
// }, {})

const collection = fruitBasket.reduce((obj, fruit, index, fruitBasket)=>{
    obj[fruit] = (obj[fruit] || 0) + 1
    return obj  
}, {})
// console.log(collection)

const data = [
  {a: 'happy', b: 'robin', c: ['blue','green']}, 
  {a: 'tired', b: 'panther', c: ['green','black','orange','blue']}, 
  {a: 'sad', b: 'goldfish', c: ['green','red']}
];


// console.log(data.reduce((arr, color)=>{
//     for(let i of color.c) {
//         if(!arr.includes(i)) arr.push(i)
//     }
//     return arr
// }, []))

const increment = (count) => ++count;
const decrement = (count) => --count;
// const reset = (count) => count = 0;
const double = (count) => count*=2;

const pipeline = [increment, decrement, double]
// console.log(pipeline.reduce((value, operation)=>{
//  return operation(value)   
// }, 1))


const squareList = arr => {
  // Only change code below this line
  const ans = arr.filter(a => a > 0).reduce((acc, val) =>{
       acc.push(val*val)
       return acc
  }, [])
  return ans;
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
// console.log(squaredIntegers);


const globalArray = [1, 30, 4, 21, 100000];

function nonMutatingSort(arr) {
  // Only change code below this line
const ans = arr.map(a => a).sort((a,b)=> a-b)
// console.log(ans)
return ans

  // Only change code above this line
}

// nonMutatingSort(globalArray);


function splitify(str) {
  // Only change code below this line
  return str.split(/\W/)
  // Only change code above this line
}

console.log(splitify("Hello World,I-am code"))
