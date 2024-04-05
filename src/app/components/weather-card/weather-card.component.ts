import { Component, Input } from '@angular/core';
import { Weather } from '../../models/Weather';
@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrl: './weather-card.component.css'
})
export class WeatherCardComponent{
  @Input() weather?: Weather;
}
