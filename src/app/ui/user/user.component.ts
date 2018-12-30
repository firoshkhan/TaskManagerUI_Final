import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import {Router} from '@angular/router';
import { SharedService } from '../../services/shared.service';
import { iif } from 'rxjs';
import { isNullOrUndefined } from 'util';
import { DatePipe } from '@angular/common';

import { OrderPipe } from 'ngx-order-pipe';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user:User[];
  Item:User;
  msg:string;
  btnAddCaption:string;
  UserId:number;
  order: string ;
  userFilter: any = { FirstName: '' };
  /*task:Task[];
  subtask:Task[];
  FilterTask:Task[];
  Item:Task;
  FilterApplied:boolean;
  FilterTaskName:string;
  public FilterParentTask:string;
  FilterPriorityFrom:number;
  FilterPriorityTo:number;
  FilterStartDate:Date;
  FilterEndDate:string;*/
  private datePipe: DatePipe
  constructor(private _service:SharedService, private orderPipe: OrderPipe,
    private _router: Router) { }


   ngOnInit() {

    this.Item=new User();
    this._service.GetAllUsers()
    .subscribe(i=>{this.user=i; 
        });
   
   this.btnAddCaption="Add";
   this.order='FirstName';
  }

  AddOrUpdate() 
  {
    
      console.log('btnAddCaption  '+this.btnAddCaption);
    if (this.btnAddCaption=="Update")
      {
       
        this.Item.UserId=this.UserId;     
        this._service.EditUser(this.Item)
        .subscribe(i=>this.user=i);   
        
        this.btnAddCaption="Add";
      }

    else
      {

    this._service.AddUsers(this.Item)
    .subscribe(i=>this.user=i); 
    //this.ngOnInit();

  

      }

     // this.Item.FirstName="";
     // this.Item.LastName="";
      //this.Item.EmployeeId="";
     // this.UserId=null;
    

  }
  ViewUser( User:User)
   {

    this.Item.FirstName=User.FirstName;
    this.Item.LastName=User.LastName;
    this.Item.EmployeeId=User.EmployeeId;
    this.UserId=User.UserId;
    this.btnAddCaption="Update";
    console.log('User id '+User.UserId);
    // this._router.navigate(['update', task.TaskId]);

   }

   Delete(User:User,index)
   {
    console.log('User id '+User.UserId);

    console.log('index id '+index);
    this._service.DeleteUser(User.UserId).subscribe(()=>{
      this.user.splice(index, 1);
        }  );
      }
   Reset()
   {  
  this.btnAddCaption="Add";
  
   }

   Sort(orderby:string)

   {
    this.order=orderby;
   }

   

}
