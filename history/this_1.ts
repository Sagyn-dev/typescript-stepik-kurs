// class Payment {
//     private date:Date = new Date();
//     getDate(this:Payment){
//         return this.date;
//     }
//
//     getDateArrow = () =>{
//         return this.date
//     }
// }
//
// const p = new Payment();
// console.log(p.getDate());
//
// const user = {
//     id:1,
//     paymentDate:p.getDate.bind(p),
//     paymentDateArrow:p.getDateArrow
// }
// console.log(user.paymentDate());
// console.log(user.paymentDateArrow());
//
// class PaymentPersistent extends Payment {
//     save(){
//         return this.getDateArrow();
//     }
// }
//
// console.log(new PaymentPersistent().save());