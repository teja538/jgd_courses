import { Component, OnInit } from '@angular/core';
import {CoursesService } from '../courses.service';
import {Icourse} from '../course';


@Component({
  selector: 'app-vtp',
  templateUrl: './vtp.component.html',
  styleUrls: ['./vtp.component.css']
})
export class VtpComponent implements OnInit {
  
  coursedetails:Icourse[];
 

  constructor(private courseservice:CoursesService) { }

  ngOnInit(): void {
    this.coursedetails=this.courseservice.getcoursedetails();
    console.log(this.coursedetails);
  } 

}
