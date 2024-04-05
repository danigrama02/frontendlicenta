import { Component } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.css'
})
export class MainpageComponent {
  weatherList : Array<any> = [];
  alertList : Array<any> = [];
  isListLoading = false;

  constructor(private weatherSerice : WeatherService){
    this.getWeatherList();
    this.getAlertList();
  }

  getWeatherList() : void {
    this.weatherList = this.weatherSerice.getWeatherReport();
  }

  getAlertList() : void {
    this.alertList = this.weatherSerice.getAlertReport();
  }

}
