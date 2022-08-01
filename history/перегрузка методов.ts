// class User {
//     skills:string[] = [];
//
// // принимает либо строку либо массив строк
//
//     addSkill(skill:string):void
//     addSkill(skill:string[]):void
//     addSkill(skill:string | string[]):void{
//         if(typeof skill === 'string'){
//             this.skills.push(skill);
//         }else {
//             skill.forEach(value => {
//                 this.skills.push(value);
//             })
//         }
//     }
// }
//
// let skillOnly  = 'Web';
// let skillsOnly = ['Web','Frontend','Backend'];
//
// const user = new User();
// user.addSkill(skillOnly);
//
// const user_2 = new User();
// user_2.addSkill(skillsOnly);
//
// console.log(user);
// console.log(user_2);