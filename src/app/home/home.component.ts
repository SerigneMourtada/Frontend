import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { LoginComponent } from '../login/login.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }

  handleSignUpAction(){
    const dialogConfig=new MatDialogConfig;
    dialogConfig.width='550px';
    this.dialog.open(SignUpComponent,dialogConfig);
  }

  handleForgotPasswordAction(){
    const dialogConfig=new MatDialogConfig();
    dialogConfig.width='550px';
    this.dialog.open(ForgotPasswordComponent,dialogConfig);
  }

  handleLoginAction(){
    const dialogConfig=new MatDialogConfig();
    dialogConfig.width="550px";
    this.dialog.open(LoginComponent,dialogConfig);
  }

}
