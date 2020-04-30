import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@cas-workshop/environments/environment';
import { Countries } from '@interfaces/countries';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private http: HttpClient
  ) { }

  public getCountries() {
    return this.http.get<Countries>(`${environment.apiUrl}countries`);
  }
}
