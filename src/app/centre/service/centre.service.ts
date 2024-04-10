import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CentreDTO } from '../model/centre.dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CentreService {

  constructor(private http:HttpClient) { }

  getAllCentres():Observable<CentreDTO[]>{
    return this.http.get<CentreDTO[]>("http://localhost:8082/CentreVaccination/centres");

  }

  deleteCentre(id:number){
    return this.http.delete(`http://localhost:8082/CentreVaccination/centres/${id}`)
  }

  saveCentre(data:CentreDTO):Observable<CentreDTO>{
    return this.http.post<CentreDTO>("http://localhost:8082/CentreVaccination/centres",data);
  }
}
