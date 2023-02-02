//1 завдання
const user = {};
Object.defineProperties(user,{
    'name':{writable:false},
    'age' :{writable:false},
    'id'  :{configurable:false}
})
console.log(Object.getOwnPropertyDescriptors(user))

//завдання




