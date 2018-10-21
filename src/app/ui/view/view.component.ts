import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task';
import {Router} from '@angular/router';
import { SharedService } from '../../services/shared.service';
import { iif } from 'rxjs';
import { isNullOrUndefined } from 'util';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  task:Task[];
  subtask:Task[];
  FilterTask:Task[];
  Item:Task;
  FilterApplied:boolean;
  FilterTaskName:string;
  public FilterParentTask:string;
  FilterPriorityFrom:number;
  FilterPriorityTo:number;
  FilterStartDate:Date;
  FilterEndDate:string;
  private datePipe: DatePipe
  constructor(private _service:SharedService, 
    private _router: Router) {
    
    
  }

   Edit( task:Task)
   {
     this._router.navigate(['update', task.TaskId]);

   }
   EndTask( task:Task)
   {

    task.Enddate=new Date();
    this._service.Edit(task);
     this._service.GetAll()
     .subscribe(i=>{this.task=i; 
         });
   }

   Delete( task:Task,index)
   {

    this._service.Delete(task.TaskId).subscribe(()=>{
      this.task.splice(index, 1);
  });
    

   // this._service.GetAll()
  //  .subscribe(i=>{this.task=i; 
    //    });
   }
   Search()
   {
    this.FilterApplied=false;
   // console.log(this.subtask.length);
    if (this.FilterTask==undefined) {     
      this.FilterTask = Object.assign([], this.task);    
      ///console.log("FilterTask" + this.task.length);
    }
    this.task = Object.assign([], this.FilterTask); 
    
    if (this.FilterTaskName.trim()!="")
    {
      //console.log("FilterTaskName" + this.FilterTaskName);
     // this.FilterApplied=true;
      this.task=this.task.filter(i=>i.TaskName.toUpperCase()
       .startsWith(this.FilterTaskName.toUpperCase() ) );

       //console.log("length in FilterTaskName" + this.task.length);
    } 
    if (this.FilterParentTask.trim()!="")
    {
      console.log("FilterTaskName1"  );
      console.log("FilterTaskName" + this.task[5].TaskParent["TaskName"] );
     // this.FilterApplied=true;
    
     this.task=this.task.filter(i=>   i.TaskParent !=null);
      this.task=this.task.filter(i=>  
         
                  i.TaskParent.TaskName.toUpperCase()
                  .startsWith(this.FilterParentTask.toUpperCase() )
            
           
    );
      
    } 
    if ( this.FilterPriorityFrom!=null && this.FilterPriorityFrom.toString().length >0 )
      {

       
               {
        //  console.log("FilterPriorityFrom" + this.FilterPriorityFrom.valueOf() + "ttt");
          // this.FilterApplied=true;
          this.task=this.task.filter(i=> i.Priority.valueOf() >= this.FilterPriorityFrom );
         // console.log("length in FilterPriorityFrom" + this.task.length);
      } 
    }
    if ( this.FilterPriorityTo!=null && this.FilterPriorityTo.toString().length >0 )
    {
     // console.log("FilterPriorityFrom" + this.FilterPriorityFrom);
     // this.FilterApplied=true;
    this.task=this.task.filter(i=>i.Priority.valueOf() <= this.FilterPriorityTo );
   // console.log("length in FilterPriorityTo" + this.task.length);
    } 
    if (this.FilterStartDate!=null && this.FilterStartDate.toString().length >0 )
    { 
     // console.log("length in FilterPriorityTo" + this.FilterStartDate);
      const start = new Date(this.FilterStartDate);     
        this.task=this.task.filter(i=>new Date(i.Startdate).getMonth()==start.getMonth()      
        && new Date(i.Startdate).getDate()==start.getDate() 
        && new Date(i.Startdate).getFullYear()==start.getFullYear() 
        );       
    }  
    if (this.FilterEndDate!=null && this.FilterEndDate.toString().length >0 )
    {
      const end = new Date(this.FilterEndDate);     
      this.task=this.task.filter(i=>new Date(i.Enddate).getMonth()==end.getMonth()      
      && new Date(i.Enddate).getDate()==end.getDate() 
      && new Date(i.Enddate).getFullYear()==end.getFullYear() 
      );  
    }  
    
  
   // console.log(" firosh " + this.task[5].Taskparent.TaskId  );
  
   }


  ngOnInit() {
    this.Item=new Task();
    this._service.GetAll()
    .subscribe(i=>{this.task=i; 
        });
        this.FilterTaskName="";
    this.FilterParentTask="";
    this.FilterPriorityFrom=null;
    this.FilterPriorityTo=null;
    this.FilterStartDate=null;
    this.FilterEndDate=null;
  }

  
  

}
