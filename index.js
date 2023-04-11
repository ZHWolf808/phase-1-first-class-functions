function receivesAFunction(callingfunction){
    callingfunction();
    
}

function returnsANamedFunction(){
return function namedFunction(){
    console.log('this is a named function')
} 
}

function returnsAnAnonymousFunction() {
    return function (){
        console.log('this is a function')
    }
}