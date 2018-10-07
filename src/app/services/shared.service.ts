import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable } from  'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Task } from '../models/task';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';  
//import 'rxjs/Rx';
//import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  GetUrl="http://localhost:33274/GetAlltasks";
  AddUrl="http://localhost:33274/AddTask";
  constructor(private _http: Http) { }
    GetAll():Observable<Task[]>
    {
        return this._http.get(this.GetUrl)
        .map(response => {
            { return <Task[]>response.json() };
        })
    }
    Add(task:Task):Observable<string>
    {
       
        console.log("ssds1" + task.TaskName);
        console.log("ssds2" + task.Priority);
        console.log("ssds3" + task.Startdate);
        console.log("ssds4" + task.EndDate);
        console.log("ssds4" + this.AddUrl);
       
        const headers = new HttpHeaders().set('content-type', 'application/json');  
// return this._http.post(this.AddUrl,task)
        return this._http.post(this.AddUrl,
            {"TaskParentId":null,"TaskName":"Test fayaz ","Priority":10,"Startdate":"2018-09-30T00:00:00","Enddate":"2018-09-30T00:00:00","TaskParent":null})
       .map(response => {
             {return <string>response.json() } ;
            })
           
    }
    Delete(taskid:number):Observable<any>
    {
        return this._http.delete(this.GetUrl+"/"+taskid)
        .map(response => {
            { return <Task[]>response.json() };
        })


    }
    Edit(taskid:number):Observable<any>
    {
        return this._http.put(this.GetUrl,taskid)
        .map(response => {
            { return <Task[]>response.json() };
        })


    }
    Search(taskid:number):Observable<Task>
    {
        return this._http.get(this.GetUrl+"/"+taskid)
        .map(response => {
            { return <Task>response.json() };
        })

    }

    findWeather(city, state) {
        //this.totReqsMade = this.totReqsMade + 1;
        return this._http.get(this.Url)
            .map(response => {
                { return response.json() };
            })
           // .catch(error => Observable.throw(error.json()));
    
    }
}
