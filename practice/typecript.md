interface fruits {
    name: string,
    price: number,
}

interface global {
    family: string,
    color: string
}

type vegie = {
    name: string,
    price: number,
} & market

type market = {
    family: string,
    color: string
}

const fruit: fruits & global = {
    name: "apple",
    price: 30,
    family: 'fruit',
    color: 'Pink'
}
const vegie: vegie = {
    name: "apple",
    price: 30,
    family: 'fruit',
    color: 'Pink'
}
console.log(fruit)

const arr: (string & number)[] = [] // never because value can't be string and number at the same time
// const arr: (string | number)[] = ["john",67,"jahsjhas"]

let str: never = 'aakansha' // never means this variable will never contains or accepts a value
console.log(str)

function add<T>(num1: T, num2: T) {
    if (typeof num1 === "number" && typeof num2 === "number")
        return num1 + num2
    return "string"
}
add<number>(1, 2)

type myArray<T> = Array<T>
type addNewProp<T> = T & { newProp: string }

interface student {
    id: number,
    name: string
}
const value: myArray<addNewProp<student>> = [{ id: 23, name: "john", newProp: "ajshtyeghsvjagshj" }]
console.log(value)

interface User<T> {
 name: string;
 email: string;
 online: boolean;
 skills: T;
}

const newUser: User<string[]> = {
 name: "Benny barks",
 email: "ben@mail.com",
 online: false,
 skills: ["chewing", "barking"],
};

const brandNewUser: User<number[]> = {
 name: "Benny barks",
 email: "benny@mail.com",
 online: false,
 skills: [2456234, 243534],
};
console.log(newUser)

<!-- Passing default generic values to generics -->

interface User<T=number[]> {
 name: string;
 email: string;
 online: boolean;
 skills: T;
}

const newUser: User<string[]> = {
 name: "Benny barks",
 email: "ben@mail.com",
 online: false,
 skills: ["chewing", "barking"],
};

const brandNewUser: User = {
 name: "Benny barks",
 email: "benny@mail.com",
 online: false,
 skills: [2456234, 243534],
};
console.log(newUser)

<!-- Passing multiple generic values -->
console.clear()
interface User<T = number[], U = string[]> {
    name: string;
    email: string;
    online: boolean;
    skills: T;
    hobbies: U;
}

const newUser: User<string[], number[]> = {
    name: "Benny barks",
    email: "ben@mail.com",
    online: false,
    skills: ["chewing", "barking"],
    hobbies: [24545, 8928378]
};

const brandNewUser: User<number[], string[]> = {
    name: "Benny barks",
    email: "benny@mail.com",
    online: false,
    skills: [2456234, 243534],
    hobbies: ['24545', '8928378']
};
console.log(newUser, brandNewUser)