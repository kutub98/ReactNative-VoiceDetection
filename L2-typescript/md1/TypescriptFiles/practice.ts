// const userInfo = [101, "Ema", "John", true,  , "2023"];
const userInfo : [number, string, string, boolean, string] = [101, "Ema", 'Jhon', false, "2023"]






// const findCommonElements = (arr1: number[], arr2: number[]) => {
//     const result : number []= []
//     for (let i=0; i <arr1.length; i++){
//         for (let j = 0; j <arr2.length ; j++ ){
//             if(arr1[i] === arr2[j] && !result.includes(arr1[i])){
//                 result.push(arr1[i])
//                 break
//             }
//         }
//     }
//     return result;
// }

function findCommonElements(arr1: number[], arr2: number[]): number[] {
    const result: number[] = [];
    let i = 0, j = 0;
  
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] === arr2[j]) {
        result.push(arr1[i]);
        i++;
        j++;
      } else if (arr1[i] < arr2[j]) {
        i++;
      } else {
        j++;
      }
    }
  
    return result;
  }
  
  
  
  const arrOne = [1, 3, 53, 322, 4, 5, 7];
  const arrTwo = [9, 63, 322, 7, 4, 5, 8];
  const findCommon = findCommonElements(arrOne, arrTwo);
//   console.log(findCommon); // Output: [322, 4]
  
interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
  }
  
  function filterProducts <T extends Product, K extends keyof T> (products: T[], criterion: K, value: T[K]): T[] {
    return products.filter(product => product[criterion] === value);
  }
  const products: Product[] = [
    { id: 1, name: 'Product A', price: 10.0, category: 'Category 1' },
    { id: 2, name: 'Product B', price: 20.0, category: 'Category 2' },
    { id: 3, name: 'Product C', price: 30.0, category: 'Category 1' },
    { id: 4, name: 'Product e', price: 40.0, category: 'Category 2' },
    { id: 4, name: 'Product f', price: 40.0, category: 'Category 2' },
    { id: 4, name: 'Product g', price: 40.0, category: 'Category 2' },
  ];
  
  const filteredProducts = filterProducts(products, 'category', 'Category 2');
  // console.log(filteredProducts);
  
  const numbers: number[]= [32, 43, 44, 4, 5]
  const sumOfEvens : number = numbers.filter((num:number) => num % 2 === 0).reduce((acc:number, cur:number) => acc + cur , 0)
  // console.log(sumOfEvens);

  const numbers2 : number []= [43,454, 3,6]

  const sumOfEvens2 : number = numbers2.reduce((acc: number, cur: number) => {
    return cur % 2 === 0 ? acc + cur: acc
  },0)

  // console.log(sumOfEvens2);

  const sumOfEvens3 = (num: number[]): number =>{
    let sum = 0;
    for (let number of num) {
      if(number % 2 ===0){
        sum+=number
      }
    }
    return sum
  }

  const numbers3 : number[]= [43, 12,8, 9,65]
  // console.log(sumOfEvens3(numbers3))



  interface details {
    name: string;
    age: number;
    email: string
  }
  const personDetails : details [] = [
    {name: 'kutub1', age: 30, email: "kutubUddin"},
    {name: 'kutub2', age: 30, email: "kutubUddin2"},
    {name: 'kutub3', age: 30, email: "kutubUddin3"},
    {name: 'kutub3', age: 30, email: "kutubUddin3"},
    {name: 'kutub4', age: 30, email: "kutubUddin4"},
    {name: 'kutub5', age: 30, email: "kutubUddin5"}
  ]
// function findDetailsByEmail (personDetails: details[], email: string): details | null{
//   for (const person of personDetails){
//     if(person.email === email){
//       return person  
//     }
//   }
//   return null
// }

function findDetailsByEmail (personDetails: details[], name: String, age: number): details [] {
  return personDetails.filter(person => person.name === name && person.age === age)
}

const person1Details = findDetailsByEmail(personDetails, "kutub1", 30)
// console.log(person1Details);


function minMaxNumber (...number: number[]): [number, number]{
  const max = Math.max(...number)
  const min = Math.min(...number)
  return [min, max]
}
const findMinMaxNumber= [3, 34, 43, 2, 14, 0.5]
const [min, max] = minMaxNumber(...findMinMaxNumber)
// console.log(`Minimum value: ${min}`); // Output: Minimum value: 1
// console.log(`Maximum value: ${max}`);

 
function secondWayToFindMinMax (...numbers : number[]): [number, number]{
  const max = Math.max(...numbers)
  const min = Math.min(...numbers)
  return [min, max]
}
const numberList = [43, 23, 5, 1, -1]
const results = secondWayToFindMinMax(...numberList)
type heroNumber = string| number | boolean

const inputSomething : unknown = 45;
// const checkNullish = inputSomething ?? "right"
// const checkNullish = inputSomething ?? "right"
console.log((inputSomething as number).toFixed(2));

const myLuckNow = (num: string | number): string | number  => {
  if(typeof num === "string"){
    return 'this is string'
  } // else if(typeof num === "number" ){
  //   return num
  // }
  return num
}

type MovieType ={
  name: string,
  duration: string,
  category: string
}

const data: MovieType={
  name: 'farzana Riat',
  duration: "310 miniutes",
  category: "action"
}
type myMovieType = keyof MovieType;
// console.log(data.category);

function calculateArea (lengths: number, widths: number): number {
  const totalArea = lengths * widths
  return totalArea
}
const lengths: number = 5;
const width: number = 10;
const area: number = calculateArea(lengths, width);
console.log(area);  // Output: 50