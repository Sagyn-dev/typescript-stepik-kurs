abstract class Logger {
    abstract log(message:any):void;
    printDate(){
      console.log(new Date());
    }

}

class LogWithDate extends Logger{
   logWithDate(req:any){
       this.printDate();
       this.log(req);
   }
    log(message: any): void {
        console.log(message);
    }
}

const c =new LogWithDate();
c.logWithDate('Start');
