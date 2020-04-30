import {
  Component,
  OnInit,
  OnDestroy,
  Output,
  EventEmitter
} from '@angular/core';
import { SearchService } from './search.service';
import { Country } from '../interfaces/countries';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

  public countries: Country[] = [];
  public searchSubscription: Subscription;
  @Output() countrySelection: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private searchService: SearchService
  ) { }

  // Método que se ejecuta cuando el componente se inicia
  ngOnInit(): void {
    this.searchSubscription = this.searchService.getCountries().subscribe((response) => {
      this.countries = response.countries;
    }, (error) => {
      alert('Ocurrió un error al traer la información de la API');
    });
  }

  // Método que se ejecuta cuando el componente se destruye
  ngOnDestroy(): void {
    if (this.searchSubscription) { this.searchSubscription.unsubscribe(); }
  }

  // Al seleccionar un país, se emite un valor fuera del componente
  public selectCountry(countryId) {
    console.log(`(SEARCH): El país seleccionado es ${countryId}. Valor EMITIDO`);
    this.countrySelection.emit(countryId);
  }
}
