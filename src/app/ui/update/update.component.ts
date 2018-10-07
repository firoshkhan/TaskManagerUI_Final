import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  Item:Task;
  constructor() {

    this.Item=new Task();
   }

  ngOnInit() {
  }

}
