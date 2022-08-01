// interface User {
//     name:string;
// }
//
// const a = {};
// asserUser(a)
// a.name = "Dima"
//
//
// function asserUser(obj:unknown): asserts obj is User{
//     if(typeof obj === 'object' && !!obj && 'name' in obj){
//         return;
//     }
//     throw new Error('No is user')
// }