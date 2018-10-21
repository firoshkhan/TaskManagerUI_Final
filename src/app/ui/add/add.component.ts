import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task';
import { SharedService } from '../../services/shared.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
Item:Task;
msg:string;
task:Task[];


 constructor(private _service:SharedService) {
    this.Item=new Task();
    
  
  }
  ngOnInit() {
    this.Item=new Task();
    this._service.GetAll()
    .subscribe(i=>{this.task=i; 
        });
    
  }

   Add() 
  {
   
    this._service.Add(this.Item)
    .subscribe(i=>this.msg=i); 
    console.log(this.msg);
  }

  
}
