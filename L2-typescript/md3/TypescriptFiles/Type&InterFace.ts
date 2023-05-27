type user = {
 name: string,
 age: number
}

type extendedUser = user & {
    role: string,
}

// type extended 
const usersOfTypeExtended : extendedUser ={
    name: "RAIHAN",
    age: 30,
    role: "unknown"
}


interface iUser {
    name: string,
    age: number
}

interface iExtended extends iUser {
    role: string
} 

// interface extended  , interface only for Object
const users : iExtended ={
    name: "osman",
    age: 39,
    role: "unknown"
}



const userWithTypeAlias : user={
    name: "Type Alias",
    age: 330,
}
// userWithTypeAlias.age
const userWithInterface : iUser={
    name: "Interface",
    age: 330,
}
// userWithInterface.age


// function ,array, object

// const addNumbers = (num1: number, num2: number): number => num1+num2;
type addNumbersType = (num1: number, num2: number) => number;

interface IAddNumbers {
    (num1: number, num2: number) : number;
}
const addNumbers: addNumbersType = (num1, num2) => num1+num2;

// type rollNumberTypes = string[]
type rollNumberTypes = number[]
interface IRollNumber {
    // [index: number]: string;
    [index: number]: number;
}
// const rollNumber: IRollNumber = ["1", "2", "4", "6", "34"]; //[index]
const rollNumber : IRollNumber = [1, 2, 4, 6, 34]; //[index]