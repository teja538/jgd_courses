import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {Icourse1} from '../app/course';

@Injectable({
  providedIn: 'root'
})
export class ServedetailsService {

  private url="form"
  det:Icourse1[]

  constructor(private http:HttpClient) { }

  servedetails(details){
    return this.http.post<any>(this.url,details)
  }

  getcoursedeatails(): Observable<Icourse1[]>
  {
    console.log("get course etails")
    console.log(this.http.get<Icourse1[]>(this.url+"/teja"))
    return this.http.get<Icourse1[]>((this.url+"/teja")); 
  }

}
