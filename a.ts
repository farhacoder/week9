function isLegal(user:{firstname:string,
    age:number

}){
    if(user.age<18){
        return true
    }
    else{
        return false
    }
        
}

function greet(
    user:{firstname:string,
    age:number})
    {
console.log("hi"+user.firstname);

}
isLegal({
    firstname:"farha",
    age:28
})