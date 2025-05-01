function delayedcall(fn:()=>void):void{
setTimeout(fn,1000)
}

delayedcall(function(){
    console.log("hi there");
    
})