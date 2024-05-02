import { Component, Input } from '@angular/core';
import { Weather } from '../../models/Weather';
@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrl: './weather-card.component.css'
})
export class WeatherCardComponent{
  @Input() weather?: Weather;

  public snow_src : string = "/assets/snow.png";
  public rain_src : string = "/assets/rain.png";
  public sun_src : string = "/assets/sun.png";
  public cloudy_src : string = "/assets/cloudy.png";

  public sun : string ="sun";
  public snow : string="snow";
  public rain : string="rain";
  public cloudy : string="cloudy";
}
