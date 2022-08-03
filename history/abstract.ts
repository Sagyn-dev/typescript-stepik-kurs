// abstract class Controller {
//     abstract handle(req:any):void;
//     handleWithLogs(req:any){
//         console.log('start');
//         this.handle(req);
//         console.log('end');
//     }
//
// }
//
// class UserControler extends Controller{
//     handle(req: any): void {
//         console.log(req);
//     }
// }
//
// const c =new UserControler();
// c.handleWithLogs('Request');
