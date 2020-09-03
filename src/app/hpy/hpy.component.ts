import { Component, OnInit } from '@angular/core';

import {ServedetailsService} from '../servedetails.service';
import {Icourse1} from '../course';

@Component({
  selector: 'app-hpy',
  templateUrl: './hpy.component.html',
  styleUrls: ['./hpy.component.css']
})
export class HpyComponent implements OnInit {

  coursedet1:Icourse1[]

  images=[
    {img:'../../assets/img1/hpyimg1.jpg'},
    {img:'../../assets/img1/hpyimg2.jpg'},
    {img:'../../assets/img1/hpyimg3.jpg'},
  ]


  constructor(private servedetailsservice:ServedetailsService) { }

  ngOnInit(): void {

    this.servedetailsservice.getcoursedeatails()
        .subscribe(det=>{

          function isohp(element,index,det)
          {
            return (det[index].coursename=="Online Happiness Program")
          } 
          this.coursedet1=det.filter(isohp)
          console.log(this.coursedet1)
          });      
    } 

  }


