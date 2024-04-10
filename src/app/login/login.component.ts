import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { SnackbarService } from '../service/snackbar.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { GlobalConstants } from '../shared/global-constants';
import { error } from 'console';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm:any=FormGroup
  responseMessage:any;

  constructor(private userService:UserService,
              private snackbar:SnackbarService,
              private ngxService:NgxUiLoaderService,
              private formBuilder:FormBuilder,
              private dialogRef:MatDialogRef<LoginComponent>,
              private router:Router) { }

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      email:[null,[Validators.required,Validators.pattern(GlobalConstants.emailRegex)]],
      password:[null,[Validators.required]]
    })
  }

  handleSubmit(){
    this.ngxService.start();
    var formData=this.loginForm.value;
    var data={
      email:formData.email,
      password:formData.password
    }

    this.userService.Login(data).subscribe((repose:any)=>{
      this.ngxService.stop();
      this.dialogRef.close();

    },(error)=>{
      if(error.error?.message){
        this.responseMessage=error.error?.message;
      }else{
        this.responseMessage=GlobalConstants.genericError
      }
      this.snackbar.openMessage(this.responseMessage,GlobalConstants.error)

    })
  }

}
