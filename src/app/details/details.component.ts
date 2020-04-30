import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { DetailsService } from './details.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnChanges {

  @Input() country;
  public confirmed = 0;
  public recovered = 0;
  public deaths = 0;

  constructor(
    private detailsService: DetailsService
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if (this.country) {
      this.detailsService.getCountryInfo(this.country).subscribe((response) => {
        this.confirmed = response.confirmed.value;
        this.recovered = response.recovered.value;
        this.deaths = response.deaths.value;
      });
    }
  }
}
