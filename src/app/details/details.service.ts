import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@cas-workshop/environments/environment';
import { CovidResponse } from '@interfaces/covid';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor(
    private http: HttpClient
  ) { }

  public getCountryInfo(country) {
    return this.http.get<CovidResponse>(`${environment.apiUrl}countries/${country}`);
  }
}
