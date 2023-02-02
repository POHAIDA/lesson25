//1 завдання

const user = {};
Object.defineProperties(user,{
    'name':{writable:false},
    'age' :{writable:false},
    'id'  :{configurable:false}
})
console.log(Object.getOwnPropertyDescriptors(user))

//2 завдання

const database = {
    dbName:'user',
    dbType:'MySQL',
}
Object.freeze(database)
const configureteDB = {
    token:'123',
    password:'567',
    user:'admin',
}
Object.seal(configureteDB)


//3 завдання

const salaries = {
    frontend: 2000,
    backend: 1500,
    design: 1000,

    set addSalaries(value){
    let result = ''
    
    for(i = 0;i<value.length;i++){
    result=value[i].split(': ');
    this[result[0]] = +result[1]
    }
}

}
Object.defineProperty(salaries, 'sum',{
    get (){
        let sum = 0;
        
        for (const salary in this){
            if(Number(this[salary])){
                sum += this[salary];
            }
           
        }
        console.log(sum);
    },
    enumerable:false,
})

salaries.sum
salaries.addSalaries = ['frontend: 2500','backend: 2000','design: 1500','manager: 800']
console.log(salaries)

//4 завдання

let user1 = {
    name: 'Mike',
    surname: 'Davis',
    age: '25',
}
Object.defineProperty(user1,'userInfo',{
    get (){
        let keyvalue = {}
        for(const key in this){
            keyvalue[key] = user1[key]
        }console.log(keyvalue)
    }
})
user1.login = 'MK-18'
user1.userInfo

