// class User{
//     name:string;
//     age:number;
//
//     /// конструктор реализации
//     constructor();
//     constructor(name: string);
//     constructor(age: number);
//     constructor(name: string,age: number);
//     ///конструктор имплементации
//     constructor(ageOrName?: string | number, age?:number) {
//         if(typeof ageOrName == 'string')
//             this.name = ageOrName;
//         else if(typeof ageOrName == 'number' ){
//             this.age = ageOrName;
//         }
//         if(typeof age === 'number'){
//             this.age = age;
//         }
//     }
// }
//
// const ad = new User('Vasy');
// const ad2 = new User();
// const ad3 = new User(33);
// const ad4 = new User('Vasy',33);
// console.log(ad4);