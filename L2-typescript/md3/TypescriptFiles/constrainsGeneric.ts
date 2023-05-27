// generic constrains function 

type myInfoType ={
    // name: string,
    // age: number,
    // profession: string
    name: string,
    age: number,
    profession: string,
    other1: boolean,
    other2: null
}
const myInfo2 : myInfoType ={
    name: "KUTUB UDDIN",
    age: 29,
    profession : "Web Developer", 
    other1: false,
    other2: null
}

type MandatoryType = {name: string, age: number, profession: string}
interface MandatoryInterface 
{name: string, 
age: number,
profession: string
}
// const addMyInfoImineCrush2 = <T extends {name: string, age: number, profession: string}>(myInfo: T)=>{
// const addMyInfoImineCrush2 = <T extends MandatoryType>(myInfo: T)=>{
const addMyInfoImineCrush2 = <T extends MandatoryInterface>(myInfo: T)=>{
// const addMyInfoImineCrush = (myInfo: object)=>{
    const crush = "Shamima";
    const newInfo = {...myInfo, crush}
    return newInfo
}

const myInfoResult2= addMyInfoImineCrush(myInfo2);
myInfoResult2.other1