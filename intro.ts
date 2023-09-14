let helloworld = "hello world"

interface User {
    name: string,
    id: number
}

const user: User = {
    name: "Douglas",
    id: 1
}

function getLength(obj: string | string[]){
if(typeof obj === "string"){
    return [obj]
}
console.log(obj)
}