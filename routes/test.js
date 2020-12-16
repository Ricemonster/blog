function deepClone(newobj,obj){
    for(let key in obj){
        let value = obj[key]
        if(value instanceof Object){
            let target = new value.constructor
            newobj[key] = target
            deepClone[target,value]
        }else{
            newobj[key] = value
        }
    }
}


let a = {
    person:{
        name:"郭磊",
        age: 16,
        walk(){
            console.log('了几步路')
        }
    },
    wozhidao: 15
}
let b = {}