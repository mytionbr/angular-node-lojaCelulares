import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Cellphone } from '../models/cellphone.model';

const baseUrl = 'http://localhost:3000/cellphones'

@Injectable({
  providedIn: 'root'
})
export class CellphoneService {

  constructor(private http: HttpClient) {  }

  getAll(): Observable<Cellphone[]>{
    console.log('carregou')
    return this.http.get<Cellphone[]>(baseUrl)
  }

  get(id:any): Observable<Cellphone> {
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

  deleteAll(): Observable<any>{
    return this.http.delete(baseUrl)
  }

  findByName(name:any): Observable<Cellphone[]>{
    return this.http.get<Cellphone[]>(`${baseUrl}?name=${name}`)
  }
  findAllSold(){
    return this.http.get(`${baseUrl}/sold`)
  }
}
