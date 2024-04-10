import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VaccinDTO } from '../model/vaccin.dto';

@Injectable({
  providedIn: 'root'
})
export class VaccinService {

  constructor(private http:HttpClient) {}

  getAllVaccin():Observable<VaccinDTO[]>{
    return this.http.get<VaccinDTO[]>("http://localhost:8082/Vaccin/vaccins")

  }

  deleteVaccin(id:number){
    return this.http.delete(`http://localhost:8082/Vaccin/vaccins/${id}`);
  }

  saveVaccin(data:VaccinDTO):Observable<VaccinDTO>{
    return this.http.post<VaccinDTO>("http://localhost:8082/Vaccin/vaccins",data)
  }


}
