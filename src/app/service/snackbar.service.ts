import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { error } from 'console';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackbar:MatSnackBar) { }

  openMessage(message:string,action:string){
    if(action == 'error'){
      this.snackbar.open(message,'',{
        horizontalPosition:'center',
        verticalPosition:'top',
        duration:2000,
        panelClass:['black-snackbar']
      });
    }else{
      this.snackbar.open(message,'',{
        horizontalPosition:'center',
        verticalPosition:'top',
        duration:2000,
        panelClass:['green-snackbar']
      });
     }
}
}
