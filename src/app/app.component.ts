import { Component } from '@angular/core';
import {ServedetailsService} from './servedetails.service';
import {CoursesService } from './courses.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ServedetailsService,CoursesService]
})
export class AppComponent {
  title = 'jgd';


  
}
