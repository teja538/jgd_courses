import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {username: '', password: ''};

  constructor(public dialogRef: MatDialogRef<LoginComponent>,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('User: ', this.user);
    if(this.user.username=="teja" && this.user.password=="369")
    {
      this.router.navigate(['form']);
    }
    this.dialogRef.close();
  }

}
