
import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable } from  'rxjs';

import { Task } from '../models/task';
import { User } from '../models/user';
import { Project } from '../models/project';
import { HttpModule } from '@angular/http';
//import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';  
//import 'rxjs/Rx';
//import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})

export class SharedService {
  GetUrl="http://localhost:33274/GetAlltasks";
  AddUrl="http://localhost:33274/AddTask";
  EditUrl="http://localhost:33274/UpdateTask";
  GetTaskUrl="http://localhost:33274/GetTasksById";
  DelTaskUrl="http://localhost:33274/DeleteTask";
  
//final 
GetUserUrl="http://localhost:33274/GetAllUsers";
AddUserUrl="http://localhost:33274/AddUser";
EditUserUrl="http://localhost:33274/UpdateUser";
GetUserbyIdUrl="http://localhost:33274/GetUsersById";
DelUserUrl="http://localhost:33274/DeleteUser";
  

//final Project
GetProjectUrl="http://localhost:33274/GetAllProjects";
AddProjectUrl="http://localhost:33274/AddProject";
EditProjectUrl="http://localhost:33274/UpdateProject";
GetProjectbyIdUrl="http://localhost:33274/GetProjectsById";
DelProjectUrl="http://localhost:33274/DeleteProject";
  
  constructor(private _http: Http) { }
    Greet(name:string):string{
        return 'Hello'+ name;
    
    }
    GetAll():Observable<any>
    {
        return this._http.get(this.GetUrl).pipe(
        map(response => response.json() ));
    }
   
    //final
    GetAllUsers():Observable<any>
    {
        return this._http.get(this.GetUserUrl).pipe(
        map(response => response.json() ));
    }
    AddUsers(user:User):Observable<any>
    {
        const headers = new HttpHeaders().set('content-type', 'application/json');  
      //  console.log('first name'+user.FirstName);
        return this._http.post(this.AddUserUrl,user).pipe(
            map(response => {
             {return <any>response.json() } ;
     }))
    }

    DeleteUser(Userid:number):Observable<string>
    {
        return this._http.delete(this.DelUserUrl+"/"+Userid).pipe(
        map(response => {
            { return <string>response.json() };
        }))


    }
    EditUser(user:User):Observable<any>
    {
         
          const headers = new HttpHeaders().set('content-type', 'application/json');  
        return this._http.put(this.EditUserUrl,user).pipe(
        map(response => {
            { return <any>response.json() };
        }))


    }

    SearchUser(taskid:number):Observable<Task>
    {
        return this._http.get(this.GetUrl+"/"+taskid).pipe(
        map(response => {
            { return <Task>response.json() };
        }))

    }

    //final

    GetAllProjects():Observable<any>
    {
        console.log('Project id ');
        
        return this._http.get(this.GetProjectUrl).pipe(
        map(response => response.json() ));

        
    }
    AddProjects(Project:Project):Observable<any>
    {
        const headers = new HttpHeaders().set('content-type', 'application/json');  
      //  console.log('first name'+Project.FirstName);
        return this._http.post(this.AddProjectUrl,Project).pipe(
            map(response => {
             {return <any>response.json() } ;
     }))
    }

    DeleteProject(Projectid:number):Observable<string>
    {
        return this._http.delete(this.DelProjectUrl+"/"+Projectid).pipe(
        map(response => {
            { return <string>response.json() };
        }))


    }
    EditProject(Project:Project):Observable<any>
    {
         
          const headers = new HttpHeaders().set('content-type', 'application/json');  
        return this._http.put(this.EditProjectUrl,Project).pipe(
        map(response => {
            { return <any>response.json() };
        }))


    }

    SearchProject(taskid:number):Observable<Task>
    {
        return this._http.get(this.GetUrl+"/"+taskid).pipe(
        map(response => {
            { return <Task>response.json() };
        }))

    }
    
    //final
   
    GetTaskById(taskid:number):Observable<any>
    {
       // console.log(" my task id" + taskid);
        return this._http.get(this.GetTaskUrl+"/"+taskid).pipe(
        map(response => response.json() ));
    }
    Add(task:Task):Observable<string>
    {
       
       
        const headers = new HttpHeaders().set('content-type', 'application/json');  
 return this._http.post(this.AddUrl,task).pipe(
      //  return this._http.post(this.AddUrl,
        //    {"TaskParentId":null,"TaskName":"Test fayaz ","Priority":10,"Startdate":"2018-09-30T00:00:00","Enddate":"2018-09-30T00:00:00","TaskParent":null})
       map(response => {
             {return <string>response.json() } ;
            }))
           
    }
    Delete(taskid:number):Observable<string>
    {
        return this._http.delete(this.DelTaskUrl+"/"+taskid).pipe(
        map(response => {
            { return <string>response.json() };
        }))


    }
    Edit(task:Task):Observable<string>
    {
          console.log("edit " + task.TaskName);
          console.log("edit " + task.Startdate);

          const headers = new HttpHeaders().set('content-type', 'application/json');  
        return this._http.put(this.EditUrl,task).pipe(
        map(response => {
            { return <string>response.json() };
        }))


    }
    Search(taskid:number):Observable<Task>
    {
        return this._http.get(this.GetUrl+"/"+taskid).pipe(
        map(response => {
            { return <Task>response.json() };
        }))

    }

    findWeather(city, state) {
        //this.totReqsMade = this.totReqsMade + 1;
        return this._http.get(this.GetUrl).pipe(
            map(response => {
                { return response.json() };
            }))
           // .catch(error => Observable.throw(error.json()));
    
    }
}
