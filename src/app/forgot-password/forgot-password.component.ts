import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SnackbarService } from '../service/snackbar.service';
import { MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../service/user.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { GlobalConstants } from '../shared/global-constants';
import { error } from 'console';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgotPasswordForm:any=FormGroup;
  responseMessage:any;

  constructor(private formBuilder:FormBuilder,
    private snackbar:SnackbarService,
    private dialogRef:MatDialogRef<ForgotPasswordComponent>,
    private userService:UserService,
    private ngxService:NgxUiLoaderService) { }

  ngOnInit(): void {
    this.forgotPasswordForm=this.formBuilder.group({
      email:[null,[Validators.required,Validators.pattern(GlobalConstants.emailRegex)]]
    });
  }

  handleSubmit(){
    this.ngxService.start();
    var formData=this.forgotPasswordForm.value;
    var data={
      email:formData.email
    }

    this.userService.forgotPassword(data).subscribe((response:any)=>{
      this.ngxService.stop();
      this.responseMessage=response?.message;
      this.dialogRef.close();
      this.snackbar.openMessage(this.responseMessage,"");
    },(error)=>{
      this.ngxService.stop();
      if(error.error?.message){
        this.responseMessage=error.error?.message;
      }else{
        this.responseMessage=GlobalConstants.genericError;
      }
      this.snackbar.openMessage(this.responseMessage,"");

    });
  }

}
