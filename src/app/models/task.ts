export class Task {
    TaskId: number;
    Priority:number;
    TaskParentId:number;
    TaskName:string;
    Startdate:Date;
    Enddate:Date;
    TaskParent:Task;

}
