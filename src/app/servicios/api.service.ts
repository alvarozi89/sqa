import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

const base_url = environment.API;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _htpp:HttpClient) { }

  getCity(name:any){
    return this._htpp.get<any>(base_url+name)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
