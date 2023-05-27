// default parameter 
// normal function
function add(num1: number, num2: number): number{
    return num1 + num2
}

// console.log("normal function",add(10, 220))


//arrow function

const arrowFunction = (num1: number, num2:number) : number => num1 + num2;
const result = arrowFunction(2, 3)
// console.log("arrow function",result);


// array function 

const arr = [1, 3, 5, 4]
// const arr = [1, 3, 5, 4 , "4"] // we cant use like this if type has been declared
const newArray = arr.map((elem : number) => elem * elem)
// console.log("Every Input has been square", newArray);


// function in function 

const person :{
    name: string,
    balance: number,
    // addBalance (money : number) :number; it will be usee when it will return (1)
    addBalance (money : number) :void; //it will be usee when it will not return (c.lg) (2)
} = {
    name: "kutub",
    balance: 100,
    addBalance(money: number){
        // return this.balance + money; // (1)
        // console.log(`my new balance ${this.balance + money}`)  // (2)
    }
}



// spread operator 

const myFriends = ["Raihan", "Faysal", "Morshed", "amir"]
const myNewFriends = ["Arfat", "Mehnur", "Sumu", "Sultana"]
 myFriends.push(...myNewFriends)
// console.log(myFriends);

// rest parameter

const greetings = (friend1: string, friend2: string, friend3: string): void=>{
    console.log(`Hi ${friend1} \n Hi ${friend2} \n Hi ${friend3}`);
}

// greetings("Raihan", "Faysal", "Morshed")

const persons : {
    name: string;
    id: number;
    balance: number;
    addBalance(money: number): void;
  } = {
    name: "kutub",
    id: 20,
    balance: 46,
    addBalance(money: number) {
      console.log(`my new balance is ${this.balance + money}`);
    },
  };
  persons.addBalance(34)
  persons.addBalance(34)
  persons.addBalance(34)
  persons.addBalance(34)

  person.balance = 45
persons.addBalance(34)
