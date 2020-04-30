export interface CovidResponse {
  confirmed: CovidData;
  recovered: CovidData;
  deaths: CovidData;
  lastUpdate: string;
}

export interface CovidData {
  value: number;
  detail: string;
}
