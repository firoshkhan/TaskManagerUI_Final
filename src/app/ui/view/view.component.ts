import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task';
import {Router} from '@angular/router';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  task:Task[];
  Item:Task;
  constructor(private _service:SharedService) {
    this.Item=new Task();
    this._service.GetAll()
    .subscribe(i=>this.task=i);

  }


  ngOnInit() {

  
  }

  
  

}
