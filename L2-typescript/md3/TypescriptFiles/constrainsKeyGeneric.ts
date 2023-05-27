type personType = {
    name: string,
    age: number,
    address: string
}
type newType = "age" | "Name" | "address"
type newTypeOfUsingKey = keyof personType

const a : newType = "address"