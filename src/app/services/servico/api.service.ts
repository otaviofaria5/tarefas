import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Enviroment } from '../enviroments/enviroment.service'

@Injectable({
  providedIn:'root'
})

export class ApiService {

  private base_url = Enviroment.apiurl + 'status';

  constructor(private http : HttpClient){}

  getStatus() : Observable<any>{
    return this.http.get(this.base_url);
  }


  getAll() : Observable<any> {
    return this.http.get(this.base_url);
  }


}

