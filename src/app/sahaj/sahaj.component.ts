import { Component, OnInit } from '@angular/core';
import {ServedetailsService} from '../servedetails.service';


import {Icourse1} from '../course';
@Component({
  selector: 'app-sahaj',
  templateUrl: './sahaj.component.html',
  styleUrls: ['./sahaj.component.css']
})
export class SahajComponent implements OnInit {

  coursedet1:Icourse1[];

  constructor(private servedetailsservice:ServedetailsService) { }

  images=[
    {img:'../../assets/img1/sahajimg1.jpg'},
    {img:'../../assets/img1/sahaj2.1.jpg'},
    {img:'../../assets/img1/sahaj3.jpg'},
  ]

  ngOnInit(): void {

    this.servedetailsservice.getcoursedeatails()
        .subscribe(det=>{
          console.log(det)
          function isvtp(element,index,det)
          {
            return (det[index].coursename=="Sahaj samadhi meditation")
          } 
          this.coursedet1=det.filter(isvtp)
          console.log(this.coursedet1)
          });      
  }

}
