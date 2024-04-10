import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
import { SnackbarService } from '../service/snackbar.service';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { GlobalConstants } from '../shared/global-constants';
import { error } from 'console';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  password=true;
  confirmPassword=true;
  signUpForm:any=FormGroup;
  responseMessage:any;

  constructor(private formBuilder:FormBuilder,
              private userService:UserService,
              private snackbarService:SnackbarService,
              private router:Router,
              private dialogRef:MatDialogRef<SignUpComponent>,
              private ngxService:NgxUiLoaderService) { }

  ngOnInit(): void {
    this.signUpForm=this.formBuilder.group({
      name:[null,[Validators.required,Validators.pattern(GlobalConstants.nameRegex)]],
      email:[null,[Validators.required,Validators.pattern(GlobalConstants.emailRegex)]],
      contactNumber:[null,[Validators.required,Validators.pattern(GlobalConstants.contactNumberRegex)]],
      password:[null,[Validators.required]],
      confirmPassword:[null,[Validators.required]]
    })

  }

  validateSumit(){
    if(this.signUpForm.controls['password'].value != this.signUpForm.controls['confirmPassword'].value){
      return true;
    }else{
      return false;
    }
  }

  handleSubmit(){
    this.ngxService.start();
    var formdata=this.signUpForm.value;
    var data={
      name:formdata.name,
      email:formdata.email,
      contactNumber:formdata.contactNumber,
      password:formdata.password
    }

    this.userService.signUp(data).subscribe((response:any)=>{
      this.ngxService.stop();
      this.dialogRef.close();
      this.responseMessage=response?.message;
      this.snackbarService.openMessage(this.responseMessage,"");
      this.router.navigate(['/']);

    },(error)=>{
      this.ngxService.stop();
      if(error.error?.message){
        this.responseMessage=error.error?.message
      }else{
        this.responseMessage=GlobalConstants.error
      }
      this.snackbarService.openMessage(this.responseMessage,GlobalConstants.error);

    });
  }

}
