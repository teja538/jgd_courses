import { Component, OnInit } from '@angular/core';

import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  
  
  openloginform() {
    this.dialog.open(LoginComponent, {width: '350px', height: '330px'});
  }
  goto(id){
    let el=document.querySelector('#'+id);
    el.scrollIntoView(true);
    }



}
