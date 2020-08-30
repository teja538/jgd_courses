import { Injectable } from '@angular/core';
import {Icourse} from './course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  getcoursedetails():Icourse[]
  {
    return[
      {image:'../../assets/img1/vtpimg1.jpg',coursename:'Volunteer Training Program1',date:'10th to 13th sept',time:'evening 6 to 8',teacher:'suarshan badireddi'},
      {image:'../../assets/img1/vtpimg2.jpg',coursename:'Volunteer Training Program2',date:'10th to 13th sept',time:'evening 6 to 8',teacher:'suarshan badireddi'},
      {image:'../../assets/img1/vtpimg3.jpg',coursename:'Volunteer Training Program3',date:'10th to 13th sept',time:'evening 6 to 8',teacher:'suarshan badireddi'},
      // {image:'',coursename:'Volunteer Training Program4',date:'10th to 13th sept',time:'evening 6 to 8',teacher:'suarshan badireddi'}, 
      // {image:'',coursename:'Volunteer Training Program4',date:'10th to 13th sept',time:'evening 6 to 8',teacher:'suarshan badireddi'},    
      // {image:'',coursename:'Volunteer Training Program4',date:'10th to 13th sept',time:'evening 6 to 8',teacher:'suarshan badireddi'},       
    ]
  }

  constructor() { }
}
