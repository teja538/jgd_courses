import { Component, OnInit } from '@angular/core';
import {ServedetailsService} from '../servedetails.service'

@Component({
  selector: 'app-infoform',
  templateUrl: './infoform.component.html',
  styleUrls: ['./infoform.component.css']
})
export class InfoformComponent implements OnInit {

  constructor(private cservice:ServedetailsService) { }

  ngOnInit(): void {
  }


  onsubmit(course,date,time,teacher,link,password)
  {
    this.cservice.servedetails({course:course,date:date,time:time,teacher:teacher,password:password,link:link})//req.body 
        .subscribe(
          data=>{console.log(data)},
          err=>console.log(err)
        )
  }

}
