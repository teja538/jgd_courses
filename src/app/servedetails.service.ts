import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServedetailsService {

  private url="form"

  constructor(private http:HttpClient) { }

  servedetails(details){
    return this.http.post<any>(this.url,details)
  }
}
