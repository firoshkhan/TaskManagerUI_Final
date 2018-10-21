import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import { SharedService } from '../../services/shared.service';
//import {Router1} from '@angular/router';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
  providers:[DatePipe]
 
})
export class UpdateComponent implements OnInit
 {
  Item:Task;
  TaskId:string;
  task:Task[];
  msg:string;
  constructor(private _service:SharedService, private activatedRoute: ActivatedRoute,
    private _router:Router,    
    private datePipe: DatePipe)
   {
    this.TaskId= this.activatedRoute.snapshot.paramMap.get('id');
      console.log(" task id" + this.TaskId );
     } 
 
  //  let param1: any = this._router.snapshot.queryParams["param1"];

  Update()
  {

    this._service.Edit (this.Item)
    .subscribe(i=>this.msg=i);
 
    console.log(this.msg);
  } 
  goToPage(pageName:string){
    
    
    //this._router.navigate avigate([`${pageName}`]);
  }
  ngOnInit()
   {
    this.Item=new Task();
    console.log(" task id" + this.TaskId);
   this._service.GetTaskById(parseInt(  this.TaskId))
    .subscribe(i=>{this.Item=i; 
     // console.log("Startdate 3" + this.Item.Startdate );
      console.log("Startdate 4 " + this.Item.Startdate );
    //  console.log("Startdate 6 "+  this.datePipe.transform(this.Item.Startdate,'yyyy-MM-dd'));
    //  this.Item.Startdate=this.datePipe.transform(this.Item.Startdate,'yyyy-MM-dd');
      console.log("Startdate5 " + this.Item.Startdate );
     } );
        
        this._service.GetAll()
        .subscribe(i=>{this.task=i;    });   
  }




}
