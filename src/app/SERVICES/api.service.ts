import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private _jsonURL ='assets/DATA/products.json';
  constructor(private Http: HttpClient) { }

  getJson():Observable<any>{
    return this.Http.get(this._jsonURL )
  }
}
