import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { InfoformComponent } from './infoform/infoform.component';
import { LoginComponent } from './login/login.component';
import { CoursesComponent } from './courses/courses.component'; 

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
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
