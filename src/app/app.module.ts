import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InfoformComponent } from './infoform/infoform.component';
import { LoginComponent } from './login/login.component';
import { CoursesComponent } from './courses/courses.component'; 

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';

import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { CarouselModule } from 'ngx-owl-carousel-o';

// import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { Home1Component } from './home1/home1.component';
import { VtpComponent } from './vtp/vtp.component';
import { HpyComponent } from './hpy/hpy.component';
import { SahajComponent } from './sahaj/sahaj.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InfoformComponent,
    LoginComponent,
    CoursesComponent,
    Home1Component,
    VtpComponent,
    HpyComponent,
    SahajComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatFormFieldModule, 
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatCarouselModule.forRoot(),
    CarouselModule,


    // MatCheckboxModule,
    MatDialogModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    LoginComponent
]
})
export class AppModule { }
