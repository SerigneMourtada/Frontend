import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url=environment.apiUrl

  constructor(private http:HttpClient) { 
}

  signUp(data:any){
    return this.http.post(this.url+"/user/signup",data);
  }

  forgotPassword(data:any){
    return this.http.post(this.url+"/user/forgot",data);
  }

  Login(data:any){
    return this.http.post(this.url+"/user/login",data);
  }
}
