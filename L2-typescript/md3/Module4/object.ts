// class animal {
    // name: string;
    // species: string;
    // sound : string;
//  public   name: string; // (1)
//   public  species: string; // (2)
//   public  sound : string; // (3)

    // constructor( public name: string, species: string, sound: string){ // (1)
    // constructor( public name: string, public species: string, sound: string){  // (2)
    // constructor( public name: string, public species: string, public sound: string){ // (3)
        // this.name = name, // (1)
        // this.species = species, // (2)
        // this.sound = sound // (3)
    

//    public makeSound(){
//         console.log(` The ${this.name} says ${this.sound}`);
//     }
    // makeSound(){
    //     console.log(` The ${this.name} says ${this.sound}`);
    // }



class animal {
    constructor( public name: string, public species: string, public sound: string){

    }
    public makeSound(){
        console.log(` The ${this.name} says ${this.sound}`);
    }
}

const dog = new animal("German Separd", "Dog", "Gew Gew")
const cat = new animal("German Cat", "cat", "Mew Mew")
dog.makeSound()
cat.makeSound()
