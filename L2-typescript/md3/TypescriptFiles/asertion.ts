let assertion :any;

assertion = "hello how are you?";
(assertion as string).length;
<string>assertion.length;


function kgToGram (parem : string | number): string | number | undefined {
    if(typeof parem === "string"){
        const value = parseFloat(parem) * 1000;
        return `The converted from Kg to Gram ${value} gram`
    }
    if(typeof parem === "number"){
        return parem * 1000
    }
}

const convertToGram = (poriman: string | number) : string | number | undefined =>{
    if(typeof poriman === "string"){
        const value = parseFloat(poriman) * 1000;
        return `The converted from Kg to Gram ${value} gram`
    }
    if(typeof poriman === "number"){
        return poriman * 1000
    }
}

const result =<number>convertToGram(20);
const result1 = <string> convertToGram("20");
console.log("number",result)
console.log("String",result1)