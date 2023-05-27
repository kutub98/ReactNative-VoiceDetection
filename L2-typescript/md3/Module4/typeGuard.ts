

// // key of guard 


// type alphanumeric = string | number

// function add(parem1 : alphanumeric, parem2: alphanumeric) : alphanumeric {
//     if(parem1 === "number" && parem2 === "number"){
//         return parem1 + parem2
//     }else{
//         return parem1.toString() + parem2.toString()
//     }
// }

// // console.log("string to number", add("20", "20"));
// // console.log(" number to string", add(20, 20));

// // in guard 

// type normalUserType ={
//     name: string,
// }

// type adminUserType = {
//     name: string,
//     role: "Admin"
// }
// const normalUser1 : normalUserType = {name: "Raihan"}
// const admin1 : adminUserType = {name: "Raihan", role: "Admin"}

// function userType (user: normalUserType | adminUserType) : string{
//     if('role' in user) {
//         return ` Mr/Mrs ${user.name} role is ${user.role}`
//     }else{
//         return `Mr/Mrs ${user.name} as usual User`
//     }
// }

// // console.log(normalUser1);
// // console.log(admin1);
// // console.log(userType(normalUser1));
// // console.log(userType(admin1));


// class animals {
//     name: string;
//     species: string;
//     sound: string;
//     constructor(name: string, species: string, sound: string ){
//         this.name = name,
//         this.species = species,
//         this.sound = sound
//     }
//     makeSound() {
//         console.log("Im making sound");
//     }

// }

// class dogs extends animals {
//     constructor(name: string, species: string, sound: string){
//         super(name, species, sound)
//     }
//     makeBark(): void {
//        console.log("I'm barking"); 
//     }
// }
// class cats extends animals {
//     constructor(name: string, species: string, sound: string){
//         super(name, species, sound)
//     }
//     makeMew(): void {
//        console.log("I'm doing mew"); 
//     }
// }

// // function getAnimal (animal : animals){
// //   if(animal instanceof dogs) {
// //     animal.makeBark()
// //   }else if ( animal instanceof cats){
// //     animal.makeMew()
// //   }else{
// //     animal.makeSound()
// //   }
// // }

// function isDogs (animal: animals) : animal is dogs {
//     return animal instanceof dogs
// } 
// function isCats (animal: animals) : animal is cats {
//     return animal instanceof cats
// } 
// function getAnimal (animal : animals){
//   if(isDogs(animal)) {
//     animal.makeBark()
//   }else if (isCats(animal) ){
//     animal.makeMew()
//   }else{
//     animal.makeSound()
//   }
// }

// const animal1s = new dogs('GERMAN', 'DOG', "BARKING")
// const animal2s = new cats('GERMAN', 'CAT', "MEG")