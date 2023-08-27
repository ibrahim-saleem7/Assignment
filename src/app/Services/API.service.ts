import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class APIService {

constructor(private http : HttpClient) { }

  getAll() : Observable<any>{
    return this.http.get(`${environment.baseApi}/students`)
  }
  getById(id : any) : Observable<any>{
    return this.http.get(`${environment.baseApi}/students/${id}`)
  }
}
