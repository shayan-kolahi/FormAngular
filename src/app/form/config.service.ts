import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  constructor(private http: HttpClient) { }
  configUrl = 'https://apokar.gmodern.ir/api/1register';
  getConfig(hero:any){
    return this.http.post<any>(this.configUrl, hero);
  }
}
