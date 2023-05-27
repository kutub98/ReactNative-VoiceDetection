
// arrow function 
const createArray = (parameter : string)=>{ // for specific
// const createArray = <T> (parameter : T)=>{ // for anytype 
    return [parameter]
}
const createArray1 = <T> (parameter : T)=>{ // for anytype 
    return [parameter]
}


console.log("crateArray", createArray("78"));
console.log("crateArray number", createArray1 <number>(23));// for making specific
console.log("crateArray string", createArray1 <string>("23"));// for making specific
console.log("crateArray boolean", createArray1 <boolean>(true)); // for making specific
type countyDetails ={
    name: string,
    age: number
}
console.log("crateArray object", createArray1 <object>({name: 'bangladesh', age: 43})); // for making specific
console.log("crateArray object", createArray1 <countyDetails>({name: "Bangldesh", age: 30})); // for making specific
// console.log("crateArray", createArray("78"));




//================================================
const createArray2 = <X, Y> (parameter1 : X, parameter2: Y): [X, Y]=>{ // for anytype 
    return [parameter1, parameter2]
}

console.log("crateArray2 number", createArray2 <number, string>(23, "string"));// for making specific
console.log("crateArray2 string", createArray2 <string, boolean>("23", true));// for making specific
console.log("crateArray2 boolean", createArray2 <boolean, object>(true , {name: "Bangladesh", age: 43})); // for making specific
type countyDetails2 ={
    name: string,
    age: number
}
console.log("crateArray2 object", createArray2 <string, object>("kutub",{name: 'bangladesh', age: 43})); // for making specific
console.log("crateArray2 object", createArray2 <countyDetails2, string>({name: "Bangldesh", age: 30}, "kutub2")); // for making specific
// console.log("crateArray", createArray("78"));


//spreed operator 

const myInfo ={
    name: "KUTUB UDDIN",
    age: 29,
    profession : "Web Developer"
}
const addMyInfoImineCrush = <t>(myInfo: t)=>{
// const addMyInfoImineCrush = (myInfo: object)=>{
    const crush = "Shamima";
    const newInfo = {...myInfo, crush}
    return newInfo
}

const myInfoResult= addMyInfoImineCrush(myInfo);