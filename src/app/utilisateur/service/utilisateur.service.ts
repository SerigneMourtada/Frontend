import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UtilisateurDTO } from '../model/user.dto';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private http:HttpClient) { }

  getAllUsers():Observable<UtilisateurDTO[]>{
    return this.http.get<UtilisateurDTO[]>("http://localhost:8082/Utilisateur/users");
  }


  deleteUser(id:number){
    return this.http.delete(`http://localhost:8082/Utilisateur/users/${id}`)
  }


  saveUser(data:UtilisateurDTO,centreId:number):Observable<UtilisateurDTO>{
    return this.http.post<UtilisateurDTO>(`http://localhost:8082/Utilisateur/user/${centreId}`,data)
  }

}
