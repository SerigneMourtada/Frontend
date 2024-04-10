import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ParentDTO } from '../model/parent.dto';

@Injectable({
  providedIn: 'root'
})
export class ParentService {

  constructor(private http:HttpClient) { }

  getAllParents():Observable<ParentDTO[]>{
    return this.http.get<ParentDTO[]>("http://localhost:8082/Parent/parents");
  }

  deleteParent(id:number){
    return this.http.delete(`http://localhost:8082/Parent/parents/${id}`);
  }

  saveParent(data:ParentDTO):Observable<ParentDTO>{
    return this.http.post<ParentDTO>("http://localhost:8082/Parent/parents",data);
  }


  getParentId(id:number):Observable<ParentDTO>{
    return this.http.get<ParentDTO>(`http://localhost:8082/Parent/parents/${id}`)
  }
}
