import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/api/cellphones'

@Injectable({
  providedIn: 'root'
})
export class CellphoneService {

  constructor(private http: HttpClient) {  }

  getAll(): Observable<any>{
    return this.http.get(baseUrl)
  }

  get(id:any): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`)
  }

  create(data:any): Observable<any>{
    return this.http.post(baseUrl,data)
  }

  updata(id:any,data:any): Observable<any>{
    return this.http.put(`${baseUrl}/${id}`,data)
  }

  delete(id:any): Observable<any>{
    return this.http.delete(`${baseUrl}/${id}`)
  }

  deleteAll(){
    return this.http.delete(baseUrl)
  }

  findByName(name:any): Observable<any>{
    return this.http.get(`${baseUrl}?name=${name}`)
  }
  findAllSold(){
    return this.http.get(`${baseUrl}/sold`)
  }
}
