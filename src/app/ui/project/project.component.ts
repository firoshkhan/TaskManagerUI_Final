import { Component, OnInit,Input } from '@angular/core';
//import {Component1} from '@angular/core';

//import { Component, Input } from '@angular/core';
import { Project } from '../../models/project';

import {Router} from '@angular/router';
import { SharedService } from '../../services/shared.service';
import { iif } from 'rxjs';
import { isNullOrUndefined } from 'util';
import { DatePipe } from '@angular/common';

import { OrderPipe } from 'ngx-order-pipe';
//import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';

//import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { User } from '../../models/user';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],

})




export class ProjectComponent implements OnInit {
  closeResult: string;
  project:Project[];
  Item:Project;
  user:User[];
  useritem:User;

  msg:string;
  btnAddCaption:string;
  ProjectId:number;
  order: string ;
  date: Date;
  startdate:Date;
  enddate:Date;
  FirstandLastName:string;
  error:any={isError:false,errorMessage:''};
  ProjectFilter: any = { ProjectName: '' };
  userFilter: any = { FirstName: '' };
  private datePipe: DatePipe;
  constructor(private _service:SharedService, private orderPipe: OrderPipe,
    private _router: Router,private modalService: NgbModal) { }

   
   ngOnInit() {

    this.Item=new Project();
    this._service.GetAllProjects()
    .subscribe(i=>{this.project=i;this.project.length;
        });
   
   this.btnAddCaption="Add";
   this.order='ProjectName';
   this.Item.Priority=0;
  
  }

 //model window
  open(content) {

    
    this.useritem=new User();
    this._service.GetAllUsers()
    .subscribe(i=>{this.user=i;
        });

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      
    //console.log('first id ');
     // this.FirstandLastName="Firosh";
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
//model window
  AddOrUpdate() 
  {
    
      console.log('btnAddCaption  '+this.btnAddCaption);
    if (this.btnAddCaption=="Update")
      {
       
        this.Item.ProjectId=this.ProjectId;     
        this._service.EditProject(this.Item)
        .subscribe(i=>this.project=i);   
        
        this.btnAddCaption="Add";
      }

    else
      {

    this._service.AddProjects(this.Item)
    .subscribe(i=>this.project=i); 
        }

    
    

  }
  ViewProject( Project:Project)
   {

    this.Item.ProjectName=Project.ProjectName;
    this.Item.Startdate=Project.Startdate;
    this.Item.Enddate=Project.Enddate;
    this.Item.Priority=Project.Priority;
    this.ProjectId=Project.ProjectId;
    this.btnAddCaption="Update";
    console.log('Project id '+Project.ProjectId);
    // this._router.navigate(['update', task.TaskId]);

   }

   Delete(Project:Project,index)
   {
    console.log('Project id '+Project.ProjectId);

    console.log('index id '+index);
    this._service.DeleteProject(Project.ProjectId).subscribe(()=>{
      this.project.splice(index, 1);
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

   
   SetDate(values:any){
    if (values.currentTarget.checked)
    {
 
    //this.date.setDate(  new Date() + 3 );
    this.Item.Startdate=new Date();
    this.enddate = new Date();
    this.enddate.setDate( this.enddate.getDate() + 1 );
    this.Item.Enddate=this.enddate;
    }
    else
    {   this.Item.Startdate=null;
      this.Item.Enddate=null;
    }
    }

    compareTwoDates(){
      

      let SDate = moment(this.Item.Startdate);
      let EDate = moment(this.Item.Enddate);
    
      if(SDate> EDate)
      {
      
        console.log('entered id 2');
         this.error={isError:true,errorMessage:'Start date should be less than End date'};
      }
      else{
        console.log('else id 2');
        this.error="";
      }
   }
/*
   open(content) {
    console.log('open id 2'+ content);
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = 'Closed with: ${result}';
    }, (reason) => {
      this.closeResult = 'Dismissed ${this.getDismissReason(reason)}';
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  'with: ${reason}';
    }
  }*/


}
