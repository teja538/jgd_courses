import { Component, OnInit } from '@angular/core';

import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';



@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css']
})
export class Home1Component implements OnInit {

   // Slider Images
   slides=[{'image':'../assets/img1/hpy1.jpg','text':'The Happiness Program'},
   {'image':'../assets/img1/sahaj3.jpg','text':'2nd slide'},
   {'image':'../assets/img1/vtp1.jpg','text':'3rd slide'}]


   experience=[{
    'image':'../assets/img1/boat.jpg','h':'A','t':'SKY significantly reduced cholesterol,with no change in diet in just 3 weeks,<br>even under stressful conditions.'
   },{'image':'../assets/img1/boat.jpg','h':'B','t':'SKY significantly reduced cholesterol,with no change in diet in just 3 weeks,<br>even under stressful conditions.'},{'image':'../assets/img1/boat.jpg','h':'B','t':'SKY significantly reduced cholesterol,with no change in diet in just 3 weeks,<br>even under stressful conditions.'}]
  

   
  constructor() { }

  ngOnInit(): void {
  }

}
