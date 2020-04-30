import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public selectedCountry;

  public countryChanged(value) {
    console.log(`(APP): El valor RECIBIDO del componente search es ${value}`);
    this.selectedCountry = value;
  }
}
