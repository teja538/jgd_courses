import { Component, OnInit } from '@angular/core';
import {CoursesService } from '../courses.service';
import {ServedetailsService} from '../servedetails.service';


import {Icourse} from '../course';
import {Icourse1} from '../course';


@Component({
  selector: 'app-vtp',
  templateUrl: './vtp.component.html',
  styleUrls: ['./vtp.component.css']
})
export class VtpComponent implements OnInit {
  
  coursedetails:Icourse[];

  coursedet1:Icourse1[];

  constructor(private courseservice:CoursesService,private servedetailsservice:ServedetailsService) { }

  images=[
    {img:'../../assets/img1/vtpimg1.jpg'},
    {img:'../../assets/img1/vtpimg2.jpg'},
    {img:'../../assets/img1/vtpimg3.jpg'},
  ]

  ngOnInit(): void {
    this.coursedetails=this.courseservice.getcoursedetails();
    console.log(this.coursedetails);

    this.servedetailsservice.getcoursedeatails()
        .subscribe(det=>{
          console.log(det)
          function isvtp(element,index,det)
          {
            return (det[index].coursename=="Volunteer Training Program")
          } 
          this.coursedet1=det.filter(isvtp)
          console.log(this.coursedet1)
          });      
    } 

}
