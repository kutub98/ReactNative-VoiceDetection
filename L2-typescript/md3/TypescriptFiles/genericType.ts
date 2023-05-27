// // const rollNumbers : Array<string> = ["33", "30", "32"]
// // const rollNumber2 : Array<number> = [33, 43, 432]
// // const rollNumber3 : Array<boolean> = [true, false]

// type genericType<T> = Array<T>;
// const rollNumbers: genericType<string> = ["33", "30", "32"];
// const rollNumber2: genericType<number> = [33, 43, 432];
// const rollNumber3: genericType<boolean> = [true, false];

// type nameAndRollType = { name: string; roll: number };
// // const nameAndNumber : genericType<{name: string, roll: number}> = [
// // const nameAndNumber : Array<{name: string, roll: number}> = [
// type nameAndRoll = { name: string; roll: number };
// const nameAndNumber: genericType<nameAndRollType> = [
//   {
//     name: "kutub",
//     roll: 3,
//   },
//   {
//     name: "kutub2",
//     roll: 2,
//   },
// ];

// // tuple generic type

// type tupleGeneric<t, y> = [t, y];
// const relation: tupleGeneric<string, string> = ["Kutub", "Shamima"];

// // object and string tuple generic

// // type  relationshipSalary = {name: string, salary: number}
// interface  relationshipSalaryInterface {
//     name: string, 
//     salary: number
// }

// // const relationship: tupleGeneric<object, string> = [
// // const relationship: tupleGeneric<{name: string, salary: number}, string> = [ //best practice
// // const relationship: tupleGeneric<relationshipSalary, string> = [ //best practice
// const relationship: tupleGeneric<relationshipSalaryInterface, string> = [ //best practice
//     { name: "KUTUB", 
//     salary: 300000 
//     },
//     "Shamima"
// ];
