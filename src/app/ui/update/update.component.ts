import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task';
import { SharedService } from '../../services/shared.service';
import {Router, ActivatedRoute} from '@angular/router';
import { DatePipe } from '@angular/common';
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
