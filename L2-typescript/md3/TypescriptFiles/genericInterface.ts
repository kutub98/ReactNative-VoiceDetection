// generic interface 

// interface crushInterface <T>{
// interface crushInterface <T, U>{
interface crushInterface <T, U=null>{
    // name: string,
    // husband: T,
    name: string,
    husband: T,
    wife?: U
    
}

interface husbandInterface {
    name: string,
    salary: number,
}
// const crush1 : crushInterface <boolean> ={name: "Winslet", husband: true}
const crush1 : crushInterface <boolean,undefined> ={name: "Winslet", husband: true}
// const crush2 : crushInterface <string> = {name: "Winslet", husband: "Kutub"}
const crush2 : crushInterface <string, undefined> = {name: "Winslet", husband: "Kutub"}
// const crush3 : crushInterface <{name: string, salary: number}> = {name: "Winslet",husband: {
// const crush3 : crushInterface <husbandInterface> = {name: "Winslet",husband: {
const crush3 : crushInterface <husbandInterface, null> = {name: "Winslet",husband: {
    name: "Kutub",
    salary: 300000,
}}
// const crush3 : crushInterface <object> = {name: "Winslet", husband :{
//     name: "kutub",
//     salary: 40000,
// }}


// const crush4 : crushInterface <object, object>={
// const crush4 : crushInterface <{name: string, age: number}, {name: string, age: number}>={

interface nameAndAge {name: string, age: number}
// const crush4 : crushInterface <{name: string, age: number}, {name: string, age: number}>={
const crush4 : crushInterface <nameAndAge, nameAndAge>={
    name: "kutub",
    husband : {
        name: "kutub",
        age: 30,
    },
    wife: {
        name: "Shamima",
        age: 25
    }
}























// const rollNumbers : Array<string> = ["33", "30", "32"]
// const rollNumber2 : Array<number> = [33, 43, 432]
// const rollNumber3 : Array<boolean> = [true, false]

type genericType<T> = Array<T>;
const rollNumbers: genericType<string> = ["33", "30", "32"];
const rollNumber2: genericType<number> = [33, 43, 432];
const rollNumber3: genericType<boolean> = [true, false];

type nameAndRollType = { name: string; roll: number };
// const nameAndNumber : genericType<{name: string, roll: number}> = [
// const nameAndNumber : Array<{name: string, roll: number}> = [
type nameAndRoll = { name: string; roll: number };
const nameAndNumber: genericType<nameAndRollType> = [
  {
    name: "kutub",
    roll: 3,
  },
  {
    name: "kutub2",
    roll: 2,
  },
];

// tuple generic type

type tupleGeneric<t, y> = [t, y];
const relation: tupleGeneric<string, string> = ["Kutub", "Shamima"];

// object and string tuple generic

// type  relationshipSalary = {name: string, salary: number}
interface  relationshipSalaryInterface {
    name: string, 
    salary: number
}

// const relationship: tupleGeneric<object, string> = [
// const relationship: tupleGeneric<{name: string, salary: number}, string> = [ //best practice
// const relationship: tupleGeneric<relationshipSalary, string> = [ //best practice
const relationship: tupleGeneric<relationshipSalaryInterface, string> = [ //best practice
    { name: "KUTUB", 
    salary: 300000 
    },
    "Shamima"
];



