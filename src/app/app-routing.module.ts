import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { InfoformComponent } from './infoform/infoform.component';
import { LoginComponent } from './login/login.component';
import { CoursesComponent } from './courses/courses.component'; 
import { Home1Component } from './home1/home1.component';
import { VtpComponent } from './vtp/vtp.component';
import { HpyComponent } from './hpy/hpy.component';
import { SahajComponent } from './sahaj/sahaj.component';

const routes: Routes = [
  { path: '', redirectTo: '/home1', pathMatch: 'full' },
  {path:"home1",component:Home1Component},
  {path:"vtp",component:VtpComponent},
  {path:"hpy",component:HpyComponent},
  {path:"sahaj",component:SahajComponent},

  {path:"home",component:HomeComponent},
  {path:"form",component:InfoformComponent},
  {path:"login",component:LoginComponent},
  {path:"courses",component:CoursesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
