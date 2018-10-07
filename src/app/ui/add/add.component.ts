import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
Item:Task;
msg:string;

  constructor(private _service:SharedService) {
    this.Item=new Task();
  
  }
  ngOnInit() {
    
  }

  Add() 
  {
   
    this._service.Add(this.Item)
    .subscribe(i=>this.msg=i);
 
    console.log(this.msg);
  }

}
