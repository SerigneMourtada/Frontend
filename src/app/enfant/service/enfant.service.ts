import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {EnfantDTO} from '../model/enfant.dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnfantService {
  url="http://localhost:8082"

  constructor(private http:HttpClient) {}

  getAllEnfant():Observable<EnfantDTO[]>{
    return this.http.get<EnfantDTO[]>("http://localhost:8082/Enfant/enfants")
  }


  ajouterEnfant(data:EnfantDTO,parentId:number):Observable<EnfantDTO>{
    return this.http.post<EnfantDTO>(`http://localhost:8082/Enfant/enfants/${parentId}`,data)
  }


  supprimerEnfant(id:number){
    return this.http.delete(`http://localhost:8082/Enfant/enfants/${id}`);
  }

  getEnfantById(id:number):Observable<EnfantDTO>{
    return this.http.get<EnfantDTO>(`http://localhost:8082/Enfant/enfants/${id}`);
  }

}
